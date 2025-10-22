import Foundation

internal struct OFConfig: Codable {
    let backendUrl: String?
    let iframeUrl: String?
    let openfortPublishableKey: String
    let shieldPublishableKey: String
    let shieldUrl: String?
    let debug: Bool
    
    static func loadFromMainBundle() -> OFConfig? {
        guard let url = Bundle.main.url(forResource: "OFConfig", withExtension: "plist"),
              let data = try? Data(contentsOf: url) else {
            print("OFConfig.plist not found")
            return nil
        }
        
        do {
            let decoder = PropertyListDecoder()
            return try decoder.decode(OFConfig.self, from: data)
        } catch {
            print("Failed to decode OFConfig.plist:", error)
            return nil
        }
    }

    static func openfortSyncScript(provider: String? = nil) -> String {
        guard let config = loadFromMainBundle() else {
            print("OFConfig not loaded")
            return ""
        }

        let debugValue = config.debug

        var overrides: [String] = []
        if let iframeURL = config.iframeUrl, !iframeURL.isEmpty {
            overrides.append("                iframeUrl: '\(iframeURL)',")
        }
        if let shieldURL = config.shieldUrl, !shieldURL.isEmpty {
            overrides.append("                shieldUrl: '\(shieldURL)',")
        }
        if let backendURL = config.backendUrl, !backendURL.isEmpty {
            overrides.append("                backendUrl: '\(backendURL)',")
        }
        overrides.append("                storage: storage,")

        var thirdPartyAuthBlock = ""
        if let providerStr = provider {
            thirdPartyAuthBlock = """
                thirdPartyAuth: {
                    provider: '\(providerStr)',
                    getAccessToken: async () => {
                      try {
                        console.log('----- Requesting access token from native auth -----');
                        return await window.__ofAuthBridgeRequest('app:third-party-auth:getAccessToken');
                      } catch (e) {
                        console.error('getAccessToken bridge error', e);
                        return null;
                      }
                    },
                },
            """
        }

        let overridesString = overrides.joined(separator: "\n")
        // JS helper for bridge
        let authBridgeHelper = """
            (function () {
              window.__ofAuthBridgeRequest = (eventName) => {
                const handler = window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.authHandler;
                if (!handler || typeof handler.postMessage !== 'function') {
                  return Promise.resolve(null);
                }
                // Prefer native reply (iOS 16+): postMessage returns a Promise
                try {
                  const maybe = handler.postMessage({ event: eventName });
                  if (maybe && typeof maybe.then === 'function') {
                    return maybe.then(v => (v == null ? null : v)).catch(() => null);
                  }
                } catch (_) {
                  // fall through to listener-based bridge
                }

                // Fallback: listener + window.postMessage handshake
                return new Promise((resolve) => {
                  const id = Math.random().toString(36).substring(2) + Date.now();
                  function listener(event) {
                    try {
                      const data = event.data;
                      if (data && typeof data === 'object' &&
                          data.event === eventName && data.id === id &&
                          data.data && ('value' in data.data)) {
                        window.removeEventListener('message', listener);
                        resolve(data.data.value);
                      }
                    } catch (_) {}
                  }
                  window.addEventListener('message', listener);
                  try {
                    handler.postMessage({ event: eventName, id });
                  } catch (_) {
                    window.removeEventListener('message', listener);
                    resolve(null);
                  }
                });
              };
            })();
        """
        // Compose the script, inserting helper before storage
        return """
        \(authBridgeHelper)
            const storage = new KeychainStorage();
            const openfort = new Openfort({
                baseConfiguration: {
                    publishableKey: '\(config.openfortPublishableKey)',
                },
                shieldConfiguration: {
                    shieldPublishableKey: '\(config.shieldPublishableKey)',
                    debug: \(debugValue ? "true" : "false")
                },
                overrides: {
        \(overridesString)
                },
        \(thirdPartyAuthBlock.isEmpty ? "" : "                \(thirdPartyAuthBlock)")
            });
            
            window.openfort = openfort;
        """
    }
}
