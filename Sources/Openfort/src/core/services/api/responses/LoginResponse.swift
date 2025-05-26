//
//  LoginResponse.swift
//  Openfort
//
//  Created by Marc Flores on 26/5/25.
//

import Foundation

struct LoginResponse: Codable, Sendable {
    let player: AuthPlayerResponse
    let token: String
    let refreshToken: String
}
