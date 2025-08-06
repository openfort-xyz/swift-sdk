//
//  OFRequestResetPasswordResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

public protocol OFRequestResetPasswordResponseProtocol {
    var message: String? { get }
}

public struct OFRequestResetPasswordResponse: Decodable, OFRequestResetPasswordResponseProtocol {
    public let message: String?
}
