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

public enum OFRecoveryMethod: String, OFCodableSendable {
    case automatic = "AUTOMATIC"
    case password = "PASSWORD"
}

// MARK: - RecoveryParams

public enum OFRecoveryParamsDTO: OFCodableSendable {
    case automatic(encryptionSession: String)
    case password(password: String)

    enum CodingKeys: String, CodingKey {
        case recoveryMethod
        case encryptionSession
        case password
    }

    enum RecoveryMethodKey: String, OFCodableSendable {
        case automatic = "AUTOMATIC"
        case password = "PASSWORD"
    }

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let method = try container.decode(RecoveryMethodKey.self, forKey: .recoveryMethod)

        switch method {
        case .automatic:
            let session = try container.decode(String.self, forKey: .encryptionSession)
            self = .automatic(encryptionSession: session)
        case .password:
            let pwd = try container.decode(String.self, forKey: .password)
            self = .password(password: pwd)
        }
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        switch self {
        case .automatic(let encryptionSession):
            try container.encode(RecoveryMethodKey.automatic, forKey: .recoveryMethod)
            try container.encode(encryptionSession, forKey: .encryptionSession)
        case .password(let password):
            try container.encode(RecoveryMethodKey.password, forKey: .recoveryMethod)
            try container.encode(password, forKey: .password)
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
