//
//  OFResetPasswordParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFResetPasswordParams: Codable, Sendable {
    public let email: String
    public let password: String
    public let state: String

    public init(email: String, password: String, state: String) {
        self.email = email
        self.password = password
        self.state = state
    }
}
