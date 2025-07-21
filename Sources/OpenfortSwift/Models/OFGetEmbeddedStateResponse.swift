//
//  OFGetEmbeddedStateResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetEmbeddedStateResponseProtocol {
    var state: String? { get }
}

public struct OFGetEmbeddedStateResponse: Decodable, OFGetEmbeddedStateResponseProtocol {
    public let state: String?
}
