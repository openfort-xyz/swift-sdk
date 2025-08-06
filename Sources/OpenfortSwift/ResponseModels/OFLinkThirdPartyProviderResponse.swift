//
//  OFLinkThirdPartyProviderResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFLinkThirdPartyProviderResponseProtocol {
    var provider: String? { get }
    var linked: Bool? { get }
}

public struct OFLinkThirdPartyProviderResponse: Decodable, OFLinkThirdPartyProviderResponseProtocol {
    public let provider: String?
    public let linked: Bool?
}
