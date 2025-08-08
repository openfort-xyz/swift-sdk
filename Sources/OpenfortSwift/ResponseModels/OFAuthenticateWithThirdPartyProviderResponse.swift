//
//  OFAuthenticateWithThirdPartyProviderResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFAuthenticateWithThirdPartyProviderResponseProtocol {
    var id: String { get }
    var object: String { get }
    var linkedAccounts: [LinkedAccount] { get }
    var createdAt: Int { get }
}

public protocol OFLinkedAccountProtocol {
    var email: String { get }
    var externalUserId: String { get }
    var provider: String { get }
    var disabled: Bool { get }
}

public struct OFAuthenticateWithThirdPartyProviderResponse: OFAuthenticateWithThirdPartyProviderResponseProtocol, OFCodableSendable {
    
    public let id: String
    public let object: String
    public let linkedAccounts: [LinkedAccount]
    public let createdAt: Int
}

public struct LinkedAccount: OFLinkedAccountProtocol, OFCodableSendable {
    public let email: String
    public let externalUserId: String
    public let provider: String
    public let disabled: Bool
}
