//
//  OFInitLinkOAuthResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFInitLinkOAuthResponseProtocol {
    var url: String? { get }
    var state: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFInitLinkOAuthResponse: Decodable, OFInitLinkOAuthResponseProtocol {
    public let url: String?
    public let state: String?
    public let error: String?
    public let success: Bool?
}
