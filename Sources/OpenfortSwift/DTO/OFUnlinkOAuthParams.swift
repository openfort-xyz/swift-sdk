//
//  OFUnlinkOAuthParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFUnlinkOAuthParams: Codable {
    public let provider: String
    public let authToken: String

    public init(provider: String, authToken: String) {
        self.provider = provider
        self.authToken = authToken
    }
}
