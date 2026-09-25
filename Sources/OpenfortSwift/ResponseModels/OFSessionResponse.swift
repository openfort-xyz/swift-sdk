//
//  OFSessionResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-09.
//

public struct OFSessionNextActionPayload: OFCodableSendable {
    public let signableHash: String?
}

/// The signature a session key registration is waiting for. `type` is `"sign_with_wallet"`.
public struct OFSessionNextAction: OFCodableSendable {
    public let type: String
    public let payload: OFSessionNextActionPayload
}

public protocol OFSessionResponseProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var updatedAt: Int { get }
    var isActive: Bool? { get }
    var address: String { get }
    var validAfter: String? { get }
    var validUntil: String? { get }
    var whitelist: [String]? { get }
    var limit: Int? { get }
    var nextAction: OFSessionNextAction? { get }
}

public struct OFSessionResponse: OFSessionResponseProtocol, OFCodableSendable {
    public let id: String
    public let object: String
    public let createdAt: Int
    public let updatedAt: Int
    public let isActive: Bool?
    public let address: String
    public let validAfter: String?
    public let validUntil: String?
    public let whitelist: [String]?
    public let limit: Int?
    public let nextAction: OFSessionNextAction?
}
