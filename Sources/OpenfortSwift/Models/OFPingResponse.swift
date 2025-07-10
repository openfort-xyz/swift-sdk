//
//  OFPingResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFPingResponseProtocol {
    var pong: Bool? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFPingResponse: Decodable, OFPingResponseProtocol {
    public let pong: Bool?
    public let error: String?
    public let success: Bool?
}
