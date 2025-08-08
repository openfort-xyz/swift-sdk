//
//  OFInitLinkOAuthParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFInitLinkOAuthParams: Codable, Sendable {
    public let provider: String
    public let authToken: String
    public let options: [String: AnyCodable]?

    public init(provider: String, authToken: String, options: [String: AnyCodable]? = nil) {
        self.provider = provider
        self.authToken = authToken
        self.options = options
    }
}
