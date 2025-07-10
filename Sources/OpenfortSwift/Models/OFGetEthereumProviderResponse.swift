//
//  OFGetEthereumProviderResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetEthereumProviderResponseProtocol {
    var provider: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFGetEthereumProviderResponse: Decodable, OFGetEthereumProviderResponseProtocol {
    public let provider: String?
    public let error: String?
    public let success: Bool?
}
