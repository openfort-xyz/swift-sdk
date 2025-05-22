//
//  AuthManager.swift
//  Openfort
//
//  Created by Marc Flores on 22/5/25.
//

import Foundation

protocol AuthManagerProtocol {
    func loginEmailPassword(
        email: String,
        password: String,
        ecosystemGame: String?
    ) async throws -> AuthResponse
}

final class AuthManager: AuthManagerProtocol {
    func loginEmailPassword(email: String, password: String, ecosystemGame: String?) async throws -> AuthResponse {
        fatalError("Not implemented yet")
    }
    
    init(publishableKey: String, openfortURL: String) {
        
    }
}
