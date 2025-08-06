//
//  OFGetEthereumProviderResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetEthereumProviderResponseProtocol {
    var provider: String? { get }
}

public struct OFGetEthereumProviderResponse: Decodable, OFGetEthereumProviderResponseProtocol {
    public let provider: String?
}
