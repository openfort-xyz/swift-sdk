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
    var jsonEncoder: JSONEncoder { get }
    var isInitialized: Bool { get set }
    /// Completion called when the SDK successfully loads
    var didLoad: (() -> Void)? { get set }
    /// Completion called when the SDK fails to load with an error
    var didFailedToLoad: ((Error) -> Void)? { get set }
}

public extension OFOpenfortRootable {
    
    func getAccessToken() async throws -> OFGetAccessTokenResponse? {
        let method = OFMethods.getAccessToken
        let js = "window.getAccessTokenSync();"
        return try await evaluateAndObserveAsync(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.getAccessToken
        )
    }
    
    func getAccessToken(completion: @escaping (Result<OFGetAccessTokenResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await getAccessToken()
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }
    
    func validateAndRefreshToken(forceRefresh: Bool? = nil) async throws {
        let method = OFMethods.validateAndRefreshToken
        let js: String
        if let forceRefresh = forceRefresh {
            js = "window.validateAndRefreshTokenSync({forceRefresh: \(forceRefresh)});"
        } else {
            js = "window.validateAndRefreshTokenSync();"
        }
        try await evaluateAndObserveAsync(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.validateAndRefreshToken
        ) as EmptyDecodable?
    }
    
    func validateAndRefreshToken(forceRefresh: Bool? = nil, completion: @escaping (Result<Void, Error>) -> Void) {
        Task {
            do {
                try await validateAndRefreshToken(forceRefresh: forceRefresh)
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }
}

extension OFOpenfortRootable {
    
    internal func evaluateAndObserve<T>(
        js: String,
        method: String,
        errorDomain: String,
        completion: @escaping (Result<T?, Error>) -> Void
    ) {
        let notificationName = Notification.Name(method)
        var observer: NSObjectProtocol?
        observer = NotificationCenter.default.addObserver(forName: notificationName, object: nil, queue: .main) { notification in
            if let obs = observer { NotificationCenter.default.removeObserver(obs) }

            if let userInfo = notification.userInfo,
               let isSuccess = userInfo["success"] as? Bool {
                if isSuccess {
                    // If object is present, return it. If nil, still call success (nil for Optional<T> or () for Void).
                    if let object = notification.object as? T {
                        completion(.success(object))
                    } else {
                        completion(.success(nil))
                    }
                } else {
                    // Failure with details from userInfo
                    let error = NSError(domain: errorDomain, code: -1, userInfo: nil)
                    completion(.failure(error))
                }
                return
            }

            // Fallback: no "success" in userInfo, legacy behavior
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
        }
    }
    
    internal func evaluateAndObserveAsync<T: Decodable>(
        js: String,
        method: String,
        errorDomain: String
    ) async throws -> T? {
        try await withCheckedThrowingContinuation { continuation in
            evaluateAndObserve(js: js, method: method, errorDomain: errorDomain) { (result: Result<T?, Error>) in
                Task {
                    continuation.resume(with: result)
                }
            }
        }
    }
    
    internal func encodeToJSONString<T: Encodable>(_ value: T) -> String? {
        guard let jsonData = try? jsonEncoder.encode(value) else { return nil }
        return String(data: jsonData, encoding: .utf8)
    }
}
