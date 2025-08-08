//
//  OFGetURLResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetURLResponseProtocol {
    var url: String? { get }
}

public struct OFGetURLResponse: OFGetURLResponseProtocol, OFCodableSendable {
    public let url: String?
}
