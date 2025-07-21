//
//  OFSDK.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-03.
//

import WebKit

@MainActor
open class OFSDK: NSObject, OFOpenfortRootable, OFAuthorizable, OFProxible, OFEmbeddedWalletAccessable, OFUserAccessable {
    
    private var coordinator = OFWebViewCoordinator()
    private var messageHandler = OFScriptMessageHandler()
    private var observer: NSObjectProtocol?
    
    public var webView: WKWebView?
    
    @MainActor
    public override init () {
        super.init()
        self.webView = OFWebView(fileUrl: contentUrl, delegate: coordinator, scriptMessageHandler: messageHandler)
    }
    
    private var contentUrl: URL {
        Bundle.module.url(forResource: "index", withExtension: "html")!
    }
    
    public func evaluateAndDecode<T: Decodable>(
        js: String,
        method: String,
        errorDomain: String,
        completion: @escaping (Result<T, Error>) -> Void
    ) {
        let notificationName = Notification.Name("test")
        
        observer = NotificationCenter.default.addObserver(forName: notificationName, object: nil, queue: .main) { notification in
            
            guard let userInfo = notification.userInfo,
                  let response = userInfo["response"] else {
                completion(.failure(NSError(domain: errorDomain, code: -1, userInfo: [NSLocalizedDescriptionKey: "No response in notification"])))
                return
            }
            do {
                let data: Data
                if let str = response as? String {
                    data = Data(str.utf8)
                } else if let dict = response as? [String: Any] {
                    data = try JSONSerialization.data(withJSONObject: dict, options: [])
                } else {
                    completion(.failure(NSError(domain: errorDomain, code: -1, userInfo: [NSLocalizedDescriptionKey: "Unexpected result type"])))
                    return
                }
                let decoded = try JSONDecoder().decode(T.self, from: data)
                completion(.success(decoded))
            } catch {
                completion(.failure(error))
            }
        }
        webView?.evaluateJavaScript(js, completionHandler: nil)
    }
}
