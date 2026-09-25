//
//  OFUnlinkWalletParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFUnlinkWalletParams: OFCodableSendable {
    public let address: String
    public let chainId: Int

    public init(address: String, chainId: Int) {
        self.address = address
        self.chainId = chainId
    }
}
