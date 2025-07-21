//
//  OFGetAccessTokenResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetAccessTokenResponseProtocol {
    var accessToken: String? { get }
}

public struct OFGetAccessTokenResponse: Decodable, OFGetAccessTokenResponseProtocol {
    public let accessToken: String?
}
