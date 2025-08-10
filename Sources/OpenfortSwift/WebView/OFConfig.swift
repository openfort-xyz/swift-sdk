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
    
    static let openfortSyncScript = """
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
    \( ( { if let iframeURL = iframeURL, !iframeURL.isEmpty { return "                iframeUrl: '\(iframeURL)'," } else { return "" } } )() )
    \( ( { if let shieldURL = shieldURL, !shieldURL.isEmpty { return "                shieldUrl: '\(shieldURL)'," } else { return "" } } )() )
    \( ( { if let backendURL = backendURL, !backendURL.isEmpty { return "                backendUrl: '\(backendURL)'," } else { return "" } } )() )
                storage: storage,
            },
        });
        
        window.openfort = openfort;
    });
    """
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
}
