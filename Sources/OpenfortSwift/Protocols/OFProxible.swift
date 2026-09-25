//
//  OFProxible.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-01.
//

import Foundation

/// `OFProxible` defines methods for submitting transaction and session-key signatures to the Openfort SDK,
/// supporting both asynchronous and callback-based usage.
public protocol OFProxible: OFOpenfortRootable {}

public extension OFProxible {

    /// Signs (when needed) and submits the signature of a `/v2/transactions` transaction.
    ///
    /// Create the transaction from your backend, then pass its `id` and `nextAction.hash` here.
    /// With `optimistic == false` (the default) the call returns once the transaction is mined,
    /// with `status` terminal and `receipt` populated.
    ///
    /// - Parameter params: The transaction id plus either `hash` or `signature` (`OFSendTransactionSignatureRequestParams`).
    /// - Returns: An optional `OFTransactionResponse` if the request succeeds.
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

    /// Signs and submits a transaction signature and delivers the result via a completion handler.
    ///
    /// - Parameters:
    ///   - params: The transaction id plus either `hash` or `signature` (`OFSendTransactionSignatureRequestParams`).
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
