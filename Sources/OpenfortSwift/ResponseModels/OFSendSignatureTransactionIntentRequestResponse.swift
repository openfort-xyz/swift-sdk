//
//  OFSendSignatureTransactionIntentRequestResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFSendSignatureTransactionIntentRequestResponseProtocol {
    var id: String? { get }
    var status: String? { get }
    var transactionHash: String? { get }
}

public struct OFSendSignatureTransactionIntentRequestResponse:  OFSendSignatureTransactionIntentRequestResponseProtocol, OFCodableSendable {
    public let id: String?
    public let status: String?
    public let transactionHash: String?
}
