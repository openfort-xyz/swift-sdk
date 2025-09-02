//
//  OFInitSIWEParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFInitSIWEParams: OFCodableSendable {
    public let address: String
    public let ecosystemGame: String?

    public init(address: String, ecosystemGame: String? = nil) {
        self.address = address
        self.ecosystemGame = ecosystemGame
    }
}
