//
//  OFExportPrivateKeyResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFExportPrivateKeyResponseProtocol {
    var privateKey: String? { get }
}

public struct OFExportPrivateKeyResponse: OFExportPrivateKeyResponseProtocol, OFCodableSendable {
    public let privateKey: String?
}
