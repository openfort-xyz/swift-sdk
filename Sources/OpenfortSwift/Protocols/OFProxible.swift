//
//  OFLinkable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-01.
//

public protocol OFProxible: OFOpenfortRootable {}

public extension OFProxible {

    func sendSignatureTransactionIntentRequest(
        id: String,
        signature: String,
        optimistic: Bool,
        completion: @escaping (Result<OFSendSignatureTransactionIntentRequestResponse, Error>) -> Void
    ) {
        let method = OFMethods.sendSignatureTransactionIntentRequest
        let js = "window.sendSignatureTransactionIntentRequestSync({id: '\(id)', signature: '\(signature)', optimistic: \(optimistic)});"
        evaluateAndDecode(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.sendSignatureTransactionIntentRequest,
            completion: completion
        )
    }

    func sendSignatureSessionRequest(
        id: String,
        signature: String,
        optimistic: Bool,
        completion: @escaping (Result<OFSendSignatureSessionRequestResponse, Error>) -> Void
    ) {
        let method = OFMethods.sendSignatureSessionRequest
        let js = "window.sendSignatureSessionRequestSync({id: '\(id)', signature: '\(signature)', optimistic: \(optimistic)});"
        evaluateAndDecode(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.sendSignatureSessionRequest,
            completion: completion
        )
    }
}
