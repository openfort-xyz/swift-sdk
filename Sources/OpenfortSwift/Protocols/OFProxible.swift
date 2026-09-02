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
    
    /// Signs (when no signature is given) and submits the signature of a `/v2/transactions` transaction
    /// created by your backend, then broadcasts it.
    ///
    /// - Parameter params: The `tin_` transaction id plus the `nextAction.hash` to sign, or a ready-made signature
    ///   (`OFSendTransactionSignatureRequestParams`).
    /// - Returns: An optional `OFTransactionResponse`; poll `status` until it is terminal if `optimistic` was set.
    /// - Throws: An error if encoding the parameters fails or if the JavaScript execution encounters an error.
    func sendTransactionSignatureRequest(
        params: OFSendTransactionSignatureRequestParams
    ) async throws -> OFTransactionResponse? {
        let method = OFMethods.sendTransactionSignatureRequest
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.sendTransactionSignatureRequestSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.sendTransactionSignatureRequest
        )
    }

    /// Submits a transaction signature and delivers the result via a completion handler.
    ///
    /// - Parameters:
    ///   - params: The parameters for the transaction signature request (`OFSendTransactionSignatureRequestParams`).
    ///   - completion: A closure called with the result containing an optional `OFTransactionResponse` or an error.
    func sendTransactionSignatureRequest(
        params: OFSendTransactionSignatureRequestParams,
        completion: @escaping (Result<OFTransactionResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await sendTransactionSignatureRequest(params: params)
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
