//
//  OFAuthorizable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//

import Foundation

public protocol OFAuthorizable: OFWebViewAccessable {

}

extension OFAuthorizable {
    public func loginWith(_ email: String, _ password: String, completion: @escaping (Result<OFAuthorizationResponse, Error>) -> Void) {
        let js = "window.logInWithEmailPasswordSync({email: '\(email)', password: '\(password)'})"
        evaluateAndDecode(js: js, errorDomain: "OFLoginWithEmailPasswordErrorDomain", completion: completion)
    }
    
    public func signUpGuest(completion: @escaping (Result<OFSignUpResponse?, Error>) -> Void) {
        let js = "window.signUpGuestSync();"
        evaluateAndDecode(js: js, errorDomain: "OFSingUpGestErrorDomain", completion: completion)
    }
    
    public func signUpWith(email: String, password: String, ecosystemGame: String?, completion: @escaping (Result<OFSignUpResponse, Error>) -> Void) {
        var js = "window.signUpWithEmailPasswordSync({email: '\(email)', password: '\(password)'"
        if let game = ecosystemGame {
            js += ", ecosystemGame: '\(game)'"
        }
        js += "});"
        evaluateAndDecode(js: js, errorDomain: "OFSignUpWithEmailPasswordErrorDomain", completion: completion)
    }

    public func linkEmailPassword(email: String, password: String, authToken: String, ecosystemGame: String?, completion: @escaping (Result<OFLinkEmailPasswordResponse, Error>) -> Void) {
        var js = "window.linkEmailPasswordSync({email: '\(email)', password: '\(password)', authToken: '\(authToken)'"
        if let game = ecosystemGame {
            js += ", ecosystemGame: '\(game)'"
        }
        js += "});"
        evaluateAndDecode(js: js, errorDomain: "OFLinkEmailPasswordErrorDomain", completion: completion)
    }
    
    
    public func unlinkEmailPassword(email: String, authToken: String, completion: @escaping (Result<OFUnlinkEmailPasswordResponse, Error>) -> Void) {
        let js = "window.unlinkEmailPasswordSync({email: '\(email)', authToken: '\(authToken)'})"
        evaluateAndDecode(js: js, errorDomain: "OFUnlinkEmailPasswordErrorDomain", completion: completion)
    }
    
    private func evaluateAndDecode<T: Decodable>(
        js: String,
        errorDomain: String,
        completion: @escaping (Result<T, Error>) -> Void
    ) {
        webView?.evaluateJavaScript(js) { result, error in
            if let error = error {
                completion(.failure(error))
            } else if let result = result {
                do {
                    let data: Data
                    if let str = result as? String {
                        data = Data(str.utf8)
                    } else if let dict = result as? [String: Any] {
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
            } else {
                completion(.failure(NSError(domain: errorDomain, code: -1, userInfo: [NSLocalizedDescriptionKey: "No result received"])))
            }
        }
    }
}
