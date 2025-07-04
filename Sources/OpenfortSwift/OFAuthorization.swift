//
//  Authorization.swift
//  Openfort
//
//  Created by Pavel Gurkovskii on 2025-06-17.
//

import JavaScriptCore

public func loginWith(_ email: String, _ password: String) {
    let js = "window.openfort.logInWithEmailPasswordSync({email: '\(email)', password: '\(password)'})"
}
