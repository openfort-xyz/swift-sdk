//
//  OFValidateAndRefreshTokenResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFValidateAndRefreshTokenResponseProtocol {
    var accessToken: String? { get }
    var refreshToken: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFValidateAndRefreshTokenResponse: Decodable, OFValidateAndRefreshTokenResponseProtocol {
    public let accessToken: String?
    public let refreshToken: String?
    public let error: String?
    public let success: Bool?
}
