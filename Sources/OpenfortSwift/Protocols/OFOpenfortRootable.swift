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
    
    /// Retrieves the current access token from the JavaScript SDK.
    ///
    /// - Returns: The current access token response, or `nil` if not available.
    func getAccessToken() async throws -> OFGetAccessTokenResponse? {
        let method = OFMethods.getAccessToken
        let js = "window.getAccessTokenSync();"
        return try await evaluateAndObserveAsync(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.getAccessToken
        )
    }
    
    /// Retrieves the current access token from the JavaScript SDK.
    ///
    /// - Parameter completion: Completion handler with a result containing the access token response or an error.
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
    
    /// Validates and optionally refreshes the access token.
    ///
    /// - Parameter forceRefresh: If `true`, forces a refresh of the token; if `false` or `nil`, validates and refreshes as needed.
    func validateAndRefreshToken(forceRefresh: Bool? = nil) async throws {
        let method = OFMethods.validateAndRefreshToken
        let js: String
        if let forceRefresh = forceRefresh {
            js = "window.validateAndRefreshTokenSync({forceRefresh: \(forceRefresh)});"
        } else {
            js = "window.validateAndRefreshTokenSync();"
        }
        try await evaluateAndObserveVoidAsync(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.validateAndRefreshToken
        )
    }
    
    /// Validates and optionally refreshes the access token.
    ///
    /// - Parameters:
    ///   - forceRefresh: If `true`, forces a refresh of the token; if `false` or `nil`, validates and refreshes as needed.
    ///   - completion: Completion handler with a result indicating success or error.
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
    
    /// Executes a JavaScript command in the WebView and observes a notification for the specified method, completing with success or error.
    ///
    /// This method does not expect a typed object in the notification; it only listens for success/failure.
    ///
    /// - Parameters:
    ///   - js: The JavaScript string to evaluate.
    ///   - method: The notification method name to observe.
    ///   - errorDomain: The error domain to use for errors.
    ///   - completion: Completion handler with a result indicating success or error.
    internal func evaluateAndObserveVoid(
        js: String,
        method: String,
        errorDomain: String,
        completion: @escaping (Result<Void, Error>) -> Void
    ) {
        let notificationName = Notification.Name(method)
        var observer: NSObjectProtocol?
        observer = NotificationCenter.default.addObserver(forName: notificationName, object: nil, queue: .main) { notification in
            if let obs = observer { NotificationCenter.default.removeObserver(obs) }

            if let userInfo = notification.userInfo,
               let isSuccess = userInfo["success"] as? Bool {
                if isSuccess {
                    completion(.success(()))
                } else {
                    let error = NSError(domain: errorDomain, code: -1, userInfo: nil)
                    completion(.failure(error))
                }
                return
            }

            // Fallback: if no `success` flag, treat presence of any object as success
            if notification.object != nil {
                completion(.success(()))
            } else {
                completion(.failure(NSError(domain: errorDomain, code: -1, userInfo: [NSLocalizedDescriptionKey: "No response in notification"])) )
            }
        }
        webView?.evaluateJavaScript(js) { _, error in
            if let error = error {
                if let obs = observer { NotificationCenter.default.removeObserver(obs) }
                completion(.failure(error))
            }
        }
    }

    /// Executes a JavaScript command in the WebView and observes a notification for the specified method,
    /// decoding and returning an expected object of type `T`.
    ///
    /// Listens for the notification and attempts to cast or decode the object to type `T`, handling success or error.
    ///
    /// - Parameters:
    ///   - js: The JavaScript string to evaluate.
    ///   - method: The notification method name to observe.
    ///   - errorDomain: The error domain to use for errors.
    ///   - completion: Completion handler with a result containing the decoded object or an error.
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
                    if let object = notification.object as? T {
                        completion(.success(object))
                    } else {
                        completion(.success(nil))
                    }
                } else {
                    let error = NSError(domain: errorDomain, code: -1, userInfo: nil)
                    completion(.failure(error))
                }
                return
            }

            guard let object = notification.object as? T else {
                completion(.failure(NSError(domain: errorDomain, code: -1, userInfo: [NSLocalizedDescriptionKey: "No response in notification"])) )
                return
            }
            completion(.success(object))
        }
        webView?.evaluateJavaScript(js) { _, error in
            if let error = error {
                if let obs = observer { NotificationCenter.default.removeObserver(obs) }
                completion(.failure(error))
            }
        }
    }

    /// Async/await wrapper for `evaluateAndObserveVoid`.
    ///
    /// Executes a JavaScript command and waits for a notification indicating success or failure, without expecting a typed object.
    ///
    /// - Parameters:
    ///   - js: The JavaScript string to evaluate.
    ///   - method: The notification method name to observe.
    ///   - errorDomain: The error domain to use for errors.
    /// - Throws: An error if the operation fails.
    internal func evaluateAndObserveVoidAsync(
        js: String,
        method: String,
        errorDomain: String
    ) async throws {
        try await withCheckedThrowingContinuation { continuation in
            evaluateAndObserveVoid(js: js, method: method, errorDomain: errorDomain) { (result: Result<Void, Error>) in
                continuation.resume(with: result)
            }
        }
    }
    
    /// Async/await wrapper for `evaluateAndObserve`, decoding a JSON object from the notification into a `Decodable` type.
    ///
    /// Executes a JavaScript command and waits for a notification containing a JSON object, decoding it into type `T`.
    ///
    /// - Parameters:
    ///   - js: The JavaScript string to evaluate.
    ///   - method: The notification method name to observe.
    ///   - errorDomain: The error domain to use for errors.
    /// - Returns: A decoded object of type `T`, or `nil` if decoding fails.
    /// - Throws: An error if the operation fails.
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
    
    /// Encodes an encodable value into a JSON string.
    ///
    /// - Parameter value: The encodable value to encode.
    /// - Returns: A JSON string if encoding is successful, or `nil` if encoding fails.
    internal func encodeToJSONString<T: Encodable>(_ value: T) -> String? {
        guard let jsonData = try? jsonEncoder.encode(value) else { return nil }
        return String(data: jsonData, encoding: .utf8)
    }
}
