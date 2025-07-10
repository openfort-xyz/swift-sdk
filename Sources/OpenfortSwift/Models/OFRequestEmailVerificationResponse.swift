//
//  OFRequestEmailVerificationResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFRequestEmailVerificationResponseProtocol {
    var message: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFRequestEmailVerificationResponse: Decodable, OFRequestEmailVerificationResponseProtocol {
    public let message: String?
    public let error: String?
    public let success: Bool?
}
