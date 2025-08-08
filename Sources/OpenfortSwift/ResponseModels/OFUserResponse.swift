//
//  OFUserResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-09.
//

public protocol OFUserResponseProtocol {
    var user: OFPlayerInfo? { get }
}

public struct OFUserResponse: OFUserResponseProtocol, OFCodableSendable {
    public let user: OFPlayerInfo?
}
