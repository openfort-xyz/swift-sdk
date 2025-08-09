//
//  OFLinkThirdPartyProviderResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//


public protocol OFLinkThirdPartyProviderResponseProtocol {
    var player: OFAuthPlayerResponsePlayer? { get }
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var linkedAccounts: [OFLinkedAccountResponse] { get }
}

public protocol OFAuthPlayerResponsePlayerProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var name: String { get }
    var description: String? { get }
    var metadata: [String: JSONValue]? { get }
    var transactionIntents: [OFTransactionIntentResponse]? { get }
    var accounts: [OFPlayerResponseAccountsInner]? { get }
}

public protocol OFPlayerResponseAccountsInnerProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var address: String { get }
    var ownerAddress: String { get }
    var deployed: Bool { get }
    var custodial: Bool { get }
    var embeddedSigner: Bool { get }
    var chainId: Int { get }
    var accountType: String { get }
    var pendingOwnerAddress: String? { get }
    var transactionIntents: [OFEntityIdResponse]? { get }
    var player: OFEntityIdResponse { get }
}

public protocol OFEntityIdResponseProtocol { var id: String { get } }

public protocol OFTransactionIntentResponseProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var updatedAt: Int { get }
    var abstractionType: OFTransactionAbstractionType { get }
    var details: OFTransactionDetails? { get }
    var chainId: Int { get }
    var response: OFResponseResponse? { get }
    var interactions: [OFInteraction]? { get }
    var nextAction: OFNextActionResponse? { get }
    var policy: OFPolicyOrEntity? { get }
    var player: OFPlayerOrEntity? { get }
    var account: OFAccountOrEntity? { get }
}

public protocol OFResponseResponseProtocol {
    var createdAt: Int { get }
    var blockNumber: Int? { get }
    var transactionHash: String? { get }
    var l1GasUsed: String? { get }
    var gasUsed: String? { get }
    var gasFee: String? { get }
    var l1GasFee: String? { get }
    var status: Int? { get }
    var logs: [OFLog]? { get }
    var to: String? { get }
    var error: JSONValue? { get }
}

public protocol OFLogProtocol {
    var blockNumber: Int { get }
    var blockHash: String { get }
    var transactionIndex: Int { get }
    var removed: Bool { get }
    var address: String { get }
    var data: String { get }
    var topics: [String] { get }
    var transactionHash: String { get }
    var logIndex: Int { get }
    var orphaned: Bool? { get }
}

public protocol OFInteractionProtocol {
    var to: String? { get }
    var value: String? { get }
    var contract: String? { get }
    var functionName: String? { get }
    var functionArgs: [JSONValue]? { get }
    var dataSuffix: String? { get }
    var data: String? { get }
}

public protocol OFNextActionResponseProtocol {
    var type: String { get }
    var payload: OFNextActionPayload { get }
}

public protocol OFNextActionPayloadProtocol {
    var userOperation: JSONValue? { get }
    var userOperationHash: String? { get }
    var signableHash: String? { get }
}

public protocol OFTransactionIntentResponsePolicyProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var name: String? { get }
    var deleted: Bool { get }
    var enabled: Bool { get }
    var chainId: Int { get }
    var paymaster: OFEntityIdResponse? { get }
    var strategy: OFPolicyStrategy { get }
    var transactionIntents: [OFEntityIdResponse] { get }
    var policyRules: [OFEntityIdResponse] { get }
}

public protocol OFPolicyStrategyProtocol {
    var sponsorSchema: String { get }
    var depositor: String? { get }
    var tokenContract: String { get }
    var tokenContractAmount: String { get }
}

public protocol OFTransactionIntentResponseAccountProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var address: String { get }
    var ownerAddress: String { get }
    var deployed: Bool { get }
    var custodial: Bool { get }
    var embeddedSigner: Bool { get }
    var chainId: Int { get }
    var accountType: String { get }
    var pendingOwnerAddress: String? { get }
    var transactionIntents: [OFEntityIdResponse]? { get }
    var player: OFEntityIdResponse { get }
    var name: String? { get }
}

public protocol OFTransactionIntentResponsePlayerProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var name: String { get }
    var description: String? { get }
    var metadata: [String: JSONValue]? { get }
    var transactionIntents: [OFEntityIdResponse]? { get }
    var accounts: [OFEntityIdResponse]? { get }
}

import Foundation

// MARK: - Root

public struct OFAuthPlayerResponse: OFCodableSendable, OFLinkThirdPartyProviderResponseProtocol {
    public let player: OFAuthPlayerResponsePlayer?
    public let id: String
    public let object: String           // "player"
    public let createdAt: Int
    public let linkedAccounts: [OFLinkedAccountResponse]
}

// MARK: - Player (dependent)

public struct OFAuthPlayerResponsePlayer: OFCodableSendable, OFAuthPlayerResponsePlayerProtocol {
    public let id: String
    public let object: String           // "player"
    public let createdAt: Int
    public let name: String
    public let description: String?
    public let metadata: [String: JSONValue]?
    public let transactionIntents: [OFTransactionIntentResponse]?
    public let accounts: [OFPlayerResponseAccountsInner]?
}

// MARK: - Linked Accounts (dependent)

public enum OFAuthProvider: String, OFCodableSendable {
    case email
    case wallet
    case apple
    case google
    case twitter
    case discord
    case facebook
    case epic_games
    case accelbyte
    case firebase
    case lootlocker
    case playfab
    case supabase
    case custom
    case oidc
}

// MARK: - Accounts inside Player (dependent)

public struct OFPlayerResponseAccountsInner: OFCodableSendable, OFPlayerResponseAccountsInnerProtocol {
    public let id: String
    public let object: String           // "account"
    public let createdAt: Int
    public let address: String
    public let ownerAddress: String
    public let deployed: Bool
    public let custodial: Bool
    public let embeddedSigner: Bool
    public let chainId: Int
    public let accountType: String
    public let pendingOwnerAddress: String?
    public let transactionIntents: [OFEntityIdResponse]?
    public let player: OFEntityIdResponse
}

public struct OFEntityIdResponse: OFCodableSendable, OFEntityIdResponseProtocol {
    public let id: String
}

// MARK: - Transaction Intent (dependent)

public enum OFTransactionAbstractionType: String, OFCodableSendable {
    case accountAbstractionV6
    case zkSync
    case standard
}

public struct OFTransactionIntentResponse: OFCodableSendable, OFTransactionIntentResponseProtocol {
    public let id: String
    public let object: String           // "transactionIntent"
    public let createdAt: Int
    public let updatedAt: Int
    public let abstractionType: OFTransactionAbstractionType
    public let details: OFTransactionDetails?
    public let chainId: Int
    public let response: OFResponseResponse?
    public let interactions: [OFInteraction]?
    public let nextAction: OFNextActionResponse?
    public let policy: OFPolicyOrEntity?
    public let player: OFPlayerOrEntity?
    public let account: OFAccountOrEntity?
}

// Polymorphic helpers for union fields in TS

public enum OFPolicyOrEntity: OFCodableSendable {
    case policy(OFTransactionIntentResponsePolicy)
    case entity(OFEntityIdResponse)

    public init(from decoder: Decoder) throws {
        let c = try decoder.singleValueContainer()
        if let policy = try? c.decode(OFTransactionIntentResponsePolicy.self) {
            self = .policy(policy)
        } else if let entity = try? c.decode(OFEntityIdResponse.self) {
            self = .entity(entity)
        } else {
            throw DecodingError.typeMismatch(OFPolicyOrEntity.self, .init(codingPath: decoder.codingPath, debugDescription: "Neither policy nor entity"))
        }
    }
    public func encode(to encoder: Encoder) throws {
        var c = encoder.singleValueContainer()
        switch self {
        case .policy(let p): try c.encode(p)
        case .entity(let e): try c.encode(e)
        }
    }
}

public enum OFPlayerOrEntity: OFCodableSendable {
    case player(OFTransactionIntentResponsePlayer)
    case entity(OFEntityIdResponse)

