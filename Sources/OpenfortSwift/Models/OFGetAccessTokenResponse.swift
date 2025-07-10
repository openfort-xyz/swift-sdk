//
//  OFGetAccessTokenResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetAccessTokenResponseProtocol {
    var accessToken: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFGetAccessTokenResponse: Decodable, OFGetAccessTokenResponseProtocol {
    public let accessToken: String?
    public let error: String?
    public let success: Bool?
}
