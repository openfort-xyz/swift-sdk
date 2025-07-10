//
//  OFGetResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetResponseProtocol {
    var value: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFGetResponse: Decodable, OFGetResponseProtocol {
    public let value: String?
    public let error: String?
    public let success: Bool?
}