    public init(from decoder: Decoder) throws {
        let c = try decoder.singleValueContainer()
        if let player = try? c.decode(OFTransactionIntentResponsePlayer.self) {
            self = .player(player)
        } else if let entity = try? c.decode(OFEntityIdResponse.self) {
            self = .entity(entity)
        } else {
            throw DecodingError.typeMismatch(OFPlayerOrEntity.self, .init(codingPath: decoder.codingPath, debugDescription: "Neither player nor entity"))
        }
    }
    public func encode(to encoder: Encoder) throws {
        var c = encoder.singleValueContainer()
        switch self {
        case .player(let p): try c.encode(p)
        case .entity(let e): try c.encode(e)
        }
    }
}

public enum OFAccountOrEntity: OFCodableSendable {
    case account(OFTransactionIntentResponseAccount)
    case entity(OFEntityIdResponse)

    public init(from decoder: Decoder) throws {
        let c = try decoder.singleValueContainer()
        if let account = try? c.decode(OFTransactionIntentResponseAccount.self) {
            self = .account(account)
        } else if let entity = try? c.decode(OFEntityIdResponse.self) {
            self = .entity(entity)
        } else {
            throw DecodingError.typeMismatch(OFAccountOrEntity.self, .init(codingPath: decoder.codingPath, debugDescription: "Neither account nor entity"))
        }
    }
    public func encode(to encoder: Encoder) throws {
        var c = encoder.singleValueContainer()
        switch self {
        case .account(let a): try c.encode(a)
        case .entity(let e): try c.encode(e)
        }
    }
}

// MARK: - Details unions

public enum OFTransactionDetails: OFCodableSendable {
    case accountAbstractionV6(OFAccountAbstractionV6Details)
    case zkSync(ZKSyncDetails)
    case standard(OFStandardDetails)

    public init(from decoder: Decoder) throws {
        let c = try decoder.singleValueContainer()
        if let v6 = try? c.decode(OFAccountAbstractionV6Details.self) {
            self = .accountAbstractionV6(v6)
        } else if let zk = try? c.decode(ZKSyncDetails.self) {
            self = .zkSync(zk)
        } else if let std = try? c.decode(OFStandardDetails.self) {
            self = .standard(std)
        } else {
            throw DecodingError.typeMismatch(OFTransactionDetails.self, .init(codingPath: decoder.codingPath, debugDescription: "Unknown details variant"))
        }
    }
    public func encode(to encoder: Encoder) throws {
        var c = encoder.singleValueContainer()
        switch self {
        case .accountAbstractionV6(let v): try c.encode(v)
        case .zkSync(let z): try c.encode(z)
        case .standard(let s): try c.encode(s)
        }
    }
}

public struct OFAccountAbstractionV6Details: OFCodableSendable {
    public let userOperation: OFUserOperationV6
    public let userOperationHash: String
}

public struct OFUserOperationV6: OFCodableSendable {
    public let callData: String
    public let callGasLimit: String
    public let initCode: String?
    public let maxFeePerGas: String
    public let maxPriorityFeePerGas: String
    public let nonce: String
    public let paymasterAndData: String?
    public let preVerificationGas: String
    public let sender: String
    public let signature: String
    public let verificationGasLimit: String
}

public struct ZKSyncDetails: OFCodableSendable {
    public let from: String
    public let to: String
    public let data: String?
    public let nonce: String
    public let gas: String
    public let maxFeePerGas: String
    public let maxPriorityFeePerGas: String
    public let paymaster: String?
    public let paymasterInput: String?
    public let value: String?
}

public struct OFStandardDetails: OFCodableSendable {
    public let from: String
    public let to: String
    public let data: String?
    public let nonce: String
    public let gas: String
    public let maxFeePerGas: String
    public let maxPriorityFeePerGas: String
    public let value: String?
}

// MARK: - Other dependents used by TransactionIntentResponse

public struct OFResponseResponse: OFCodableSendable, OFResponseResponseProtocol {
    public let createdAt: Int
    public let blockNumber: Int?
    public let transactionHash: String?
    public let l1GasUsed: String?
    public let gasUsed: String?
    public let gasFee: String?
    public let l1GasFee: String?
    public let status: Int?
    public let logs: [OFLog]?
    public let to: String?
    public let error: JSONValue?
}

