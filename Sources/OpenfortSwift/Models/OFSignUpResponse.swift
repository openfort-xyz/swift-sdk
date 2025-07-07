//
//  OFSignUpResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-04.
//

public protocol OFSignUpResponsable: Decodable {
    var token: String? { get }
    var refreshToken: String? { get }
    var player: OFPlayerInfo? { get }
    var action: String? { get }
    var details: [String: String]? { get }
    
}

public struct OFSignUpResponse: OFSignUpResponsable {
    public let token: String?
    public let refreshToken: String?
    public let player: OFPlayerInfo?
    public let action: String?
    public let details: [String: String]? // You can replace String with more detailed types if needed
}
