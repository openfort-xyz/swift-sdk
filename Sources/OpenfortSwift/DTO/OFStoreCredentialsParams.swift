//
//  OFStoreCredentialsParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFStoreCredentialsParams: Codable, Sendable {
    public let player: String?
    public let accessToken: String
    public let refreshToken: String

    public init(player: String? = nil, accessToken: String, refreshToken: String) {
        self.player = player
        self.accessToken = accessToken
        self.refreshToken = refreshToken
    }
}
