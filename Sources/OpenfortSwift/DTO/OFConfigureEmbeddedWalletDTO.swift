//
//  ConfigureEmbeddedWalletDTO.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-22.
//

public struct OFShieldAuthenticationDTO: Codable, Sendable {
    let auth: String
    let token: String
    let authProvider: String
    let tokenType: String
    let encryptionSession: String?
    
    public init(auth: String, token: String, authProvider: String, tokenType: String, encryptionSession: String? = nil) {
        self.auth = auth
        self.token = token
        self.authProvider = authProvider
        self.tokenType = tokenType
        self.encryptionSession = encryptionSession
    }
}

public struct OFRecoveryParamsDTO: Codable {
    let recoveryMethod: String
    let password: String?

    public init(recoveryMethod: String, password: String?) {
        self.recoveryMethod = recoveryMethod
        self.password = password
    }
}

public struct OFConfigureEmbeddedWalletDTO: Codable {
    let chainId: Int
    let shieldAuthentication: OFShieldAuthenticationDTO
    let recoveryParams: OFRecoveryParamsDTO

    public init(chainId: Int, shieldAuthentication: OFShieldAuthenticationDTO, recoveryParams: OFRecoveryParamsDTO) {
        self.chainId = chainId
        self.shieldAuthentication = shieldAuthentication
        self.recoveryParams = recoveryParams
    }
}
