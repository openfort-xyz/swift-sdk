//
//  OFSendSignatureTransactionIntentRequestParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFSendSignatureTransactionIntentRequestParams: Codable {
    public let transactionIntentId: String
    public let signableHash: String?
    public let signature: String?
    public let optimistic: Bool?

    public init(transactionIntentId: String, signableHash: String? = nil, signature: String? = nil, optimistic: Bool? = nil) {
        self.transactionIntentId = transactionIntentId
        self.signableHash = signableHash
        self.signature = signature
        self.optimistic = optimistic
    }
}
