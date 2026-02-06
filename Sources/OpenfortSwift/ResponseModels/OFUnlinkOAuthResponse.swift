//
//  OFUnlinkOAuthResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-10.
//

/// Response from `unlinkOAuth` in the JS SDK.
public struct OFUnlinkOAuthResponse: OFCodableSendable {
    public let status: Bool?
}
