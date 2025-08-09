//
//  OFSessionResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-09.
//

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
    var nextAction: OFNextActionResponse? { get }
    var transactionIntents: [OFTransactionIntentResponse]? { get }
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
    public let nextAction: OFNextActionResponse?
    public let transactionIntents: [OFTransactionIntentResponse]?
}
