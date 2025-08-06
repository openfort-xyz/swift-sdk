//
//  OFGetUserInstanceResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetUserInstanceResponseProtocol {
    var id: String? { get }
    var createdAt: String? { get }
    var player: String? { get }
    var linkedAccounts: [OFLinkedAccountResponse]? { get }
}

public struct OFGetUserInstanceResponse: Codable, OFGetUserInstanceResponseProtocol {
    public let id: String?
    public let createdAt: String?
    public let player: String?
    public let linkedAccounts: [OFLinkedAccountResponse]?
}
