//
//  OFSignUpable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-01.
//

public protocol OFSignUpable: OFWebViewAccessable {

}

public extension OFSignUpable {
    func signUpGuest(completion: @escaping (Result<Any?, Error>) -> Void) {
        let js = "window.signUpGuestSync();"
        webView?.evaluateJavaScript(js) { result, error in
            if let error = error {
                completion(.failure(error))
            } else {
                completion(.success(result))
            }
        }
    }
}
