//
//  OFLoginWithIdTokenResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFLoginWithIdTokenResponseProtocol {
    var idToken: String? { get }
    var userId: String? { get }
}

public struct OFLoginWithIdTokenResponse: Decodable, OFLoginWithIdTokenResponseProtocol {
    public let idToken: String?
    public let userId: String?
}
