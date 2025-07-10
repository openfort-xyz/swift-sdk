//
//  OFRequestResetPasswordResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFRequestResetPasswordResponseProtocol {
    var message: String? { get }
    var error: String? { get }
    var success: Bool? { get }
}

public struct OFRequestResetPasswordResponse: Decodable, OFRequestResetPasswordResponseProtocol {
    public let message: String?
    public let error: String?
    public let success: Bool?
}
