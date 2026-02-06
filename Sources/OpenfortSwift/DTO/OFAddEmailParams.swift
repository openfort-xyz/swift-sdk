//
//  OFAddEmailParams.swift
//  OpenfortSwift
//

public struct OFAddEmailParams: OFCodableSendable {
    public let email: String
    public let callbackURL: String

    public init(email: String, callbackURL: String) {
        self.email = email
        self.callbackURL = callbackURL
    }
}
