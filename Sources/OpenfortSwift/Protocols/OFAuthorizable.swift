//
//  OFAuthorizable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//

public protocol OFAuthorizable: OFWebViewAccessable {

}

extension OFAuthorizable {
    public func loginWith(_ email: String, _ password: String) {
        let js = "window.logInWithEmailPasswordSync({email: '\(email)', password: '\(password)'})"
        self.webView?.evaluateJavaScript(js, completionHandler: { result, error in
            if let error = error {
                print("JavaScript error: \(error)")
            } else {
                // Result is always nil, because real data comes via messageHandler
            }
        })
    }
}
