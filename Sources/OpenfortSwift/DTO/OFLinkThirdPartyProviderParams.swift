//
//  OFLinkThirdPartyProviderParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFLinkThirdPartyProviderParams: OFCodableSendable {
    public let provider: String
    public let token: String
    public let tokenType: String

    public init(provider: String, token: String, tokenType: String) {
        self.provider = provider
        self.token = token
        self.tokenType = tokenType
    }
}
