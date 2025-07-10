//
//  OFLoginWithIdTokenResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFLoginWithIdTokenResponseProtocol {
    var idToken: String? { get }
    var userId: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFLoginWithIdTokenResponse: Decodable, OFLoginWithIdTokenResponseProtocol {
    public let idToken: String?
    public let userId: String?
    public let error: String?
    public let success: Bool?
}
