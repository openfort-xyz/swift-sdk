//
//  OFEmbeddedAccountCreateParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-08-26.
//

import Foundation

// MARK: - Enums

public enum OFAccountType: String, OFCodableSendable {
    case eoa = "Externally Owned Account"
    case smartAccount = "Smart Account"
}

public enum OFChainType: String, OFCodableSendable {
    case evm = "EVM"
    case svm = "SVM"
}

// MARK: - PasskeyInfo

public struct OFPasskeyInfoDTO: OFCodableSendable {
    public let passkeyId: String
    public let passkeyKey: [UInt8]?

    public init(passkeyId: String, passkeyKey: [UInt8]? = nil) {
        self.passkeyId = passkeyId
        self.passkeyKey = passkeyKey
    }
}

// MARK: - RecoveryParams

public enum OFRecoveryMethod: String, OFCodableSendable {
    case automatic = "automatic"
    case password = "password"
    case passkey = "passkey"
}

public struct OFRecoveryParamsDTO: OFCodableSendable {
    public let recoveryMethod: OFRecoveryMethod
    public let encryptionSession: String?
    public let password: String?
    public let passkeyInfo: OFPasskeyInfoDTO?

    enum CodingKeys: String, CodingKey {
        case recoveryMethod
        case encryptionSession
        case password
        case passkeyInfo
    }

    // Memberwise init for convenience
    public init(
        recoveryMethod: OFRecoveryMethod,
        encryptionSession: String? = nil,
        password: String? = nil,
        passkeyInfo: OFPasskeyInfoDTO? = nil
    ) {
        self.recoveryMethod = recoveryMethod
        self.encryptionSession = encryptionSession
        self.password = password
        self.passkeyInfo = passkeyInfo
    }

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.recoveryMethod = try container.decode(OFRecoveryMethod.self, forKey: .recoveryMethod)
        self.encryptionSession = try container.decodeIfPresent(String.self, forKey: .encryptionSession)
        self.password = try container.decodeIfPresent(String.self, forKey: .password)
        self.passkeyInfo = try container.decodeIfPresent(OFPasskeyInfoDTO.self, forKey: .passkeyInfo)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(recoveryMethod, forKey: .recoveryMethod)
        // Only encode the field relevant to the method (others remain omitted)
        switch recoveryMethod {
        case .automatic:
            if let encryptionSession {
                try container.encode(encryptionSession, forKey: .encryptionSession)
            }
        case .password:
            if let password {
                try container.encode(password, forKey: .password)
            }
        case .passkey:
            if let passkeyInfo {
                try container.encode(passkeyInfo, forKey: .passkeyInfo)
            }
        }
    }
}

// MARK: - EmbeddedAccountCreateParams

public struct OFEmbeddedAccountCreateParams: OFCodableSendable {
    public let accountType: OFAccountType
    public let chainType: OFChainType
    public let chainId: Int?
    public let recoveryParams: OFRecoveryParamsDTO

    public init(
        accountType: OFAccountType,
        chainType: OFChainType,
        chainId: Int? = nil,
        recoveryParams: OFRecoveryParamsDTO
    ) {
        self.accountType = accountType
        self.chainType = chainType
        self.chainId = chainId
        self.recoveryParams = recoveryParams
    }
}
