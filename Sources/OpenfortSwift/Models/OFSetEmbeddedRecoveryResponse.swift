//
//  OFSetEmbeddedRecoveryResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFSetEmbeddedRecoveryResponseProtocol {
    var recovered: Bool? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFSetEmbeddedRecoveryResponse: Decodable, OFSetEmbeddedRecoveryResponseProtocol {
    public let recovered: Bool?
    public let error: String?
    public let success: Bool?
}
