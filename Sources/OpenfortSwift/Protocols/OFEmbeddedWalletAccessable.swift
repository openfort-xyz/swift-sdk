//
//  OFEmbeddedWalletAccessable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-13.
//

import Foundation
import Combine

public protocol OFEmbeddedWalletAccessable: OFOpenfortRootable {
    var embeddedStatePublisher: Published<OFEmbeddedState?>.Publisher { get }
}

public extension OFEmbeddedWalletAccessable {

    var embeddedStatePublisher: Published<OFEmbeddedState?>.Publisher {
        // Placeholder; should be overridden by conforming type
        fatalError("embeddedStatePublisher must be implemented by conforming type")
    }

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

    func get(key: String) async throws -> OFGetResponse? {
        let method = OFMethods.get
        return try await evaluateAndObserveAsync(
            js: "window.getSync('\(key)');",
            method: method,
            errorDomain: OFErrorDomains.get
        )
    }
    
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

    func getEthereumProvider(params: OFGetEthereumProviderParams) async throws -> OFGetEthereumProviderResponse? {
        let method = OFMethods.getEthereumProvider
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.getEthereumProviderSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.getEthereumProvider
        )
    }
    
    func getEthereumProvider(
        params: OFGetEthereumProviderParams,
        completion: @escaping (Result<OFGetEthereumProviderResponse?, Error>) -> Void
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

    func configure(params: OFConfigureEmbeddedWalletDTO) async throws -> OFConfigureResponse? {
        
        self.webView?.evaluateJavaScript("window.ReactNativeWebView.injectedObjectJson()") { (result, error) in
            if let error = error {
                print("Error evaluating JS: \(error)")
            } else if let jsonString = result as? String {
                print("Injected object JSON: \(jsonString)")
                // You can parse the jsonString to a Swift Dictionary if needed
            }
        }
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
    
    func exportPrivateKey() async throws -> OFExportPrivateKeyResponse? {
        let method = OFMethods.exportPrivateKey
        return try await evaluateAndObserveAsync(
            js: "window.exportPrivateKeySync();",
            method: method,
            errorDomain: OFErrorDomains.exportPrivateKey
        )
    }
    
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

    func list() async throws -> OFListResponse? {
        let method = OFMethods.list
        return try await evaluateAndObserveAsync(
            js: "window.listSync();",
            method: method,
            errorDomain: OFErrorDomains.list
        )
    }
    
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

    func ping(delay: Int) async throws -> OFPingResponse? {
        let method = OFMethods.ping
        return try await evaluateAndObserveAsync(
            js: "window.pingSync(\(delay));",
            method: method,
            errorDomain: OFErrorDomains.ping
        )
    }
    
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

    func setEmbeddedRecovery(params: OFSetEmbeddedRecoveryParams) async throws -> OFSetEmbeddedRecoveryResponse? {
        let method = OFMethods.setEmbeddedRecovery
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.setEmbeddedRecoverySync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.setEmbeddedRecovery
        )
    }
    
    func setEmbeddedRecovery(
        params: OFSetEmbeddedRecoveryParams,
        completion: @escaping (Result<OFSetEmbeddedRecoveryResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await setEmbeddedRecovery(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    func getEmbeddedState() async throws -> OFGetEmbeddedStateResponse? {
        let method = OFMethods.getEmbeddedState
        return try await evaluateAndObserveAsync(
            js: "window.getEmbeddedStateSync();",
            method: method,
            errorDomain: OFErrorDomains.getEmbeddedState
        )
    }
    
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

    func getURL() async throws -> OFGetURLResponse? {
        let method = OFMethods.getURL
        return try await evaluateAndObserveAsync(
            js: "window.getURLSync();",
            method: method,
            errorDomain: OFErrorDomains.getURL
        )
    }
    
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
