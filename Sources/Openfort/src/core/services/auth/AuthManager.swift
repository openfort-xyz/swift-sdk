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
    ) async throws
}

final class AuthManager: AuthManagerProtocol {
    
    private let backendAPI = BackendAPIClient()
    
    func loginEmailPassword(email: String, password: String, ecosystemGame: String?) async throws {
        try await backendAPI.authentication(
            .login(
                username: email,
                password: password
            )
        )
    }
    
    init(publishableKey: String, openfortURL: String) {
        
    }
}
