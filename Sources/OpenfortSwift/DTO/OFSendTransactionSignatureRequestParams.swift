//
//  OFSendTransactionSignatureRequestParams.swift
//  OpenfortSwift
//

/// Parameters for `sendTransactionSignatureRequest`, which signs and submits a
/// `/v2/transactions` transaction created by your backend.
///
/// Pass `hash` (the transaction's `nextAction.hash`) to sign with the embedded signer, or a
/// ready-made `signature` (e.g. from a session key). `optimistic` returns as soon as the
/// transaction is broadcast (`status == .submitted`) instead of waiting for the receipt.
public struct OFSendTransactionSignatureRequestParams: OFCodableSendable {
    public let transactionId: String
    public let hash: String?
    public let signature: String?
    public let optimistic: Bool?

    public init(transactionId: String, hash: String? = nil, signature: String? = nil, optimistic: Bool? = nil) {
        self.transactionId = transactionId
        self.hash = hash
        self.signature = signature
        self.optimistic = optimistic
    }
}
