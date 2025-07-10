//
//  OFVerifyEmailResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFVerifyEmailResponseProtocol {
    var verified: Bool? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFVerifyEmailResponse: Decodable, OFVerifyEmailResponseProtocol {
    public let verified: Bool?
    public let error: String?
    public let success: Bool?
}
