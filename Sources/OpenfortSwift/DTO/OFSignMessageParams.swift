//
//  OFSignMessageParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFSignMessageParams: Codable {
    public let message: String
    public let options: [String: AnyCodable]?

    public init(message: String, options: [String: AnyCodable]? = nil) {
        self.message = message
        self.options = options
    }
}
