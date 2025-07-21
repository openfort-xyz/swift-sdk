//
//  OFValidateAndRefreshTokenResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFValidateAndRefreshTokenResponseProtocol {
    var accessToken: String? { get }
    var refreshToken: String? { get }
}

public struct OFValidateAndRefreshTokenResponse: Decodable, OFValidateAndRefreshTokenResponseProtocol {
    public let accessToken: String?
    public let refreshToken: String?
}
