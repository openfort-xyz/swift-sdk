//
//  OFResetPasswordParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFResetPasswordParams: OFCodableSendable {
    public let password: String
    public let token: String

    public init(password: String, token: String) {
        self.password = password
        self.token = token
    }
}
