//
//  OFVerifyEmailResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFVerifyEmailResponseProtocol {
    var verified: Bool? { get }
}

public struct OFVerifyEmailResponse: Decodable, OFVerifyEmailResponseProtocol {
    public let verified: Bool?
}
