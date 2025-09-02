//
//  OFRequestEmailVerificationParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFRequestEmailVerificationParams: OFCodableSendable {
    public let email: String
    public let redirectUrl: String

    public init(email: String, redirectUrl: String) {
        self.email = email
        self.redirectUrl = redirectUrl
    }
}
