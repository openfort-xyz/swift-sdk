//
//  OFEmbeddedAccountRecoverParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-08-26.
//

import Foundation

public struct OFEmbeddedAccountRecoverParams: OFCodableSendable {
    public let account: String
    public let recoveryParams: OFRecoveryParamsDTO

    public init(
        account: String,
        recoveryParams: OFRecoveryParamsDTO
    ) {
        self.account = account
        self.recoveryParams = recoveryParams
    }
}
