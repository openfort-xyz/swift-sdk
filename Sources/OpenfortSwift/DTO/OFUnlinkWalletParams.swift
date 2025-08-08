//
//  OFUnlinkWalletParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFUnlinkWalletParams: Codable, Sendable {
    public let address: String
    public let authToken: String

    public init(address: String, authToken: String) {
        self.address = address
        self.authToken = authToken
    }
}
