//
//  OFLinkThirdPartyProviderResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//


public protocol OFLinkThirdPartyProviderResponseProtocol {
    var player: AuthPlayerResponsePlayer? { get }
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var linkedAccounts: [OFLinkedAccountResponse] { get }
}

public protocol AuthPlayerResponsePlayerProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var name: String { get }
    var description: String? { get }
    var metadata: [String: JSONValue]? { get }
    var transactionIntents: [TransactionIntentResponse]? { get }
    var accounts: [PlayerResponseAccountsInner]? { get }
}

public protocol PlayerResponseAccountsInnerProtocol {
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
    var transactionIntents: [EntityIdResponse]? { get }
    var player: EntityIdResponse { get }
}

public protocol EntityIdResponseProtocol { var id: String { get } }

public protocol TransactionIntentResponseProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var updatedAt: Int { get }
    var abstractionType: TransactionAbstractionType { get }
    var details: TransactionDetails? { get }
    var chainId: Int { get }
    var response: ResponseResponse? { get }
    var interactions: [Interaction]? { get }
    var nextAction: NextActionResponse? { get }
    var policy: PolicyOrEntity? { get }
    var player: PlayerOrEntity? { get }
    var account: AccountOrEntity? { get }
}

public protocol ResponseResponseProtocol {
    var createdAt: Int { get }
    var blockNumber: Int? { get }
    var transactionHash: String? { get }
    var l1GasUsed: String? { get }
    var gasUsed: String? { get }
    var gasFee: String? { get }
    var l1GasFee: String? { get }
    var status: Int? { get }
    var logs: [Log]? { get }
    var to: String? { get }
    var error: JSONValue? { get }
}

public protocol LogProtocol {
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

public protocol InteractionProtocol {
    var to: String? { get }
    var value: String? { get }
    var contract: String? { get }
    var functionName: String? { get }
    var functionArgs: [JSONValue]? { get }
    var dataSuffix: String? { get }
    var data: String? { get }
}

public protocol NextActionResponseProtocol {
    var type: String { get }
    var payload: NextActionPayload { get }
}

public protocol NextActionPayloadProtocol {
    var userOperation: JSONValue? { get }
    var userOperationHash: String? { get }
    var signableHash: String? { get }
}

public protocol TransactionIntentResponsePolicyProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var name: String? { get }
    var deleted: Bool { get }
    var enabled: Bool { get }
    var chainId: Int { get }
    var paymaster: EntityIdResponse? { get }
    var strategy: PolicyStrategy { get }
    var transactionIntents: [EntityIdResponse] { get }
    var policyRules: [EntityIdResponse] { get }
}

public protocol PolicyStrategyProtocol {
    var sponsorSchema: String { get }
    var depositor: String? { get }
    var tokenContract: String { get }
    var tokenContractAmount: String { get }
}

public protocol TransactionIntentResponseAccountProtocol {
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
    var transactionIntents: [EntityIdResponse]? { get }
    var player: EntityIdResponse { get }
    var name: String? { get }
}

public protocol TransactionIntentResponsePlayerProtocol {
    var id: String { get }
    var object: String { get }
    var createdAt: Int { get }
    var name: String { get }
    var description: String? { get }
    var metadata: [String: JSONValue]? { get }
    var transactionIntents: [EntityIdResponse]? { get }
    var accounts: [EntityIdResponse]? { get }
}

import Foundation

// MARK: - Root

public struct OFAuthPlayerResponse: Codable, Sendable, OFLinkThirdPartyProviderResponseProtocol {
    public let player: AuthPlayerResponsePlayer?
    public let id: String
    public let object: String           // "player"
    public let createdAt: Int
    public let linkedAccounts: [OFLinkedAccountResponse]
}

// MARK: - Player (dependent)

public struct AuthPlayerResponsePlayer: Codable, Sendable, AuthPlayerResponsePlayerProtocol {
    public let id: String
    public let object: String           // "player"
    public let createdAt: Int
    public let name: String
    public let description: String?
    public let metadata: [String: JSONValue]?
    public let transactionIntents: [TransactionIntentResponse]?
    public let accounts: [PlayerResponseAccountsInner]?
}

// MARK: - Linked Accounts (dependent)

public enum AuthProvider: String, Codable, Sendable {
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

public struct PlayerResponseAccountsInner: Codable, Sendable, PlayerResponseAccountsInnerProtocol {
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
    public let transactionIntents: [EntityIdResponse]?
    public let player: EntityIdResponse
}

public struct EntityIdResponse: Codable, Sendable, EntityIdResponseProtocol {
    public let id: String
}

// MARK: - Transaction Intent (dependent)

public enum TransactionAbstractionType: String, Codable, Sendable {
    case accountAbstractionV6
    case zkSync
    case standard
}

public struct TransactionIntentResponse: Codable, Sendable, TransactionIntentResponseProtocol {
    public let id: String
    public let object: String           // "transactionIntent"
    public let createdAt: Int
    public let updatedAt: Int
    public let abstractionType: TransactionAbstractionType
    public let details: TransactionDetails?
    public let chainId: Int
    public let response: ResponseResponse?
    public let interactions: [Interaction]?
    public let nextAction: NextActionResponse?
    public let policy: PolicyOrEntity?
    public let player: PlayerOrEntity?
    public let account: AccountOrEntity?
}

// Polymorphic helpers for union fields in TS

public enum PolicyOrEntity: Codable, Sendable {
    case policy(TransactionIntentResponsePolicy)
    case entity(EntityIdResponse)

