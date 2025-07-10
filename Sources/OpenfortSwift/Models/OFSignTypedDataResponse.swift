//
//  Untitled.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFSignTypedDataResponseProtocol {
    var signature: String? { get }
    var signedData: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFSignTypedDataResponse: Decodable, OFSignTypedDataResponseProtocol {
    public let signature: String?
    public let signedData: String?
    public let error: String?
    public let success: Bool?
}
