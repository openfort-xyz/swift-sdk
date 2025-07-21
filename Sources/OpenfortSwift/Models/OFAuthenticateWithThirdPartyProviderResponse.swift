//
//  OFAuthenticateWithThirdPartyProviderResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFAuthenticateWithThirdPartyProviderResponseProtocol {
    var provider: String? { get }
    var authenticated: Bool? { get }
}

public struct OFAuthenticateWithThirdPartyProviderResponse: Decodable, OFAuthenticateWithThirdPartyProviderResponseProtocol {
    public let provider: String?
    public let authenticated: Bool?
}
