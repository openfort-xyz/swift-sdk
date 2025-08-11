import Foundation

struct OFConfig1 {
    private static let plistName = "OFConfig"
    private static func cfg() -> [String: Any]?  {
        guard let url = Bundle.main.url(forResource: plistName, withExtension: "plist"),
              let data = try? Data(contentsOf: url),
              let plist = try? PropertyListSerialization.propertyList(from: data, options: [], format: nil),
              let dict = plist as? [String: Any] else {
            return nil
        }
        return dict
    }
    
    static var openfortPublishableKey: String { (cfg()?["OpenfortPublishableKey"] as? String) ?? "" }
    static var shieldPublishableKey: String { (cfg()?["ShieldPublishableKey"] as? String) ?? "" }
    static var shieldEncryptionKey: String { (cfg()?["ShieldEncryptionKey"] as? String) ?? "" }
    
    static var iframeURL: String? { cfg()?["IframeURL"] as? String }
    static var shieldURL: String? { cfg()?["ShieldURL"] as? String }
    static var backendURL: String? { cfg()?["BackendURL"] as? String }
    
    static func openfortSyncScript(
        openfortPublishableKey: String,
        shieldPublishableKey: String,
        shieldEncryptionKey: String,
        iframeURL: String?,
        shieldURL: String?,
        backendURL: String?
    ) -> String {
        var overrides: [String] = []
        if let iframeURL = iframeURL, !iframeURL.isEmpty {
            overrides.append("                iframeUrl: '\(iframeURL)',")
        }
        if let shieldURL = shieldURL, !shieldURL.isEmpty {
            overrides.append("                shieldUrl: '\(shieldURL)',")
        }
        if let backendURL = backendURL, !backendURL.isEmpty {
            overrides.append("                backendUrl: '\(backendURL)',")
        }
        overrides.append("                storage: storage,")
        let overridesString = overrides.joined(separator: "\n")
        return """
        document.addEventListener('DOMContentLoaded', async () => {
            const storage = new KeychainStorage();
            
            const openfort = new Openfort({
                baseConfiguration: {
                    publishableKey: '\(openfortPublishableKey)',
                },
                shieldConfiguration: {
                    shieldPublishableKey: '\(shieldPublishableKey)',
                    shieldEncryptionKey: '\(shieldEncryptionKey)',
                },
                overrides: {
\(overridesString)
                },
            });
            
            window.openfort = openfort;
        });
        """
    }
}

public struct OFConfig: Codable {
    let backendUrl: String?
    let iframeUrl: String?
    let openfortPublishableKey: String
    let shieldEncryptionKey: String
    let shieldPublishableKey: String
    let shieldUrl: String?
    
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
        document.addEventListener('DOMContentLoaded', async () => {
            const storage = new KeychainStorage();
            
            const openfort = new Openfort({
                baseConfiguration: {
                    publishableKey: '\(openfortPublishableKey)',
                },
                shieldConfiguration: {
                    shieldPublishableKey: '\(shieldPublishableKey)',
                    shieldEncryptionKey: '\(shieldEncryptionKey)',
                },
                overrides: {
        \(overridesString)
                },
            });
            
            window.openfort = openfort;
        });
        """
    }
}
