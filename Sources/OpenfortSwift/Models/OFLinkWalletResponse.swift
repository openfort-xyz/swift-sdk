//
//  OFLinkWalletResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFLinkWalletResponseProtocol {
    var walletAddress: String? { get }
    var linked: Bool? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFLinkWalletResponse: Decodable, OFLinkWalletResponseProtocol {
    public let walletAddress: String?
    public let linked: Bool?
    public let error: String?
    public let success: Bool?
}
