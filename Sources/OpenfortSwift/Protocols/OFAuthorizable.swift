//
//  OFAuthorizable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//

@preconcurrency import Foundation

public protocol OFAuthorizable: OFWebViewAccessable {

}

// MARK: - Openfort AuthApi Methods
extension OFAuthorizable {
    public func logOut(completion: @escaping (Result<OFLogOutResponse, Error>) -> Void) {
        let method = "logOut"
        let js = "window.logOutSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.logOut, completion: completion)
    }

    public func getSession(completion: @escaping (Result<OFSessionResponse, Error>) -> Void) {
        let method = "getSession"
        let js = "window.getSessionSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.getSession, completion: completion)
    }

    public func sendPasswordResetEmail(email: String, completion: @escaping (Result<OFSendPasswordResetEmailResponse, Error>) -> Void) {
        let method = "sendPasswordResetEmail"
        let js = "window.sendPasswordResetEmailSync({email: '\(email)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.sendPasswordResetEmail, completion: completion)
    }

    public func updatePassword(newPassword: String, completion: @escaping (Result<OFUpdatePasswordResponse, Error>) -> Void) {
        let method = "updatePassword"
        let js = "window.updatePasswordSync({password: '\(newPassword)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.updatePassword, completion: completion)
    }

    public func getUser(completion: @escaping (Result<OFUserResponse, Error>) -> Void) {
        let method = "getUser"
        let js = "window.getUserSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.getUser, completion: completion)
    }

    public func sendVerificationEmail(completion: @escaping (Result<OFSendVerificationEmailResponse, Error>) -> Void) {
        let method = "sendVerificationEmail"
        let js = "window.sendVerificationEmailSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.sendVerificationEmail, completion: completion)
    }

    public func isUserVerified(completion: @escaping (Result<OFIsUserVerifiedResponse, Error>) -> Void) {
        let method = "isUserVerified"
        let js = "window.isUserVerifiedSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.isUserVerified, completion: completion)
    }

    public func reauthenticateWithPassword(password: String, completion: @escaping (Result<OFReauthenticateWithPasswordResponse, Error>) -> Void) {
        let method = "reauthenticateWithPassword"
        let js = "window.reauthenticateWithPasswordSync({password: '\(password)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.reauthenticateWithPassword, completion: completion)
    }

    public func deleteUser(completion: @escaping (Result<OFDeleteUserResponse, Error>) -> Void) {
        let method = "deleteUser"
        let js = "window.deleteUserSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.deleteUser, completion: completion)
    }
}

extension OFAuthorizable {
    public func loginWith(_ email: String, _ password: String, completion: @escaping (Result<OFAuthorizationResponse, Error>) -> Void) {
        let method = "logInWithEmailPassword"
        let js = "window.logInWithEmailPasswordSync({email: '\(email)', password: '\(password)'})"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.loginWithEmailPassword, completion: completion)
    }
    
    public func signUpGuest(completion: @escaping (Result<OFSignUpResponse?, Error>) -> Void) {
        let method = "signUpGuest"
        let js = "window.signUpGuestSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.signUpGuest, completion: completion)
    }
    
    public func signUpWith(email: String, password: String, ecosystemGame: String?, completion: @escaping (Result<OFSignUpResponse, Error>) -> Void) {
        let method = "signUpWithEmailPassword"
        var js = "window.signUpWithEmailPasswordSync({email: '\(email)', password: '\(password)'"
        if let game = ecosystemGame {
            js += ", ecosystemGame: '\(game)'"
        }
        js += "});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.signUpWithEmailPassword, completion: completion)
    }

    public func linkEmailPassword(email: String, password: String, authToken: String, ecosystemGame: String?, completion: @escaping (Result<OFLinkEmailPasswordResponse, Error>) -> Void) {
        let method = "linkEmailPassword"
        var js = "window.linkEmailPasswordSync({email: '\(email)', password: '\(password)', authToken: '\(authToken)'"
        if let game = ecosystemGame {
            js += ", ecosystemGame: '\(game)'"
        }
        js += "});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.linkEmailPassword, completion: completion)
    }
    
    public func unlinkEmailPassword(email: String, authToken: String, completion: @escaping (Result<OFUnlinkEmailPasswordResponse, Error>) -> Void) {
        let method = "unlinkEmailPassword"
        let js = "window.unlinkEmailPasswordSync({email: '\(email)', authToken: '\(authToken)'})"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.unlinkEmailPassword, completion: completion)
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
