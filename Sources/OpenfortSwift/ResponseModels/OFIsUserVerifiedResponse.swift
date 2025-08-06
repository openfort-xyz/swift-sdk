//
//  OFIsUserVerifiedResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-09.
//

public protocol OFIsUserVerifiedResponseProtocol: Decodable {
    var verified: Bool { get }
}

public struct OFIsUserVerifiedResponse: OFIsUserVerifiedResponseProtocol {
    public let verified: Bool
}
