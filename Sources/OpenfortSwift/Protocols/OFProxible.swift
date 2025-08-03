//
//  OFLinkable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-01.
//

import Foundation

public protocol OFProxible: OFOpenfortRootable {}

public extension OFProxible {
    
    func sendSignatureTransactionIntentRequest(
        params: OFSendSignatureTransactionIntentRequestParams,
        completion: @escaping (Result<OFSendSignatureTransactionIntentRequestResponse, Error>) -> Void
    ) {
        let method = OFMethods.sendSignatureTransactionIntentRequest
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.sendSignatureTransactionIntentRequestSync(\(jsonString));"
        evaluateAndObserve(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.sendSignatureTransactionIntentRequest,
            completion: completion
        )
        
    }
    
    func sendSignatureSessionRequest(
        params: OFSendSignatureSessionRequestParams,
        completion: @escaping (Result<OFSendSignatureSessionRequestResponse, Error>) -> Void
    ) {
        let method = OFMethods.sendSignatureSessionRequest
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.sendSignatureSessionRequestSync(\(jsonString));"
        evaluateAndObserve(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.sendSignatureSessionRequest,
            completion: completion
        )
    }
}
