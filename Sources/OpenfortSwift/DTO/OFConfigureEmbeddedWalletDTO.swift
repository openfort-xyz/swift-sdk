//
//  ConfigureEmbeddedWalletDTO.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-22.
//

public struct OFShieldAuthenticationDTO: Codable {
    let auth: String
    let token: String
    let authProvider: String
    let tokenType: String
}

public struct OFRecoveryParamsDTO: Codable {
    let recoveryMethod: String
    let password: String
}

public struct OFConfigureEmbeddedWalletDTO: Codable {
    let chainId: String
    let shieldAuthentication: OFShieldAuthenticationDTO
    let recoveryParams: OFRecoveryParamsDTO
}
