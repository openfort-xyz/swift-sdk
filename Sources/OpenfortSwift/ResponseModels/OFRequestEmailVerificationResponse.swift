//
//  OFRequestEmailVerificationResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFRequestEmailVerificationResponseProtocol {
    var message: String? { get }
}

public struct OFRequestEmailVerificationResponse: OFRequestEmailVerificationResponseProtocol, OFCodableSendable {
    public let message: String?
}
