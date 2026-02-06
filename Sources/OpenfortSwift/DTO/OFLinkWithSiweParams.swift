//
//  OFLinkWithSiweParams.swift
//  OpenfortSwift
//

public struct OFLinkWithSiweParams: OFCodableSendable {
    public let signature: String
    public let message: String
    public let walletClientType: String
    public let connectorType: String
    public let address: String
    public let chainId: Int

    public init(signature: String, message: String, walletClientType: String, connectorType: String, address: String, chainId: Int) {
        self.signature = signature
        self.message = message
        self.walletClientType = walletClientType
        self.connectorType = connectorType
        self.address = address
        self.chainId = chainId
    }
}
