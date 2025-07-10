//
//  OFSendSignatureSessionRequestResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFSendSignatureSessionRequestResponseProtocol {
    var id: String? { get }
    var status: String? { get }
    var permissions: [String]? { get } // Replace [String] with [OFSessionPermission] if you have a specific type
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFSendSignatureSessionRequestResponse: Decodable, OFSendSignatureSessionRequestResponseProtocol {
    public let id: String?
    public let status: String?
    public let permissions: [String]? // or [OFSessionPermission] if defined
    public let error: String?
    public let success: Bool?
}
