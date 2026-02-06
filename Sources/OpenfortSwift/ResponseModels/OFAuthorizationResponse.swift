//
//  OFAuthorizationResponse.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-04.
//

public protocol OFAuthResponseProtocol {
    var token: String? { get }
    var user: OFUser? { get }
    var session: OFSession? { get }
    var action: String? { get }
}

/// Response from auth methods (login, signup, etc.) in the JS SDK.
/// Maps to the JS `AuthResponse` type: `{ token, user, session }`.
/// When email verification is required, `action` is set (e.g. `"verify_email"`).
public struct OFAuthResponse: OFAuthResponseProtocol, OFCodableSendable {
    public let token: String?
    public let user: OFUser?
    public let session: OFSession?
    public let action: String?
}

/// Auth session info returned alongside auth responses.
/// Maps to the JS `Session` type.
public struct OFSession: OFCodableSendable {
    public let id: String?
    public let token: String?
    public let userId: String?
    public let expiresAt: String?
    public let createdAt: String?
    public let updatedAt: String?
}
