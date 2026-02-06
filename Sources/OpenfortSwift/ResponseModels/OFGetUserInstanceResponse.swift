//
//  OFGetUserInstanceResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

import Foundation

/// Maps to the JS `User` type returned by `userInstance.get()`.
public struct OFUser: OFCodableSendable {
    public let id: String
    public let email: String?
    public let name: String?
    public let image: String?
    public let emailVerified: Bool?
    public let isAnonymous: Bool?
    public let createdAt: FlexTimestamp?
    public let updatedAt: FlexTimestamp?
    public let phoneNumber: String?
    public let phoneNumberVerified: Bool?
    public let linkedAccounts: [OFUserAccount]?
}

/// A linked account entry as returned by the JS SDK's `User.linkedAccounts`.
/// Maps to the JS `UserAccount` type.
public struct OFUserAccount: OFCodableSendable {
    public let provider: String?
    public let email: String?
    public let externalUserId: String?
    public let connectorType: String?
    public let walletClientType: String?
    public let disabled: Bool?
    public let verified: Bool?
    public let updatedAt: FlexTimestamp?
    public let address: String?
}

/// A timestamp that can be decoded from either a number (Unix epoch) or an ISO-8601 string.
public enum FlexTimestamp: Codable, Sendable, CustomStringConvertible {
    case number(Int)
    case string(String)

    public init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let intVal = try? container.decode(Int.self) {
            self = .number(intVal)
        } else if let doubleVal = try? container.decode(Double.self) {
            self = .number(Int(doubleVal))
        } else if let strVal = try? container.decode(String.self) {
            self = .string(strVal)
        } else {
            throw DecodingError.typeMismatch(
                FlexTimestamp.self,
                .init(codingPath: decoder.codingPath, debugDescription: "Expected Int, Double, or String for timestamp")
            )
        }
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case .number(let val): try container.encode(val)
        case .string(let val): try container.encode(val)
        }
    }

    public var description: String {
        switch self {
        case .number(let val): return String(val)
        case .string(let val): return val
        }
    }
}
