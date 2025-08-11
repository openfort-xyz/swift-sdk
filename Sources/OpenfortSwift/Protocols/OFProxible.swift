//
//  OFLinkable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-01.
//

import Foundation

/// `OFProxible` defines methods for sending signature-based transaction and session requests to the Openfort SDK,
/// supporting both asynchronous and callback-based usage.
public protocol OFProxible: OFOpenfortRootable {}

public extension OFProxible {
    
    /// Sends a signature transaction intent request asynchronously.
    ///
    /// - Parameter params: The parameters for the signature transaction intent request (`OFSendSignatureTransactionIntentRequestParams`).
    /// - Returns: An optional `OFSendSignatureTransactionIntentRequestResponse` if the request succeeds.
    /// - Throws: An error if encoding the parameters fails or if the JavaScript execution encounters an error.
    func sendSignatureTransactionIntentRequest(
        params: OFSendSignatureTransactionIntentRequestParams
    ) async throws -> OFSendSignatureTransactionIntentRequestResponse? {
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
    
    /// Sends a signature transaction intent request and delivers the result via a completion handler.
    ///
    /// - Parameters:
    ///   - params: The parameters for the signature transaction intent request (`OFSendSignatureTransactionIntentRequestParams`).
    ///   - completion: A closure called with the result containing an optional `OFSendSignatureTransactionIntentRequestResponse` or an error.
    func sendSignatureTransactionIntentRequest(
        params: OFSendSignatureTransactionIntentRequestParams,
        completion: @escaping (Result<OFSendSignatureTransactionIntentRequestResponse?, Error>) -> Void
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
    
    /// Sends a signature session request asynchronously.
    ///
    /// - Parameter params: The parameters for the signature session request (`OFSendSignatureSessionRequestParams`).
    /// - Returns: An optional `OFSessionResponse` if the request succeeds.
    /// - Throws: An error if encoding the parameters fails or if the JavaScript execution encounters an error.
    func sendSignatureSessionRequest(
        params: OFSendSignatureSessionRequestParams
    ) async throws -> OFSessionResponse? {
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
    
    /// Sends a signature session request and delivers the result via a completion handler.
    ///
    /// - Parameters:
    ///   - params: The parameters for the signature session request (`OFSendSignatureSessionRequestParams`).
    ///   - completion: A closure called with the result containing an optional `OFSessionResponse` or an error.
    func sendSignatureSessionRequest(
        params: OFSendSignatureSessionRequestParams,
        completion: @escaping (Result<OFSessionResponse?, Error>) -> Void
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
