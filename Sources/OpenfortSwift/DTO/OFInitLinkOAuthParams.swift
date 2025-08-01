//
//  OFInitLinkOAuthParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFInitLinkOAuthParams: Codable {
    public let provider: String
    public let options: [String: AnyCodable]?
    public let ecosystemGame: String?

    public init(provider: String, options: [String: AnyCodable]? = nil, ecosystemGame: String? = nil) {
        self.provider = provider
        self.options = options
        self.ecosystemGame = ecosystemGame
    }
}
