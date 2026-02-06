//
//  OFUnlinkWalletResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

/// Response from `unlinkWallet` in the JS SDK.
public struct OFUnlinkWalletResponse: OFCodableSendable {
    public let success: Bool?
}
