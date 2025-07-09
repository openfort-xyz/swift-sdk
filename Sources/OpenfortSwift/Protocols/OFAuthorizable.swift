//
//  OFAuthorizable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//

@preconcurrency import Foundation

public protocol OFAuthorizable: OFWebViewAccessable {

}

extension OFAuthorizable {
    public func loginWith(_ email: String, _ password: String, completion: @escaping (Result<OFAuthorizationResponse, Error>) -> Void) {
        let method = "logInWithEmailPassword"
        let js = "window.logInWithEmailPasswordSync({email: '\(email)', password: '\(password)'})"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFLoginWithEmailPasswordErrorDomain", completion: completion)
    }
    
    public func signUpGuest(completion: @escaping (Result<OFSignUpResponse?, Error>) -> Void) {
        let method = "signUpGuest"
        let js = "window.signUpGuestSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFSingUpGestErrorDomain", completion: completion)
    }
    
    public func signUpWith(email: String, password: String, ecosystemGame: String?, completion: @escaping (Result<OFSignUpResponse, Error>) -> Void) {
        let method = "signUpWithEmailPassword"
        var js = "window.signUpWithEmailPasswordSync({email: '\(email)', password: '\(password)'"
        if let game = ecosystemGame {
            js += ", ecosystemGame: '\(game)'"
        }
        js += "});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFSignUpWithEmailPasswordErrorDomain", completion: completion)
    }

    public func linkEmailPassword(email: String, password: String, authToken: String, ecosystemGame: String?, completion: @escaping (Result<OFLinkEmailPasswordResponse, Error>) -> Void) {
        let method = "linkEmailPassword"
        var js = "window.linkEmailPasswordSync({email: '\(email)', password: '\(password)', authToken: '\(authToken)'"
        if let game = ecosystemGame {
            js += ", ecosystemGame: '\(game)'"
        }
        js += "});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFLinkEmailPasswordErrorDomain", completion: completion)
    }
    
    public func unlinkEmailPassword(email: String, authToken: String, completion: @escaping (Result<OFUnlinkEmailPasswordResponse, Error>) -> Void) {
        let method = "unlinkEmailPassword"
        let js = "window.unlinkEmailPasswordSync({email: '\(email)', authToken: '\(authToken)'})"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFUnlinkEmailPasswordErrorDomain", completion: completion)
    }
    
    private func evaluateAndDecode<T: Decodable>(
        js: String,
        method: String,
        errorDomain: String,
        completion: @escaping (Result<T, Error>) -> Void
    ) {
        let notificationName = Notification.Name("OFJSResponse_\(method)")
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
