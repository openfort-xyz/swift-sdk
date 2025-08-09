//
//  OFGetResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public struct OFEmbeddedOwner: OFCodableSendable {
    public let id: String
}

public enum OFEmbeddedChainType: String, OFCodableSendable {
    case solana
    case ethereum
}

public struct OFGetResponse: OFCodableSendable {
    public let owner: OFEmbeddedOwner
    public let chainType: OFEmbeddedChainType
    public let address: String
    public let ownerAddress: String?
    public let createdAt: Int?
    public let implementationType: String?
    public let chainId: String?
}
