//
//  OFInitLinkSiweParams.swift
//  OpenfortSwift
//

public struct OFInitLinkSiweParams: OFCodableSendable {
    public let address: String

    public init(address: String) {
        self.address = address
    }
}
