//
//  OFListResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol EmbeddedAccountProtocol {
    var user: String { get }
    var id: String { get }
    var chainType: String { get }
    var address: String { get }
    var createdAt: Int? { get }
    var implementationType: String? { get }
    var factoryAddress: String? { get }
    var salt: String? { get }
    var accountType: String { get }
    var chainId: Int? { get }
    var ownerAddress: String? { get } // Deprecated
    var type: String? { get } // Deprecated
    var owner: OFOwner { get }
}


public struct EmbeddedAccount: EmbeddedAccountProtocol, OFCodableSendable {
    public let user: String
    public let id: String
    public let chainType: String
    public let address: String
    public let createdAt: Int?
    public let implementationType: String?
    public let factoryAddress: String?
    public let salt: String?
    public let accountType: String
    public let chainId: Int?
    public let ownerAddress: String? // Deprecated
    public let type: String? // Deprecated
    public let owner: OFOwner
}

public typealias OFListResponse = [EmbeddedAccount]
