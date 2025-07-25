//
//  OFResetPasswordParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFResetPasswordParams: Codable {
    public let email: String
    public let password: String
    public let state: String

    public init(email: String, password: String, state: String) {
        self.email = email
        self.password = password
        self.state = state
    }
}
