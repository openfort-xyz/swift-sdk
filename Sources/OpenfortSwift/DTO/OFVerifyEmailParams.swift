//
//  OFVerifyEmailParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFVerifyEmailParams: OFCodableSendable {
    public let token: String
    public let callbackURL: String?

    public init(token: String, callbackURL: String? = nil) {
        self.token = token
        self.callbackURL = callbackURL
    }
}
