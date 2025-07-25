//
//  OFLoginWithIdTokenParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFLoginWithIdTokenParams: Codable {
    public let provider: String
    public let token: String
    public let ecosystemGame: String?

    public init(provider: String, token: String, ecosystemGame: String? = nil) {
        self.provider = provider
        self.token = token
        self.ecosystemGame = ecosystemGame
    }
}
