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

    public init(chainId: Int? = nil, recoveryParams: OFRecoveryParamsDTO) {
        self.chainId = chainId
        self.recoveryParams = recoveryParams
    }
}
