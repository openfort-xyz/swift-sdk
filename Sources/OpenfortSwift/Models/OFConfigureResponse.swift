//
//  OFConfigureResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFConfigureOwnerResponseProtocol {
    var id: String? { get }
}

public protocol OFConfigureResponseProtocol {
    var ownerAddress: String? { get }
    var chainId: Int? { get }
    var owner: OFOwner? { get }
    var implementationType: String? { get }
    var chainType: String? { get }
    var address: String? { get }
}

public struct OFConfigureResponse: Decodable, OFConfigureResponseProtocol {
    public let ownerAddress: String?
    public let chainId: Int?
    public let owner: OFOwner?
    public let implementationType: String?
    public let chainType: String?
    public let address: String?
}

public struct OFOwner: Decodable, OFConfigureOwnerResponseProtocol {
    public let id: String?
}
