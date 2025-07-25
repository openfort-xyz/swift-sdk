//
//  OFAuthenticateWithThirdPartyProviderParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFAuthenticateWithThirdPartyProviderParams: Codable {
    public let provider: String
    public let token: String
    public let tokenType: String
    public let ecosystemGame: String?

    public init(provider: String, token: String, tokenType: String, ecosystemGame: String? = nil) {
        self.provider = provider
        self.token = token
        self.tokenType = tokenType
        self.ecosystemGame = ecosystemGame
    }
}
