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
        params: OFSendSignatureTransactionIntentRequestParams
    ) async throws -> OFSendSignatureTransactionIntentRequestResponse {
        let method = OFMethods.sendSignatureTransactionIntentRequest
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.sendSignatureTransactionIntentRequestSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.sendSignatureTransactionIntentRequest
        )
    }
    
    func sendSignatureTransactionIntentRequest(
        params: OFSendSignatureTransactionIntentRequestParams,
        completion: @escaping (Result<OFSendSignatureTransactionIntentRequestResponse, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await sendSignatureTransactionIntentRequest(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }
    
    func sendSignatureSessionRequest(
        params: OFSendSignatureSessionRequestParams
    ) async throws -> OFSendSignatureSessionRequestResponse {
        let method = OFMethods.sendSignatureSessionRequest
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.sendSignatureSessionRequestSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.sendSignatureSessionRequest
        )
    }
    
    func sendSignatureSessionRequest(
        params: OFSendSignatureSessionRequestParams,
        completion: @escaping (Result<OFSendSignatureSessionRequestResponse, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await sendSignatureSessionRequest(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }
}
