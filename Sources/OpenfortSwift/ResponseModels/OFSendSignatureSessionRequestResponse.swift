//
//  OFSendSignatureSessionRequestResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFSendSignatureSessionRequestResponseProtocol {
    var id: String? { get }
    var status: String? { get }
    var permissions: [String]? { get }
}

public struct OFSendSignatureSessionRequestResponse: Decodable, OFSendSignatureSessionRequestResponseProtocol {
    public let id: String?
    public let status: String?
    public let permissions: [String]?
}
