//
//  OFVerifyEmailOtpParams.swift
//  OpenfortSwift
//

public struct OFVerifyEmailOtpParams: OFCodableSendable {
    public let email: String
    public let otp: String

    public init(email: String, otp: String) {
        self.email = email
        self.otp = otp
    }
}
