//
//  OFUnlinkWalletResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFUnlinkWalletResponseProtocol {
    var walletAddress: String? { get }
    var unlinked: Bool? { get }
}

public struct OFUnlinkWalletResponse: Decodable, OFUnlinkWalletResponseProtocol {
    public let walletAddress: String?
    public let unlinked: Bool?
}
