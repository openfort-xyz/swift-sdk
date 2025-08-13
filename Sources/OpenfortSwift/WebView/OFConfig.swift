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
        if (window.webkit?.messageHandlers?.userHandler) {
            window.webkit.messageHandlers.userHandler.postMessage({
                method: 'openfortReady',
                success: true
            });
        }
        });
        """
    }
}
