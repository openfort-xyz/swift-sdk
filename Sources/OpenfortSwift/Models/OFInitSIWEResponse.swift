//
//  OFInitSIWEResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFInitSIWEResponseProtocol {
    var message: String? { get }
    var nonce: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFInitSIWEResponse: Decodable, OFInitSIWEResponseProtocol {
    public let message: String?
    public let nonce: String?
    public let error: String?
    public let success: Bool?
}
