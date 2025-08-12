//
//  OFSignUpWithEmailPasswordParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFSignUpWithEmailPasswordOptionsParams: OFCodableSendable {
    public let data: [String: String]?
    
    public init(data: [String: String]? = nil) {
        self.data = data
    }
}

public struct OFSignUpWithEmailPasswordParams: OFCodableSendable {
    public let email: String
    public let password: String
    public let options: OFSignUpWithEmailPasswordOptionsParams?
    public let ecosystemGame: String?

    public init(email: String, password: String, options: OFSignUpWithEmailPasswordOptionsParams? = nil, ecosystemGame: String? = nil) {
        self.email = email
        self.password = password
        self.options = options
        self.ecosystemGame = ecosystemGame
    }
}
