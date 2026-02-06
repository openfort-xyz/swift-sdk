//
//  OFLinkWalletResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

/// Response from `linkWallet` and `linkWithSiwe` in the JS SDK.
/// Maps to the JS `LinkSiweVerifyPost200Response` type.
public struct OFLinkWalletResponse: OFCodableSendable {
    public let success: Bool?
    public let walletAddress: String?
    public let chainId: Int?
    public let isPrimary: Bool?
    public let connectorType: String?
    public let walletClientType: String?
    public let ensName: String?
    public let ensAvatar: String?
    public let message: String?
}
