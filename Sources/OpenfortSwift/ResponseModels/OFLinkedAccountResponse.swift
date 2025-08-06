//
//  OFLinkedAccountResponse.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-08-06.
//

import Foundation

// Define a protocol that lists the required properties
public protocol LinkedAccountResponseProtocol {
    var provider: String { get }
    var email: String? { get }
    var externalUserId: String? { get }
    var connectorType: String? { get }
    var walletClientType: String? { get }
    var disabled: Bool { get }
    var verified: Bool? { get }
    var updatedAt: Int? { get }
    var address: String? { get }
    var metadata: [String: AnyCodable]? { get }
}

// Your model conforms to Codable and the protocol
public struct OFLinkedAccountResponse: Decodable, LinkedAccountResponseProtocol {
    public let provider: String
    public let email: String?
    public let externalUserId: String?
    public let connectorType: String?
    public let walletClientType: String?
    public let disabled: Bool
    public let verified: Bool?
    public let updatedAt: Int?
    public let address: String?
    public let metadata: [String: AnyCodable]?
}
