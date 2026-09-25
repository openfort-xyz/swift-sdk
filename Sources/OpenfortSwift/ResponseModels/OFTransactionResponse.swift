//
//  OFTransactionResponse.swift
//  OpenfortSwift
//

/// Lifecycle status of a `/v2/transactions` transaction.
/// Terminal states: `succeeded`, `reverted`, `failed`, `expired`.
public enum OFTransactionStatus: String, OFCodableSendable {
    case awaitingSignature = "awaiting_signature"
    case submitted
    case succeeded
    case reverted
    case failed
    case expired
}

/// A single contract call inside a transaction.
public struct OFTransactionCall: OFCodableSendable {
    public let to: String?
    public let value: String?
    public let contractId: String?
    public let functionName: String?
    public let functionArgs: [JSONValue]?
    public let dataSuffix: String?
    public let data: String?
}

/// How the transaction executes on chain. `type` is `"userOperation"` (ERC-4337) or
/// `"transaction"` (plain EOA / EIP-7702 send); only the fields of that variant are set.
public struct OFTransactionExecution: OFCodableSendable {
    public let type: String
    public let entryPointVersion: String?
    public let userOperationHash: String?
    public let userOperation: JSONValue?
    public let from: String?
    public let to: String?
    public let data: String?
    public let value: String?
    public let nonce: String?
    public let gas: String?
    public let maxFeePerGas: String?
    public let maxPriorityFeePerGas: String?
}

/// The signature the transaction is waiting for. `type` is `"sign_hash"`.
public struct OFSignHashAction: OFCodableSendable {
    public let type: String
    public let hash: String
}

public struct OFTransactionErrorExplanation: OFCodableSendable {
    public let cause: String
    public let solution: String
}

/// Why a transaction reverted or failed.
public struct OFTransactionError: OFCodableSendable {
    public let reason: String
    public let name: String?
    public let explanation: OFTransactionErrorExplanation?
}

public struct OFLog: OFCodableSendable {
    public let blockNumber: Int
    public let blockHash: String
    public let transactionIndex: Int
    public let removed: Bool
    public let address: String
    public let data: String
    public let topics: [String]
    public let transactionHash: String
    public let logIndex: Int
    public let orphaned: Bool?
}

/// On-chain receipt, present once the transaction has been mined.
public struct OFTransactionReceipt: OFCodableSendable {
    public let createdAt: Int
    public let transactionHash: String?
    public let blockNumber: Int?
    public let to: String?
    public let gasUsed: String?
    public let gasFee: String?
    public let l1GasUsed: String?
    public let l1GasFee: String?
    public let logs: [OFLog]?
    public let error: OFTransactionError?
}

/// One entry of the transaction timeline. `event` is any `OFTransactionStatus` raw value plus
/// the monitoring refinements `indexed`, `confirmed`, `dropped`, `replaced`.
public struct OFTransactionTimelineEntry: OFCodableSendable {
    public let event: String
    public let at: Int?
}

/// A `/v2/transactions` transaction, as returned by `sendTransactionSignatureRequest`.
public struct OFTransactionResponse: OFCodableSendable {
    public let id: String
    public let object: String
    public let createdAt: Int
    public let updatedAt: Int
    public let chainId: Int
    public let status: OFTransactionStatus
    public let accountId: String
    public let walletId: String?
    public let feeSponsorshipId: String?
    public let calls: [OFTransactionCall]?
    public let execution: OFTransactionExecution?
    public let nextAction: OFSignHashAction?
    public let receipt: OFTransactionReceipt?
    public let timeline: [OFTransactionTimelineEntry]?
    public let costUsd: String?
}
