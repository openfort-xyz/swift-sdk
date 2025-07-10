//
//  OFGetEmbeddedStateResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetEmbeddedStateResponseProtocol {
    var state: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFGetEmbeddedStateResponse: Decodable, OFGetEmbeddedStateResponseProtocol {
    public let state: String?
    public let error: String?
    public let success: Bool?
}
