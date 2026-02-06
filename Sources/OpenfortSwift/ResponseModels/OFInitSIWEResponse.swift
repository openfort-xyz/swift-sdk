//
//  OFInitSIWEResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFSIWEInitResponseProtocol {
    var address: String { get }
    var nonce: String { get }
}

/// Maps to the JS `SIWEInitResponse` type.
public struct OFSIWEInitResponse: OFSIWEInitResponseProtocol, OFCodableSendable {
    public let address: String
    public let nonce: String
}
