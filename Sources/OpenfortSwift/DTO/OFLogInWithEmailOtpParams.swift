//
//  OFLogInWithEmailOtpParams.swift
//  OpenfortSwift
//

public struct OFLogInWithEmailOtpParams: OFCodableSendable {
    public let email: String
    public let otp: String

    public init(email: String, otp: String) {
        self.email = email
        self.otp = otp
    }
}
