//
//  OFRequestPhoneOtpParams.swift
//  OpenfortSwift
//

public struct OFRequestPhoneOtpParams: OFCodableSendable {
    public let phoneNumber: String

    public init(phoneNumber: String) {
        self.phoneNumber = phoneNumber
    }
}
