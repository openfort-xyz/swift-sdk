//
//  OFSignMessageParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFSignMessageParams: Codable, Sendable {
    public struct Options: Codable {
        public let hashMessage: Bool?
        public let arrayifyMessage: Bool?

        public init(hashMessage: Bool? = nil, arrayifyMessage: Bool? = nil) {
            self.hashMessage = hashMessage
            self.arrayifyMessage = arrayifyMessage
        }
    }

    public let message: String
    public let options: Options?

    public init(message: String, options: Options? = nil) {
        self.message = message
        self.options = options
    }
}
