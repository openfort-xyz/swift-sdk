//
//  OFLinkWalletParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFLinkWalletParams: OFCodableSendable {
    public let signature: String
    public let message: String
    public let walletClientType: String
    public let connectorType: String
    public let authToken: String

    public init(signature: String, message: String, walletClientType: String, connectorType: String, authToken: String) {
        self.signature = signature
        self.message = message
        self.walletClientType = walletClientType
        self.connectorType = connectorType
        self.authToken = authToken
    }
}
