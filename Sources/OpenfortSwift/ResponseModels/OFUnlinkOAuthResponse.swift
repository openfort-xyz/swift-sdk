//
//  OFUnlinkOAuthResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFUnlinkOAuthResponseProtocol {
    var result: String? { get }
}

public struct OFUnlinkOAuthResponse: OFUnlinkOAuthResponseProtocol, OFCodableSendable {
    public let result: String?
}