public struct OFLog: OFCodableSendable, OFLogProtocol {
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

public struct OFInteraction: OFCodableSendable, OFInteractionProtocol {
    public let to: String?
    public let value: String?
    public let contract: String?
    public let functionName: String?
    public let functionArgs: [JSONValue]?
    public let dataSuffix: String?
    public let data: String?
}

public struct OFNextActionResponse: OFCodableSendable, OFNextActionResponseProtocol {
    public let type: String                  // "sign_with_wallet"
    public let payload: OFNextActionPayload
}

public struct OFNextActionPayload: OFCodableSendable, OFNextActionPayloadProtocol {
    public let userOperation: JSONValue?
    public let userOperationHash: String?
    public let signableHash: String?
}

public struct OFTransactionIntentResponsePolicy: OFCodableSendable, OFTransactionIntentResponsePolicyProtocol {
    public let id: String
    public let object: String               // "policy"
    public let createdAt: Int
    public let name: String?
    public let deleted: Bool
    public let enabled: Bool
    public let chainId: Int
    public let paymaster: OFEntityIdResponse?
    public let strategy: OFPolicyStrategy
    public let transactionIntents: [OFEntityIdResponse]
    public let policyRules: [OFEntityIdResponse]
}

public struct OFPolicyStrategy: OFCodableSendable, OFPolicyStrategyProtocol {
    public let sponsorSchema: String        // "fixed_rate"
    public let depositor: String?
    public let tokenContract: String
    public let tokenContractAmount: String
}

public struct OFTransactionIntentResponseAccount: OFCodableSendable, OFTransactionIntentResponseAccountProtocol {
    public let id: String
    public let object: String               // "developerAccount"
    public let createdAt: Int
    public let address: String
    public let ownerAddress: String
    public let deployed: Bool
    public let custodial: Bool
    public let embeddedSigner: Bool
    public let chainId: Int
    public let accountType: String
    public let pendingOwnerAddress: String?
    public let transactionIntents: [OFEntityIdResponse]?
    public let player: OFEntityIdResponse
    public let name: String?
}

public struct OFTransactionIntentResponsePlayer: OFCodableSendable, OFTransactionIntentResponsePlayerProtocol {
    public let id: String
    public let object: String               // "player"
    public let createdAt: Int
    public let name: String
    public let description: String?
    public let metadata: [String: JSONValue]?
    public let transactionIntents: [OFEntityIdResponse]?
    public let accounts: [OFEntityIdResponse]?
}

// MARK: - JSONValue helper for dynamic shapes (TS `any` / `{ [k: string]: ... }`)

public enum JSONValue: OFCodableSendable {
    case string(String)
    case int(Int)
    case double(Double)
    case bool(Bool)
    case array([JSONValue])
    case object([String: JSONValue])
    case null

    public init(from decoder: Decoder) throws {
        let c = try decoder.singleValueContainer()
        if c.decodeNil() { self = .null; return }
        if let b = try? c.decode(Bool.self) { self = .bool(b); return }
        if let i = try? c.decode(Int.self) { self = .int(i); return }
        if let d = try? c.decode(Double.self) { self = .double(d); return }
        if let s = try? c.decode(String.self) { self = .string(s); return }
        if let arr = try? c.decode([JSONValue].self) { self = .array(arr); return }
        if let obj = try? c.decode([String: JSONValue].self) { self = .object(obj); return }
        throw DecodingError.typeMismatch(JSONValue.self, .init(codingPath: decoder.codingPath, debugDescription: "Unsupported JSON value"))
    }

    public func encode(to encoder: Encoder) throws {
        var c = encoder.singleValueContainer()
        switch self {
        case .string(let s): try c.encode(s)
        case .int(let i): try c.encode(i)
        case .double(let d): try c.encode(d)
        case .bool(let b): try c.encode(b)
        case .array(let a): try c.encode(a)
        case .object(let o): try c.encode(o)
        case .null: try c.encodeNil()
        }
    }
}
