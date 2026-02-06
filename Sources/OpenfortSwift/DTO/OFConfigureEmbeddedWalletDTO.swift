//
//  ConfigureEmbeddedWalletDTO.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-22.
//

/// Maps to the JS `EmbeddedAccountConfigureParams` type.
public struct OFEmbeddedAccountConfigureParams: OFCodableSendable {
    let chainId: Int?
    let recoveryParams: OFRecoveryParamsDTO
    let chainType: OFChainType?
    let accountType: OFAccountType?

    public init(
        chainId: Int? = nil,
        recoveryParams: OFRecoveryParamsDTO,
        chainType: OFChainType? = nil,
        accountType: OFAccountType? = nil
    ) {
        self.chainId = chainId
        self.recoveryParams = recoveryParams
        self.chainType = chainType
        self.accountType = accountType
    }
}
