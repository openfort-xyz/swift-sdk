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
    
    private let config: OpenfortSDKConfiguration
    private let secured = SecuredService()
    private lazy var backendAPI = BackendAPIClient(
        config: config,
        secured: secured
    )
    
    func loginEmailPassword(email: String, password: String, ecosystemGame: String?) async throws {
        let result = try await backendAPI.loginWith(
            email: email,
            password: password
        )
        secured.setAuth(data: result)
        let user = try await backendAPI.getUser()
    }
    
    init(config: OpenfortSDKConfiguration) {
        self.config = config
    }
}
