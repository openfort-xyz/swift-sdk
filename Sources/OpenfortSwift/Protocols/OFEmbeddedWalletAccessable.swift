//
//  OFEmbeddedWalletAccessable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-13.
//

import Foundation
import Combine

/// A capability that provides access to embedded wallet operations via the web bridge.
///
/// Conforming types gain helper APIs to sign messages and typed data, query state,
/// configure embedded wallets, retrieve providers, and more. All methods use the
/// JavaScript bridge (e.g. `window.*Sync(...)`) and observe completion results.
public protocol OFEmbeddedWalletAccessable: OFOpenfortRootable {
    /// A publisher that emits changes to the embedded wallet state.
    ///
    /// Conforming types should publish state transitions such as configuration,
    /// account creation, and readiness.
    var embeddedStatePublisher: Published<OFEmbeddedState?>.Publisher { get }
}

public extension OFEmbeddedWalletAccessable {

    /// Default placeholder implementation.
    ///
    /// - Important: Conforming types **must** provide their own implementation.
    var embeddedStatePublisher: Published<OFEmbeddedState?>.Publisher {
        // Placeholder; should be overridden by conforming type
        fatalError("embeddedStatePublisher must be implemented by conforming type")
    }

    /// Signs EIP-712 typed data with the embedded wallet.
    ///
    /// Calls `window.signTypedDataSync(...)` in the web context and waits for the result.
    /// - Parameter params: Typed data components (domain, types, message) in `OFSignTypedDataParams`.
    /// - Returns: An optional `OFSignTypedDataResponse` containing the signature.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    func signTypedData(params: OFSignTypedDataParams) async throws -> OFSignTypedDataResponse? {
        let method = OFMethods.signTypedData
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.signTypedDataSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.signTypedData
        )
    }
    
    /// Signs EIP-712 typed data with the embedded wallet (completion-based API).
    /// - Parameters:
    ///   - params: Typed data components in `OFSignTypedDataParams`.
    ///   - completion: Called with an optional `OFSignTypedDataResponse` or an error.
    func signTypedData(
        params: OFSignTypedDataParams,
        completion: @escaping (Result<OFSignTypedDataResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await signTypedData(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Retrieves an embedded account entity by key.
    ///
    /// Calls `window.getSync(key)` and decodes the embedded account fields.
    /// - Parameter key: A lookup key.
    /// - Returns: `OFGetResponse` with embedded account fields, or `nil`.
    /// - Throws: An error from the JS bridge.
    func get(key: String) async throws -> OFGetResponse? {
        let method = OFMethods.get
        return try await evaluateAndObserveAsync(
            js: "window.getSync('\(key)');",
            method: method,
            errorDomain: OFErrorDomains.get
        )
    }
    
    /// Retrieves an embedded account entity by key (completion-based API).
    /// - Parameters:
    ///   - key: A lookup key.
    ///   - completion: Called with an optional `OFGetResponse` or an error.
    func get(
        key: String,
        completion: @escaping (Result<OFGetResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await get(key: key)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Returns an EVM provider descriptor for the embedded wallet.
    ///
    /// Calls `window.getEthereumProviderSync(...)` and returns transport details needed
    /// to interoperate with EVM tooling.
    /// - Parameter params: Provider options (`OFGetEthereumProviderParams`).
    /// - Returns: `OpenfortEIP1193Web3Provider` or `nil`.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    func getEthereumProvider(params: OFGetEthereumProviderParams) async throws -> OpenfortEIP1193Web3Provider? {
        
        return OpenfortEIP1193Web3Provider(webView: webView!, getProviderParams: params)
    }
    
    /// Returns an EVM provider descriptor (completion-based API).
    /// - Parameters:
    ///   - params: Provider options (`OFGetEthereumProviderParams`).
    ///   - completion: Called with an optional `OpenfortEIP1193Web3Provider` or an error.
    func getEthereumProvider(
        params: OFGetEthereumProviderParams,
        completion: @escaping (Result<OpenfortEIP1193Web3Provider?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await getEthereumProvider(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Configures the embedded wallet for the current player.
    ///
    /// Calls `window.configureSync({ params: ... })` with the provided configuration.
    /// - Parameter params: Configuration payload (`OFConfigureEmbeddedWalletDTO`).
    /// - Returns: Optional `OFConfigureResponse`.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    func configure(params: OFConfigureEmbeddedWalletDTO) async throws -> OFConfigureResponse? {
        let method = OFMethods.configure
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.configureSync({ params: \(jsonString) });",
            method: method,
            errorDomain: OFErrorDomains.configure
        )
    }
    
    /// Configures the embedded wallet (completion-based API).
    /// - Parameters:
    ///   - params: Configuration payload (`OFConfigureEmbeddedWalletDTO`).
    ///   - completion: Called with an optional `OFConfigureResponse` or an error.
    func configure(
        params: OFConfigureEmbeddedWalletDTO,
        completion: @escaping (Result<OFConfigureResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await configure(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }
    
    /// Exports the private key material from the embedded wallet.
    ///
    /// - Warning: Handle exported keys securely. Avoid logging or persisting plaintext keys.
    /// - Returns: An optional `OFExportPrivateKeyResponse` containing key data.
    /// - Throws: An error from the JS bridge.
    func exportPrivateKey() async throws -> OFExportPrivateKeyResponse? {
        let method = OFMethods.exportPrivateKey
        return try await evaluateAndObserveAsync(
            js: "window.exportPrivateKeySync();",
            method: method,
            errorDomain: OFErrorDomains.exportPrivateKey
        )
    }
    
    /// Exports the private key (completion-based API).
    /// - Parameter completion: Called with an optional `OFExportPrivateKeyResponse` or an error.
    func exportPrivateKey(
        completion: @escaping (Result<OFExportPrivateKeyResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await exportPrivateKey()
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Lists embedded accounts or related entities for the current player.
    ///
    /// Calls `window.listSync()` and returns the decoded list payload.
    /// - Returns: Optional `OFListResponse` on success.
    /// - Throws: An error from the JS bridge.
    func list() async throws -> OFListResponse? {
        let method = OFMethods.list
        return try await evaluateAndObserveAsync(
            js: "window.listSync();",
            method: method,
            errorDomain: OFErrorDomains.list
        )
    }
    
    /// Lists embedded accounts (completion-based API).
    /// - Parameter completion: Called with an optional `OFListResponse` or an error.
    func list(
        completion: @escaping (Result<OFListResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await list()
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Performs a ping roundtrip through the web bridge.
    ///
    /// Useful for connectivity checks and latency measurements.
    /// - Parameter delay: Optional artificial delay in milliseconds applied in the bridge.
    /// - Returns: Optional `OFPingResponse`.
    /// - Throws: An error from the JS bridge.
    func ping(delay: Int) async throws -> OFPingResponse? {
        let method = OFMethods.ping
        return try await evaluateAndObserveAsync(
            js: "window.pingSync(\(delay));",
            method: method,
            errorDomain: OFErrorDomains.ping
        )
    }
    
    /// Performs a ping roundtrip (completion-based API).
    /// - Parameters:
    ///   - delay: Delay in milliseconds.
    ///   - completion: Called with an optional `OFPingResponse` or an error.
    func ping(
        delay: Int,
        completion: @escaping (Result<OFPingResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await ping(delay: delay)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Signs an arbitrary message with the embedded wallet.
    ///
    /// Calls `window.signMessageSync(...)` with the provided options.
    /// - Parameter params: Message and options (`OFSignMessageParams`).
    /// - Returns: Optional `OFSignMessageResponse` containing the signature.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    func signMessage(params: OFSignMessageParams) async throws -> OFSignMessageResponse? {
        let method = OFMethods.signMessage
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.signMessageSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.signMessage
        )
    }
    
    /// Signs an arbitrary message (completion-based API).
    /// - Parameters:
    ///   - params: Message and options (`OFSignMessageParams`).
    ///   - completion: Called with an optional `OFSignMessageResponse` or an error.
    func signMessage(
        params: OFSignMessageParams,
        completion: @escaping (Result<OFSignMessageResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await signMessage(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Configures recovery for the embedded wallet.
    ///
    /// Calls `window.setEmbeddedRecoverySync(...)`.
    /// - Parameter params: Recovery configuration (`OFSetEmbeddedRecoveryParams`).
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    func setEmbeddedRecovery(params: OFSetEmbeddedRecoveryParams) async throws {
        let method = OFMethods.setEmbeddedRecovery
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        try await evaluateAndObserveVoidAsync(
            js: "window.setEmbeddedRecoverySync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.setEmbeddedRecovery
        )
    }
    
    /// Configures embedded wallet recovery (completion-based API).
    /// - Parameters:
    ///   - params: Recovery configuration (`OFSetEmbeddedRecoveryParams`).
    ///   - completion: Called with `Void` on success or an error.
    func setEmbeddedRecovery(
        params: OFSetEmbeddedRecoveryParams,
        completion: @escaping (Result<Void, Error>) -> Void
    ) {
        Task {
            do {
                try await setEmbeddedRecovery(params: params)
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Returns the current embedded wallet state for the player.
    ///
    /// Calls `window.getEmbeddedStateSync()`.
    /// - Returns: Optional `OFGetEmbeddedStateResponse`.
    /// - Throws: An error from the JS bridge.
    func getEmbeddedState() async throws -> OFGetEmbeddedStateResponse? {
        let method = OFMethods.getEmbeddedState
        return try await evaluateAndObserveAsync(
            js: "window.getEmbeddedStateSync();",
            method: method,
            errorDomain: OFErrorDomains.getEmbeddedState
        )
    }
    
    /// Returns the current embedded wallet state (completion-based API).
    /// - Parameter completion: Called with an optional `OFGetEmbeddedStateResponse` or an error.
    func getEmbeddedState(
        completion: @escaping (Result<OFGetEmbeddedStateResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await getEmbeddedState()
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Retrieves a URL related to the embedded wallet context (e.g., iframe URL).
    ///
    /// Calls `window.getURLSync()`.
    /// - Returns: Optional `OFGetURLResponse`.
    /// - Throws: An error from the JS bridge.
    func getURL() async throws -> OFGetURLResponse? {
        let method = OFMethods.getURL
        return try await evaluateAndObserveAsync(
            js: "window.getURLSync();",
            method: method,
            errorDomain: OFErrorDomains.getURL
        )
    }
    
    /// Retrieves a URL related to the embedded wallet (completion-based API).
    /// - Parameter completion: Called with an optional `OFGetURLResponse` or an error.
    func getURL(
        completion: @escaping (Result<OFGetURLResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await getURL()
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }
}
