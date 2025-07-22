//
//  OFLinkable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-01.
//

public protocol OFProxible: OFOpenfortRootable {}

public extension OFProxible {

    func sendSignatureTransactionIntentRequest(
        transactionIntentId: String,
        signableHash: String? = nil,
        signature: String? = nil,
        optimistic: Bool? = nil,
        completion: @escaping (Result<OFSendSignatureTransactionIntentRequestResponse, Error>) -> Void
    ) {
        let method = OFMethods.sendSignatureTransactionIntentRequest
        var js = "window.sendSignatureTransactionIntentRequestSync({transactionIntentId: '\(transactionIntentId)'"
        if let signableHash = signableHash {
            js += ", signableHash: '\(signableHash)'"
        }
        if let signature = signature {
            js += ", signature: '\(signature)'"
        }
        if let optimistic = optimistic {
            js += ", optimistic: \(optimistic)"
        }
        js += "});"
        evaluateAndObserve(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.sendSignatureTransactionIntentRequest,
            completion: completion
        )
    }

    func sendSignatureSessionRequest(
        sessionId: String,
        signature: String,
        optimistic: Bool? = nil,
        completion: @escaping (Result<OFSendSignatureSessionRequestResponse, Error>) -> Void
    ) {
        let method = OFMethods.sendSignatureSessionRequest
        var js = "window.sendSignatureSessionRequestSync({sessionId: '\(sessionId)', signature: '\(signature)'"
        if let optimistic = optimistic {
            js += ", optimistic: \(optimistic)"
        }
        js += "});"
        evaluateAndObserve(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.sendSignatureSessionRequest,
            completion: completion
        )
    }
}
