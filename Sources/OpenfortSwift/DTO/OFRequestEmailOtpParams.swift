//
//  OFRequestEmailOtpParams.swift
//  OpenfortSwift
//

public struct OFRequestEmailOtpParams: OFCodableSendable {
    public let email: String

    public init(email: String) {
        self.email = email
    }
}
