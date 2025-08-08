//
//  OFGetUserInstanceResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetUserInstanceResponseProtocol {
    var id: String? { get }
    var createdAt: Int? { get }
    var player: String? { get }
    var linkedAccounts: [OFLinkedAccountResponse]? { get }
}

public struct OFGetUserInstanceResponse: OFGetUserInstanceResponseProtocol, OFCodableSendable {
    public var id: String?
    public let createdAt: Int?
    public let player: String?
    public let linkedAccounts: [OFLinkedAccountResponse]?
}
