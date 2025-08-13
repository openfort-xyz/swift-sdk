import Foundation

public struct OFConfig: Codable {
    public let backendUrl: String?
    public let iframeUrl: String?
    public let openfortPublishableKey: String
    public let shieldEncryptionKey: String
    public let shieldPublishableKey: String
    public let shieldUrl: String?
    
    public static func load(from data: Data?) -> OFConfig? {
        guard let data = data else {
            print("❌ empty data.")
            return nil
        }
        
        let decoder = PropertyListDecoder()
        do {
            return try decoder.decode(OFConfig.self, from: data)
        } catch {
            print("❌ Failed to decode: \(error)")
            return nil
        }
    }
    
    
    func openfortSyncScript() -> String {
        var overrides: [String] = []
        if let iframeURL = iframeUrl, !iframeURL.isEmpty {
            overrides.append("                iframeUrl: '\(iframeURL)',")
        }
        if let shieldURL = shieldUrl, !shieldURL.isEmpty {
            overrides.append("                shieldUrl: '\(shieldURL)',")
        }
        if let backendURL = backendUrl, !backendURL.isEmpty {
            overrides.append("                backendUrl: '\(backendURL)',")
        }
        overrides.append("                storage: storage,")
        let overridesString = overrides.joined(separator: "\n")

        return """
        (function () {
          // Safe poster to Swift
          function post(method, payload) {
            try {
              var mh = window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.userHandler;
              if (mh) mh.postMessage(Object.assign({ method: method }, payload || {}));
            } catch (_) { /* no-op */ }
          }

          // Poll until condition is true
          function whenReady(check, next, interval) {
            if (check()) return next();
            setTimeout(function () { whenReady(check, next, interval); }, interval || 30);
          }

          // We need both the JS SDK constructor and the WK bridge
          function depsReady() {
            var ctorReady = typeof window.Openfort === 'function';
            var storageReady = typeof window.KeychainStorage === 'function'; // from securestorage.js
            var bridgeReady = !!(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.userHandler);
            return ctorReady && storageReady && bridgeReady;
          }

          function initOpenfort() {
            try {
              // If DOM already parsed, fine; scripts may still be loading—we already waited for constructors.
              var storage = new KeychainStorage();

              var openfort = new Openfort({
                baseConfiguration: {
                  publishableKey: 'YOUR_PUBLISHABLE_KEY'
                },
                shieldConfiguration: {
                  shieldPublishableKey: 'YOUR_SHIELD_PUBLISHABLE_KEY',
                  shieldEncryptionKey: 'YOUR_SHIELD_ENCRYPTION_KEY'
                },
                overrides: {
                  // optionally: iframeUrl, shieldUrl, backendUrl
                  // storage: storage
                  storage: storage
                }
              });

              window.openfort = openfort;
              window.__openfortReady = true;
              post('openfortReady', { success: true });
            } catch (e) {
              post('openfortInitError', { success: false, error: (e && e.message) ? e.message : String(e) });
            }
          }

          whenReady(depsReady, initOpenfort, 30);
        })();
        """
    }
}
