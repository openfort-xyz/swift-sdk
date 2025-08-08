//
//  OFSetEmbeddedRecoveryResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFSetEmbeddedRecoveryResponseProtocol {
    var recovered: Bool? { get }
}

public struct OFSetEmbeddedRecoveryResponse: OFSetEmbeddedRecoveryResponseProtocol, OFCodableSendable {
    public let recovered: Bool?
}
