//
//  AuthResponse.swift
//  Openfort
//
//  Created by Marc Flores on 22/5/25.
//

import Foundation

public struct AuthResponse: Codable {
    let player: AuthPlayerResponse
    let token: String
    let refreshToken: String
}

public struct LinkedAccountResponse: Codable {
    let provider: AuthProvider
    let email: String?
    let externalUserId: String
    let verified: Bool?
    let disabled: Bool
    let walletClientType: String
    let connectorType: String?
    let updatedAt: Double?
    let address: String?
}

public struct AuthPlayerResponse: Codable {
    let player: AuthPlayerResponse.Player?
    let id: String
    let createdAt: Double
    let linkedAccounts: [LinkedAccountResponse]
    
    public struct Player: Codable {
        let id: String
        let createdAt: Double
        let name: String
        let description: String?
    }
}
