//
//  OFGetResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFGetResponseProtocol {
    var value: String? { get }
}

public struct OFGetResponse: OFGetResponseProtocol, OFCodableSendable {
    public let value: String?
}
