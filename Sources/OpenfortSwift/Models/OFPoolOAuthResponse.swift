//
//  OFPoolOAuthResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFPoolOAuthResponseProtocol {
    var poolId: String? { get }
    var expiresAt: String? { get }
}

public struct OFPoolOAuthResponse: Decodable, OFPoolOAuthResponseProtocol {
    public let poolId: String?
    public let expiresAt: String?
}
