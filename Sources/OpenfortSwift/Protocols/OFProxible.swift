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
        do {
            let jsonData = try jsonEncoder.encode(params)
            guard let jsonString = String(data: jsonData, encoding: .utf8) else {
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
        } catch {
            completion(.failure(OFError.encodingFailed))
        }
    }

    func sendSignatureSessionRequest(
        params: OFSendSignatureSessionRequestParams,
        completion: @escaping (Result<OFSendSignatureSessionRequestResponse, Error>) -> Void
    ) {
        let method = OFMethods.sendSignatureSessionRequest
        do {
            let jsonData = try jsonEncoder.encode(params)
            guard let jsonString = String(data: jsonData, encoding: .utf8) else {
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
        } catch {
            completion(.failure(OFError.encodingFailed))
        }
    }
}
