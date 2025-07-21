//
//  OFSignMessageResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFSignMessageResponseProtocol {
    var signature: String? { get }
}

public struct OFSignMessageResponse: Decodable, OFSignMessageResponseProtocol {
    public let signature: String?
}
