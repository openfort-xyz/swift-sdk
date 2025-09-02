//
//  OFUnlinkEmailPasswordParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFUnlinkEmailPasswordParams: OFCodableSendable {
    public let email: String
    public let authToken: String

    public init(email: String, authToken: String) {
        self.email = email
        self.authToken = authToken
    }
}
