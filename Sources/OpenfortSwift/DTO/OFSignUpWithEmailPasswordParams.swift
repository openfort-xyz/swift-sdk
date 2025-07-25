//
//  OFSignUpWithEmailPasswordParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFSignUpWithEmailPasswordParams: Codable {
    public let email: String
    public let password: String
    public let name: String?
    public let ecosystemGame: String?

    public init(email: String, password: String, name: String? = nil, ecosystemGame: String? = nil) {
        self.email = email
        self.password = password
        self.name = name
        self.ecosystemGame = ecosystemGame
    }
}
