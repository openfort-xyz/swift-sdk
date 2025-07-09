//
//  OFSessionResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-09.
//

public protocol OFSessionResponseProtocol {
    var session: OFSession? { get }
}

public struct OFSessionResponse: Decodable, OFSessionResponseProtocol {
    public let session: OFSession?
}

public struct OFSession: Decodable {
    public let id: String?
    public let userId: String?
    public let createdAt: String?
}
