//
//  OFAuthEmailPasswordParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFAuthEmailPasswordParams: Codable, Sendable {
    public let email: String
    public let password: String
    public let ecosystemGame: String?

    public init(email: String, password: String, ecosystemGame: String? = nil) {
        self.email = email
        self.password = password
        self.ecosystemGame = ecosystemGame
    }
}
