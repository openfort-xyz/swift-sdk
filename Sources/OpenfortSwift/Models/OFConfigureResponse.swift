//
//  OFConfigureResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFConfigureResponseProtocol {
    var configured: Bool? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFConfigureResponse: Decodable, OFConfigureResponseProtocol {
    public let configured: Bool?
    public let error: String?
    public let success: Bool?
}
