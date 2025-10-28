//
//  OFSetRecoveryMethodParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFSetRecoveryMethodParams: OFCodableSendable {
    public let previousRecovery: OFRecoveryParamsDTO
    public let newRecovery: OFRecoveryParamsDTO

    public init(previousRecovery: OFRecoveryParamsDTO, newRecovery: OFRecoveryParamsDTO) {
        self.previousRecovery = previousRecovery
        self.newRecovery = newRecovery
    }
}
