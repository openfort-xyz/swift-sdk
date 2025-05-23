//
//  BackendAPIClient.swift
//  Openfort
//
//  Created by Marc Flores on 23/5/25.
//

protocol BackendAPIClientProtocol {
    func authentication(_ request: AuthenticationAPI) async throws
}

final class BackendAPIClient: BackendAPIClientProtocol {
    
    private let networkWrapper = NetworkWrapper()
    
    func authentication(_ request: AuthenticationAPI) async throws {
        try await networkWrapper.request(request)
    }
}
