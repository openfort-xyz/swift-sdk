//
//  OFLogInWithPhoneOtpParams.swift
//  OpenfortSwift
//

public struct OFLogInWithPhoneOtpParams: OFCodableSendable {
    public let phoneNumber: String
    public let otp: String

    public init(phoneNumber: String, otp: String) {
        self.phoneNumber = phoneNumber
        self.otp = otp
    }
}
