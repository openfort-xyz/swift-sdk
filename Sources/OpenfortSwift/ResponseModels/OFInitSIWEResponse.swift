//
//  OFInitSIWEResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFInitSIWEResponseProtocol {
    var address: String { get }
    var nonce: String { get }
    var expiresAt: Int { get }
}

public struct OFInitSIWEResponse: Decodable, OFInitSIWEResponseProtocol {
    public let address: String
    public let nonce: String
    public let expiresAt: Int
}
