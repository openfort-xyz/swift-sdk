//
//  OFListResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public struct OFPasskeyEnv: Codable, Sendable {
    public let name: String?
    public let os: String?
    public let osVersion: String?
    public let device: String?
}

public struct OFRecoveryMethodDetails: Codable, Sendable {
    public let passkeyId: String?
    public let passkeyEnv: OFPasskeyEnv?
}

public protocol OFEmbeddedAccountProtocol {
    var user: String { get }
    var id: String { get }
    var chainType: String { get }
    var address: String { get }
    var createdAt: Int? { get }
    var implementationType: String? { get }
    var factoryAddress: String? { get }
    var salt: String? { get }
    var accountType: String { get }
    var recoveryMethod: OFRecoveryMethod? { get }
    var recoveryMethodDetails: OFRecoveryMethodDetails? { get }
    var chainId: Int? { get }
    /** @deprecated */
    var ownerAddress: String? { get }
    /** @deprecated */
    var type: String? { get }
}

public struct OFEmbeddedAccount: OFEmbeddedAccountProtocol, OFCodableSendable {
    public let user: String
    public let id: String
    public let chainType: String
    public let address: String
    public let createdAt: Int?
    public let implementationType: String?
    public let factoryAddress: String?
    public let salt: String?
    public let accountType: String
    public let recoveryMethod: OFRecoveryMethod?
    public let recoveryMethodDetails: OFRecoveryMethodDetails?
    public let chainId: Int?
    /// @deprecated
    public let ownerAddress: String?
    /// @deprecated
    public let type: String?
}

public typealias OFListResponse = [OFEmbeddedAccount]
