//
//  OFLinkEmailPasswordResponse'.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-07.
//

public protocol OFLinkEmailPasswordResponsable: Decodable {
    var token: String? { get }
    var refreshToken: String? { get }
    var player: OFPlayerInfo? { get }
    var action: String? { get }
    var details: [String: String]? { get }
}

public struct OFLinkEmailPasswordResponse: OFLinkEmailPasswordResponsable {
    public let token: String?
    public let refreshToken: String?
    public let player: OFPlayerInfo?
    public let action: String?
    public let details: [String: String]? // Or [String: AnyCodable] if you use AnyCodable
}
