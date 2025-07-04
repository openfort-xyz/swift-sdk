//
//  Untitled.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-04.
//

public struct OFAuthorizationResponse: Decodable {
    public let token: String
    public let userId: String
    public let email: String
}
