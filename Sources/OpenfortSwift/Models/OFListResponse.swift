//
//  OFListResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFListResponseProtocol {
    var items: [String]? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFListResponse: Decodable, OFListResponseProtocol {
    public let items: [String]?
    public let error: String?
    public let success: Bool?
}
