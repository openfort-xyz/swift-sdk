//
//  OFResetPasswordResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFResetPasswordResponseProtocol {
    var result: String? { get }
}

public struct OFResetPasswordResponse: Decodable, OFResetPasswordResponseProtocol {
    public let result: String?
}
