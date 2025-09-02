//
//  Untitled.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-04.
//

public protocol OFAuthorizationResponseProtocol {
    var token: String? { get }
    var refreshToken: String? { get }
    var player: OFAuthPlayerResponse? { get }
    var action: String? { get }
}

public struct OFAuthorizationResponse: OFAuthorizationResponseProtocol, OFCodableSendable {
    public let token: String?
    public let refreshToken: String?
    public let player: OFAuthPlayerResponse?
    public let action: String?
}