    public init(from decoder: Decoder) throws {
        let c = try decoder.singleValueContainer()
        if let policy = try? c.decode(TransactionIntentResponsePolicy.self) {
            self = .policy(policy)
        } else if let entity = try? c.decode(EntityIdResponse.self) {
            self = .entity(entity)
        } else {
            throw DecodingError.typeMismatch(PolicyOrEntity.self, .init(codingPath: decoder.codingPath, debugDescription: "Neither policy nor entity"))
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

public enum PlayerOrEntity: Codable, Sendable {
    case player(TransactionIntentResponsePlayer)
    case entity(EntityIdResponse)

    public init(from decoder: Decoder) throws {
        let c = try decoder.singleValueContainer()
        if let player = try? c.decode(TransactionIntentResponsePlayer.self) {
            self = .player(player)
        } else if let entity = try? c.decode(EntityIdResponse.self) {
            self = .entity(entity)
        } else {
            throw DecodingError.typeMismatch(PlayerOrEntity.self, .init(codingPath: decoder.codingPath, debugDescription: "Neither player nor entity"))
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

public enum AccountOrEntity: Codable, Sendable {
    case account(TransactionIntentResponseAccount)
    case entity(EntityIdResponse)

    public init(from decoder: Decoder) throws {
        let c = try decoder.singleValueContainer()
        if let account = try? c.decode(TransactionIntentResponseAccount.self) {
            self = .account(account)
        } else if let entity = try? c.decode(EntityIdResponse.self) {
            self = .entity(entity)
        } else {
            throw DecodingError.typeMismatch(AccountOrEntity.self, .init(codingPath: decoder.codingPath, debugDescription: "Neither account nor entity"))
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

public enum TransactionDetails: Codable, Sendable {
    case accountAbstractionV6(AccountAbstractionV6Details)
    case zkSync(ZKSyncDetails)
    case standard(StandardDetails)

    public init(from decoder: Decoder) throws {
        let c = try decoder.singleValueContainer()
        if let v6 = try? c.decode(AccountAbstractionV6Details.self) {
            self = .accountAbstractionV6(v6)
        } else if let zk = try? c.decode(ZKSyncDetails.self) {
            self = .zkSync(zk)
        } else if let std = try? c.decode(StandardDetails.self) {
            self = .standard(std)
        } else {
            throw DecodingError.typeMismatch(TransactionDetails.self, .init(codingPath: decoder.codingPath, debugDescription: "Unknown details variant"))
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

public struct AccountAbstractionV6Details: Codable, Sendable {
    public let userOperation: UserOperationV6
    public let userOperationHash: String
}

public struct UserOperationV6: Codable, Sendable {
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

public struct ZKSyncDetails: Codable, Sendable {
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

public struct StandardDetails: Codable, Sendable {
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

public struct ResponseResponse: Codable, Sendable, ResponseResponseProtocol {
    public let createdAt: Int
    public let blockNumber: Int?
    public let transactionHash: String?
    public let l1GasUsed: String?
    public let gasUsed: String?
    public let gasFee: String?
    public let l1GasFee: String?
    public let status: Int?
    public let logs: [Log]?
    public let to: String?
    public let error: JSONValue?
}

public struct Log: Codable, Sendable, LogProtocol {
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

public struct Interaction: Codable, Sendable, InteractionProtocol {
    public let to: String?
    public let value: String?
    public let contract: String?
    public let functionName: String?
    public let functionArgs: [JSONValue]?
    public let dataSuffix: String?
    public let data: String?
}

public struct NextActionResponse: Codable, Sendable, NextActionResponseProtocol {
    public let type: String                  // "sign_with_wallet"
    public let payload: NextActionPayload
}

public struct NextActionPayload: Codable, Sendable, NextActionPayloadProtocol {
    public let userOperation: JSONValue?
    public let userOperationHash: String?
    public let signableHash: String?
}

public struct TransactionIntentResponsePolicy: Codable, Sendable, TransactionIntentResponsePolicyProtocol {
    public let id: String
    public let object: String               // "policy"
    public let createdAt: Int
    public let name: String?
    public let deleted: Bool
    public let enabled: Bool
    public let chainId: Int
    public let paymaster: EntityIdResponse?
    public let strategy: PolicyStrategy
    public let transactionIntents: [EntityIdResponse]
    public let policyRules: [EntityIdResponse]
}

public struct PolicyStrategy: Codable, Sendable, PolicyStrategyProtocol {
    public let sponsorSchema: String        // "fixed_rate"
    public let depositor: String?
    public let tokenContract: String
    public let tokenContractAmount: String
}

public struct TransactionIntentResponseAccount: Codable, Sendable, TransactionIntentResponseAccountProtocol {
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
    public let transactionIntents: [EntityIdResponse]?
    public let player: EntityIdResponse
    public let name: String?
}

public struct TransactionIntentResponsePlayer: Codable, Sendable, TransactionIntentResponsePlayerProtocol {
    public let id: String
    public let object: String               // "player"
    public let createdAt: Int
    public let name: String
    public let description: String?
    public let metadata: [String: JSONValue]?
    public let transactionIntents: [EntityIdResponse]?
    public let accounts: [EntityIdResponse]?
}

// MARK: - JSONValue helper for dynamic shapes (TS `any` / `{ [k: string]: ... }`)

public enum JSONValue: Codable, Sendable {
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
