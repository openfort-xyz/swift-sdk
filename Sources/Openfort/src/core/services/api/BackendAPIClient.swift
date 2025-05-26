//
//  BackendAPIClient.swift
//  Openfort
//
//  Created by Marc Flores on 23/5/25.
//

protocol BackendAPIClientProtocol {
    func loginWith(email: String, password: String) async throws -> LoginResponse
    func getUser() async throws -> AuthPlayerResponse
}

final class BackendAPIClient: BackendAPIClientProtocol {
    
    private let config: OpenfortSDKConfiguration
    private let secured: SecuredServiceProtocol

    private lazy var networkWrapper = NetworkWrapper(
        config: config,
        secured: secured
    )
    
    init(config: OpenfortSDKConfiguration, secured: SecuredServiceProtocol) {
        self.config = config
        self.secured = secured
    }
    
    func loginWith(email: String, password: String) async throws -> LoginResponse {
        try await networkWrapper.request(
            AuthenticationAPI.login(
                email: email,
                password: password
            )
        )
    }
    
    func getUser() async throws -> AuthPlayerResponse {
        try await networkWrapper.request(AuthenticationAPI.getUser)
    }
}
