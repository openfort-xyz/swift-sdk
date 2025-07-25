//
//  OFLinkEmailPasswordParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFLinkEmailPasswordParams: Codable {
    public let email: String
    public let password: String
    public let authToken: String
    public let ecosystemGame: String?

    public init(email: String, password: String, authToken: String, ecosystemGame: String? = nil) {
        self.email = email
        self.password = password
        self.authToken = authToken
        self.ecosystemGame = ecosystemGame
    }
}
