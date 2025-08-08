//
//  OFSimpleResultResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-09.
//

public protocol OFSimpleResultResponseProtocol {
    var success: Bool? { get }
    var message: String? { get }
}

public struct OFSimpleResultResponse: OFSimpleResultResponseProtocol, OFCodableSendable {
    public let success: Bool?
    public let message: String?
}

public typealias OFSendPasswordResetEmailResponse = OFSimpleResultResponse
public typealias OFSendVerificationEmailResponse = OFSimpleResultResponse
public typealias OFUpdatePasswordResponse = OFSimpleResultResponse
public typealias OFReauthenticateWithPasswordResponse = OFSimpleResultResponse
public typealias OFGetEmbeddedStateResponse = Int
public typealias OFGetAccessTokenResponse = String
public typealias OFSignMessageResponse = String
