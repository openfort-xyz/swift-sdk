//
//  OFVerifyEmailParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFVerifyEmailParams: OFCodableSendable {
    public let email: String
    public let state: String

    public init(email: String, state: String) {
        self.email = email
        self.state = state
    }
}
