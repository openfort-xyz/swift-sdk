//
//  OFAuthenticateWithSIWEResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFAuthenticateWithSIWEResponseProtocol {
    var address: String? { get }
    var authenticated: Bool? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFAuthenticateWithSIWEResponse: Decodable, OFAuthenticateWithSIWEResponseProtocol {
    public let address: String?
    public let authenticated: Bool?
    public let error: String?
    public let success: Bool?
}
