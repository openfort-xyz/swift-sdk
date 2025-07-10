//
//  OFResetPasswordResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFResetPasswordResponseProtocol {
    var result: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFResetPasswordResponse: Decodable, OFResetPasswordResponseProtocol {
    public let result: String?
    public let error: String?
    public let success: Bool?
}
