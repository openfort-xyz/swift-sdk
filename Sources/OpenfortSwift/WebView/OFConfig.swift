import Foundation

internal struct OFConfig: Codable {
    let backendUrl: String?
    let iframeUrl: String?
    let openfortPublishableKey: String
    let shieldEncryptionKey: String
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

    static func openfortSyncScript() -> String {
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
        let overridesString = overrides.joined(separator: "\n")
        return """
            const storage = new KeychainStorage();
            const openfort = new Openfort({
                baseConfiguration: {
                    publishableKey: '\(config.openfortPublishableKey)',
                },
                shieldConfiguration: {
                    shieldPublishableKey: '\(config.shieldPublishableKey)',
                    shieldEncryptionKey: '\(config.shieldEncryptionKey)',
                    debug: \(debugValue ? "true" : "false")
                },
                overrides: {
        \(overridesString)
                },
            });
            
            window.openfort = openfort;
        """
    }
}
