//
//  ConfigureEmbeddedWalletDTO.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-22.
//

public struct OFConfigureEmbeddedWalletDTO: OFCodableSendable {
    let chainId: Int?
    let recoveryParams: OFRecoveryParamsDTO

    public init(chainId: Int? = nil, recoveryParams: OFRecoveryParamsDTO) {
        self.chainId = chainId
        self.recoveryParams = recoveryParams
    }
}
