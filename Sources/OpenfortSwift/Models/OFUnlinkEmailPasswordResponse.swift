//
//  Untitled.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-07.
//

public protocol OFUnlinkEmailPasswordResponseable: Decodable {
    var success: Bool? { get }
    var message: String? { get }
}

public struct OFUnlinkEmailPasswordResponse: OFUnlinkEmailPasswordResponseable {
    public let success: Bool?
    public let message: String?
}
