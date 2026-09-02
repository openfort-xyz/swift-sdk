//
//  OFTransactionResponse.swift
//  OpenfortSwift
//

/// Lifecycle status of a `/v2/transactions` transaction. Terminal: `succeeded`, `reverted`, `failed`.
public enum OFTransactionStatus: String, OFCodableSendable {
    case awaitingSignature = "awaiting_signature"
    case submitted
    case succeeded
    case reverted
    case failed
}

/// A transaction returned by the `/v2/transactions` endpoints. Maps to the JS `TransactionResponse` type.
public struct OFTransactionResponse: OFCodableSendable {
    public let id: String
    public let object: String            // "transaction"
    public let createdAt: Int
    public let updatedAt: Int
    public let chainId: Int
    public let status: OFTransactionStatus
    /// ID of the account that executes the transaction (`acc_`).
    public let accountId: String
    /// ID of the wallet that owns the account (`pla_`). Absent for backend wallets.
    public let walletId: String?
    /// ID of the fee sponsorship paying for gas (`pol_`). Absent when the account pays its own gas.
    public let feeSponsorshipId: String?
    public let calls: [OFTransactionCall]?
    public let execution: OFTransactionExecution?
    /// Present while `status` is `awaitingSignature`.
    public let nextAction: OFSignHashAction?
    /// Present once the transaction reached a terminal status.
    public let receipt: OFTransactionReceipt?
    /// Lifecycle history, present only with `expand=timeline`.
    public let timeline: [OFTransactionTimelineEntry]?
    /// Actual transaction cost in USD, available after on-chain confirmation.
    public let costUsd: String?
}

/// A single call executed by the transaction: either raw (`to`/`value`/`data`)
/// or a registered contract call (`contractId`/`functionName`/`functionArgs`).
public struct OFTransactionCall: OFCodableSendable {
    public let to: String?
    /// Value in wei, as a string.
    public let value: String?
    public let data: String?
    public let dataSuffix: String?
    /// ID of a contract registered in Openfort (`con_`).
    public let contractId: String?
    public let functionName: String?
    public let functionArgs: [AnyCodable]?
}

/// How the transaction is executed on-chain. `type` is `"userOperation"` (ERC-4337, including EIP-7702
/// delegated accounts) or `"transaction"` (plain EOA transaction). The user-operation fields are set
/// for the former, the EOA fields for the latter.
public struct OFTransactionExecution: OFCodableSendable {
    public let type: String
    public let entryPointVersion: String?
    public let userOperationHash: String?
    /// The full user operation, present only with `expand=userOperation`.
    public let userOperation: [String: AnyCodable]?
    public let from: String?
    public let to: String?
    public let data: String?
    public let value: String?
    public let nonce: String?
    public let gas: String?
    public let maxFeePerGas: String?
    public let maxPriorityFeePerGas: String?
}

public struct OFSignHashAction: OFCodableSendable {
    /// Always `"sign_hash"`.
    public let type: String
    /// Hash to sign with the account's signer, then submit with `sendTransactionSignatureRequest`.
    public let hash: String
}

public struct OFTransactionReceipt: OFCodableSendable {
    public let createdAt: Int
    public let transactionHash: String?
    public let blockNumber: Int?
    public let to: String?
    public let gasUsed: String?
    public let gasFee: String?
    public let l1GasUsed: String?
    public let l1GasFee: String?
    /// Event logs, present only with `expand=logs`.
    public let logs: [OFLog]?
    /// Present when the transaction reverted or failed.
    public let error: OFTransactionError?
}

public struct OFTransactionError: OFCodableSendable {
    public let reason: String
    public let name: String?
    public let explanation: OFTransactionErrorExplanation?
}

public struct OFTransactionErrorExplanation: OFCodableSendable {
    public let cause: String
    public let solution: String
}

public struct OFTransactionTimelineEntry: OFCodableSendable {
    public let event: String
    /// Unix timestamp in seconds. Absent when the exact time is unknown.
    public let at: Int?
}
