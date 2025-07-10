//
//  OFGetIframeManagerResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetIframeManagerResponseProtocol {
    var iframeId: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFGetIframeManagerResponse: Decodable, OFGetIframeManagerResponseProtocol {
    public let iframeId: String?
    public let error: String?
    public let success: Bool?
}
