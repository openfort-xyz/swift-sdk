//
//  Untitled.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-04.
//

public protocol OFAuthorizationResponsable {
    var token: String? { get }
    var refreshToken: String? { get }
    var player: OFAuthorizationResponse.PlayerInfo? { get }
    var action: String? { get }
    var details: OFAuthorizationResponse.ActionDetails? { get }
}
