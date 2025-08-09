//
//  OFLoginWithIdTokenResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFLoginWithIdTokenResponseProtocol {
    var player: OFAuthPlayerResponse { get }
    var token: String { get }
    var refreshToken: String { get }
}

public struct OFLoginWithIdTokenResponse: OFLoginWithIdTokenResponseProtocol, OFCodableSendable {
    public let player: OFAuthPlayerResponse
    public let token: String
    public let refreshToken: String
}
