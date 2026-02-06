//
//  OFStoreCredentialsParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFStoreCredentialsParams: OFCodableSendable {
    public let token: String
    public let userId: String

    public init(token: String, userId: String) {
        self.token = token
        self.userId = userId
    }
}
