//
//  OFExportPrivateKeyResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFExportPrivateKeyResponseProtocol {
    var privateKey: String? { get }
}

public struct OFExportPrivateKeyResponse: Decodable, OFExportPrivateKeyResponseProtocol {
    public let privateKey: String?
}
