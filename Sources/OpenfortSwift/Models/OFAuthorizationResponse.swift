//
//  Untitled.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-04.
//

public protocol OFAuthorizationResponseProtocol {
    var token: String? { get }
    var refreshToken: String? { get }
    var player: OFPlayerInfo? { get }
    var action: String? { get }
    var details: OFAuthorizationResponse.ActionDetails? { get }
}

public protocol OFPlayerInfoResponsable {
    var id: String? { get }
    var email: String? { get }
}

public struct OFAuthorizationResponse: OFAuthorizationResponseProtocol, Decodable {
    // Common fields
    public let token: String?
    public let refreshToken: String?
    public let player: OFPlayerInfo?
    public let action: String?
    public let details: ActionDetails?
    
    public struct ActionDetails: Decodable {
        // Expand with specific fields if your backend provides them
        // For now, use a generic dictionary to capture anything
        public let raw: [String: String?]?
        
        public init(from decoder: Decoder) throws {
            let container = try decoder.singleValueContainer()
            raw = try? container.decode([String: String?].self)
        }
    }
}

public struct OFPlayerInfo: OFPlayerInfoResponsable, Decodable {
    public let id: String?
    public let email: String?
    // Add other fields as needed
}
