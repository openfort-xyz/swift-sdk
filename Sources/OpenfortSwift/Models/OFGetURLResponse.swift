//
//  OFGetURLResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetURLResponseProtocol {
    var url: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFGetURLResponse: Decodable, OFGetURLResponseProtocol {
    public let url: String?
    public let error: String?
    public let success: Bool?
}
