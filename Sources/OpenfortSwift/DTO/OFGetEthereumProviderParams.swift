//
//  OFGetEthereumProviderParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFGetEthereumProviderParams: Codable {
    public let options: [String: AnyCodable]?

    public init(options: [String: AnyCodable]? = nil) {
        self.options = options
    }
}
