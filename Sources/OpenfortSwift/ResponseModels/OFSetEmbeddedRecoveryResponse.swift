//
//  OFSetEmbeddedRecoveryResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFSetEmbeddedRecoveryResponseProtocol {
    var recovered: Bool? { get }
}

public struct OFSetEmbeddedRecoveryResponse: Decodable, OFSetEmbeddedRecoveryResponseProtocol {
    public let recovered: Bool?
}
