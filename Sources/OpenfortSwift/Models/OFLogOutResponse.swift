//
//  OFLogOutResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-09.
//

public protocol OFLogOutResponseProtocol {
    var success: Bool? { get }
}

public struct OFLogOutResponse: OFLogOutResponseProtocol, Decodable {
    public let success: Bool?
}
