//
//  OFSendSignatureSessionRequestParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFSendSignatureSessionRequestParams: Codable {
    public let sessionId: String
    public let signature: String
    public let optimistic: Bool?

    public init(sessionId: String, signature: String, optimistic: Bool? = nil) {
        self.sessionId = sessionId
        self.signature = signature
        self.optimistic = optimistic
    }
}
