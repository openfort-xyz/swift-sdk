//
//  OFGetIframeManagerResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetIframeManagerResponseProtocol {
    var iframeId: String? { get }
}

public struct OFGetIframeManagerResponse: Decodable, OFGetIframeManagerResponseProtocol {
    public let iframeId: String?
}
