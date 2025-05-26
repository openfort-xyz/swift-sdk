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
    
    private let config: OpenfortSDKConfiguration
    
    private lazy var networkWrapper = NetworkWrapper(
        config: config
    )
    
    init(config: OpenfortSDKConfiguration) {
        self.config = config
    }
    
    func authentication(_ request: AuthenticationAPI) async throws {
        try await networkWrapper.request(request)
    }
}
