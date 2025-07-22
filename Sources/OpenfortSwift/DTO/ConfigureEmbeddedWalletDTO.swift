//
//  ConfigureEmbeddedWalletDTO.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-22.
//

public struct ShieldAuthenticationDTO: Codable {
    let auth: String
    let token: String
    let authProvider: String
    let tokenType: String
}

public struct RecoveryParamsDTO: Codable {
    let recoveryMethod: String
    let password: String
}

public struct ConfigureEmbeddedWalletDTO: Codable {
    let chainId: String
    let shieldAuthentication: ShieldAuthenticationDTO
    let recoveryParams: RecoveryParamsDTO
}
