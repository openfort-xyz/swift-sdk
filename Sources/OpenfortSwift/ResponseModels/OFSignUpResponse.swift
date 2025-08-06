//
//  OFSignUpResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-04.
//

public protocol OFSignUpResponseProtocol {
    var token: String? { get }
    var refreshToken: String? { get }
    var player: OFPlayerInfo? { get }
    var action: String? { get }
    var details: [String: AnyCodable]? { get }
    
}

public struct OFSignUpResponse: OFSignUpResponseProtocol, Decodable {
    public let token: String?
    public let refreshToken: String?
    public let player: OFPlayerInfo?
    public let action: String?
    public let details: [String: AnyCodable]?
}
