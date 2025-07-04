//
//  Untitled.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-04.
//


public struct OFAuthorizationResponse: Decodable, OFAuthorizationResponsable {
    // Common fields
    public let token: String?
    public let refreshToken: String?
    public let player: PlayerInfo?
    public let action: String?
    public let details: ActionDetails?
    
    public struct PlayerInfo: Decodable {
        public let id: String?
        public let email: String?
        // Add other user/player fields if needed
    }
    
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
