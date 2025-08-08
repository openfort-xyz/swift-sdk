//
//  OFListResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol EmbeddedAccountProtocol {
    var owner: OFOwner { get }
    var chainType: String { get }
    var address: String { get }
    var ownerAddress: String? { get }
    var createdAt: Int? { get }
    var implementationType: String? { get }
    var chainId: String? { get }
}


public struct EmbeddedAccount: EmbeddedAccountProtocol, OFCodableSendable {
    public let owner: OFOwner
    public let chainType: String
    public let address: String
    public let ownerAddress: String?
    public let createdAt: Int?
    public let implementationType: String?
    public let chainId: String?
}

public typealias OFListResponse = [EmbeddedAccount]
