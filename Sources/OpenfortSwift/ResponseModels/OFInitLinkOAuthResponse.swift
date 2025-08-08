//
//  OFInitLinkOAuthResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFInitLinkOAuthResponseProtocol {
    var url: String? { get }
    var state: String? { get }
}

public struct OFInitLinkOAuthResponse: OFInitLinkOAuthResponseProtocol, OFCodableSendable {
    public let url: String?
    public let state: String?
}
