//
//  OFSendTransactionSignatureRequestParams.swift
//  OpenfortSwift
//

/// Parameters for submitting the signature of a `/v2/transactions` transaction.
public struct OFSendTransactionSignatureRequestParams: OFCodableSendable {
    /// The transaction id (starts with `tin_`).
    public let transactionId: String
    /// The `nextAction.hash` to sign with the embedded signer. Ignored when `signature` is given.
    public let hash: String?
    /// A ready-made signature (e.g. from a session key).
    public let signature: String?
    /// Resolve as soon as the transaction is broadcast instead of waiting for the receipt.
    public let optimistic: Bool?

    public init(transactionId: String, hash: String? = nil, signature: String? = nil, optimistic: Bool? = nil) {
        self.transactionId = transactionId
        self.hash = hash
        self.signature = signature
        self.optimistic = optimistic
    }
}
