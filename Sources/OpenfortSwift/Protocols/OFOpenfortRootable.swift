//
//  OFInitializable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//
@preconcurrency import WebKit

@MainActor
public protocol OFOpenfortRootable {
    func initialize()
    var webView: WKWebView? { get }
    var isInitialized: Bool { get set }
    /// Completion called when the SDK successfully loads
    var didLoad: (() -> Void)? { get set }
    /// Completion called when the SDK fails to load with an error
    var didFailedToLoad: ((Error) -> Void)? { get set }
}

extension OFOpenfortRootable {
    
    public func getAccessToken(completion: @escaping (Result<OFGetAccessTokenResponse, Error>) -> Void) {
        let method = OFMethods.getAccessToken
        let js = "window.getAccessTokenSync();"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.getAccessToken, completion: completion)
    }
    
    public func validateAndRefreshToken(forceRefresh: Bool? = nil, completion: @escaping (Result<OFValidateAndRefreshTokenResponse, Error>) -> Void) {
        let method = OFMethods.validateAndRefreshToken
        let js: String
        if let forceRefresh = forceRefresh {
            js = "window.validateAndRefreshTokenSync({forceRefresh: \(forceRefresh)});"
        } else {
            js = "window.validateAndRefreshTokenSync();"
        }
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.validateAndRefreshToken, completion: completion)
    }
}

extension OFOpenfortRootable {
    
    internal func evaluateAndObserve<T>(
        js: String,
        method: String,
        errorDomain: String,
        completion: @escaping (Result<T, Error>) -> Void
    ) {
        let notificationName = Notification.Name(method)
        var observer: NSObjectProtocol?
        observer = NotificationCenter.default.addObserver(forName: notificationName, object: nil, queue: .main) { notification in
            if let obs = observer { NotificationCenter.default.removeObserver(obs)
            }
            guard let object = notification.object as? T else {
                completion(.failure(NSError(domain: errorDomain, code: -1, userInfo: [NSLocalizedDescriptionKey: "No response in notification"])))
                return
            }
            completion(.success(object))
           
        }
        webView?.evaluateJavaScript(js) { result, error in
            if let error = error {
                if let obs = observer { NotificationCenter.default.removeObserver(obs) }
                completion(.failure(error))
                return
            }
            if result == nil {
                if let obs = observer { NotificationCenter.default.removeObserver(obs) }
                completion(.failure(NSError(domain: errorDomain, code: -2, userInfo: [NSLocalizedDescriptionKey: "JavaScript evaluation returned nil"])))
                return
            }
        }
    }
}
