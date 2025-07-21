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
    var metadata: [String: String]? { get }
}

public struct OFGetUserInstanceResponse: Decodable, OFGetUserInstanceResponseProtocol {
    public let id: String?
    public let createdAt: String?
    public let player: String?
    public let metadata: [String: String]?
}
