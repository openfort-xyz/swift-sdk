//
//  Authorization.swift
//  Openfort
//
//  Created by Pavel Gurkovskii on 2025-06-17.
//

import JavaScriptCore

public func loginWith(_ email: String, _ password: String) {
    let context = JSContext()!
    let scriptURL = Bundle.main.url(forResource: "index", withExtension: "js")!
    let script = try! String(contentsOf: scriptURL)
    context.evaluateScript(script)
    
    if let output = context.evaluateScript("loginWithEmailAndPassword(\(email), \(password)") {
        print(output.toString() ?? "")
    }
}
