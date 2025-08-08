//
//  OFAuthenticateWithSIWEResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFAuthenticateWithSIWEResponseProtocol {
    var address: String? { get }
    var authenticated: Bool? { get }
}

public struct OFAuthenticateWithSIWEResponse: OFAuthenticateWithSIWEResponseProtocol, OFCodableSendable {
    public let address: String?
    public let authenticated: Bool?
}
