//
//  OFSignTypedDataParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFSignTypedDataParams: Codable {
    public let domain: [String: AnyCodable]
    public let types: [String: AnyCodable]
    public let message: [String: AnyCodable]

    public init(domain: [String: AnyCodable], types: [String: AnyCodable], message: [String: AnyCodable]) {
        self.domain = domain
        self.types = types
        self.message = message
    }
}
