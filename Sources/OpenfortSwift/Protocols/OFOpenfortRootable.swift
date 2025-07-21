//
//  OFInitializable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//
@preconcurrency import WebKit

@MainActor
public protocol OFOpenfortRootable {
    var webView: WKWebView? { get }
}

extension OFOpenfortRootable {
    
    public func getAccessToken(completion: @escaping (Result<OFGetAccessTokenResponse, Error>) -> Void) {
        let method = OFMethods.getAccessToken
        let js = "window.getAccessTokenSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.getAccessToken, completion: completion)
    }
    
    public func validateAndRefreshToken(forceRefresh: Bool? = nil, completion: @escaping (Result<OFValidateAndRefreshTokenResponse, Error>) -> Void) {
        let method = OFMethods.validateAndRefreshToken
        let js: String
        if let forceRefresh = forceRefresh {
            js = "window.validateAndRefreshTokenSync({forceRefresh: \(forceRefresh)});"
        } else {
            js = "window.validateAndRefreshTokenSync();"
        }
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.validateAndRefreshToken, completion: completion)
    }
}

extension OFOpenfortRootable {
    
    internal func evaluateAndDecode<T: Decodable>(
        js: String,
        method: String,
        errorDomain: String,
        completion: @escaping (Result<T, Error>) -> Void
    ) {
        let notificationName = Notification.Name(method)
        var observer: NSObjectProtocol?
        observer = NotificationCenter.default.addObserver(forName: notificationName, object: nil, queue: .main) { notification in
            if let observer = observer { NotificationCenter.default.removeObserver(observer) }
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
