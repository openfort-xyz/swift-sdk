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
        self.webView?.evaluateJavaScript(js, completionHandler: { result, error in
            if let error = error {
                completion(.failure(error))
            } else if let resultString = result as? String {
                let data = Data(resultString.utf8)
                do {
                    let response = try JSONDecoder().decode(OFAuthorizationResponse.self, from: data)
                    completion(.success(response))
                } catch {
                    completion(.failure(error))
                }
            } else {
                let decodingError = NSError(domain: "OFAuthorizableErrorDomain", code: -1, userInfo: [NSLocalizedDescriptionKey: "Invalid result type or unable to decode response"])
                completion(.failure(decodingError))
            }
        })
    }
}
