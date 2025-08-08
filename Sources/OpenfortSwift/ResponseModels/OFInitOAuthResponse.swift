//
//  OFInitOAuthResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFInitOAuthResponseProtocol {
    var url: String? { get }
    var state: String? { get }
}

public struct OFInitOAuthResponse: OFInitOAuthResponseProtocol, OFCodableSendable {
    public let url: String?
    public let state: String?
}
