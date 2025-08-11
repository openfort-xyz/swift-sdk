//
//  OFSignTypedDataParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct EIP712TypeField: OFCodableSendable {
    let name: String
    let type: String

    public init(name: String, type: String) {
        self.name = name
        self.type = type
    }
}

public struct EIP712Domain: OFCodableSendable {
    let name: String
    let version: String
    let chainId: Int
    let verifyingContract: String
    
    public init(name: String, version: String, chainId: Int, verifyingContract: String) {
        self.name = name
        self.version = version
        self.chainId = chainId
        self.verifyingContract = verifyingContract
    }
}

public struct OFSignTypedDataParams: Codable, Sendable {
    let domain: EIP712Domain
    let types: [String: [EIP712TypeField]]
    let message: [String: AnyCodable]

    public init(domain: EIP712Domain, types: [String: [EIP712TypeField]], message: [String: AnyCodable]) {
        self.domain = domain
        self.types = types
        self.message = message
    }
}
