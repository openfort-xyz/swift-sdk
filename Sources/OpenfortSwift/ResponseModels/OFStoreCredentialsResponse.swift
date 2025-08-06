//
//  OFStoreCredentialsResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFStoreCredentialsResponseProtocol {
    var stored: Bool? { get }
}

public struct OFStoreCredentialsResponse: Decodable, OFStoreCredentialsResponseProtocol {
    public let stored: Bool?
}
