//
//  OFSetEmbeddedRecoveryParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFSetEmbeddedRecoveryParams: Codable, Sendable {
    public let recoveryMethod: String
    public let recoveryPassword: String
    public let encryptionSession: String

    public init(recoveryMethod: String, recoveryPassword: String, encryptionSession: String) {
        self.recoveryMethod = recoveryMethod
        self.recoveryPassword = recoveryPassword
        self.encryptionSession = encryptionSession
    }
}
