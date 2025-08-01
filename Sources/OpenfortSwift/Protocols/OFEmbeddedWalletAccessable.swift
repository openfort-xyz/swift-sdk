//
//  OFEmbeddedWalletAccessable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-13.
//

import Foundation

public protocol OFEmbeddedWalletAccessable: OFOpenfortRootable {}

public extension OFEmbeddedWalletAccessable {

    func signTypedData(
        params: OFSignTypedDataParams,
        completion: @escaping (Result<OFSignTypedDataResponse, Error>) -> Void
    ) {
        let method = OFMethods.signTypedData
        guard let jsonData = try? jsonEncoder.encode(params),
              let jsonString = String(data: jsonData, encoding: .utf8) else {
            print("Failed to encode OFSignTypedDataParams")
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.signTypedDataSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.signTypedData, completion: completion)
    }

    func get(
        key: String,
        completion: @escaping (Result<OFGetResponse, Error>) -> Void
    ) {
        let method = OFMethods.get
        let js = "window.getSync('\(key)');"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.get, completion: completion)
    }

    func getEthereumProvider(
        params: OFGetEthereumProviderParams,
        completion: @escaping (Result<OFGetEthereumProviderResponse, Error>) -> Void
    ) {
        let method = OFMethods.getEthereumProvider
        guard let jsonData = try? jsonEncoder.encode(params),
              let jsonString = String(data: jsonData, encoding: .utf8) else {
            print("Failed to encode OFGetEthereumProviderParams")
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.getEthereumProviderSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.getEthereumProvider, completion: completion)
    }

    func configure(
        params: OFConfigureEmbeddedWalletDTO,
        completion: @escaping (Result<OFConfigureResponse, Error>) -> Void
    ) {
        let method = OFMethods.configure

        guard let jsonData = try? jsonEncoder.encode(params),
              let jsonString = String(data: jsonData, encoding: .utf8)?.replacingOccurrences(of: "\\", with: "\\\\")
            .replacingOccurrences(of: "\"", with: "\\\"") else {
            print("Failed to encode ConfigureEmbeddedWalletDTO")
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.configureSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.configure, completion: completion)
    }

    func exportPrivateKey(
        completion: @escaping (Result<OFExportPrivateKeyResponse, Error>) -> Void
    ) {
        let method = OFMethods.exportPrivateKey
        let js = "window.exportPrivateKeySync();"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.exportPrivateKey, completion: completion)
    }

    func list(
        completion: @escaping (Result<OFListResponse, Error>) -> Void
    ) {
        let method = OFMethods.list
        let js = "window.listSync();"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.list, completion: completion)
    }

    func ping(
        delay: Int,
        completion: @escaping (Result<OFPingResponse, Error>) -> Void
    ) {
        let method = OFMethods.ping
        let js = "window.pingSync(\(delay));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.ping, completion: completion)
    }

    func signMessage(
        params: OFSignMessageParams,
        completion: @escaping (Result<OFSignMessageResponse, Error>) -> Void
    ) {
        let method = OFMethods.signMessage
        guard let jsonData = try? jsonEncoder.encode(params),
              let jsonString = String(data: jsonData, encoding: .utf8) else {
            print("Failed to encode OFSignMessageParams")
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.signMessageSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.signMessage, completion: completion)
    }

    func setEmbeddedRecovery(
        params: OFSetEmbeddedRecoveryParams,
        completion: @escaping (Result<OFSetEmbeddedRecoveryResponse, Error>) -> Void
    ) {
        let method = OFMethods.setEmbeddedRecovery
        guard let jsonData = try? jsonEncoder.encode(params),
              let jsonString = String(data: jsonData, encoding: .utf8) else {
            print("Failed to encode OFSetEmbeddedRecoveryParams")
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.setEmbeddedRecoverySync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.setEmbeddedRecovery, completion: completion)
    }

    func getEmbeddedState(
        completion: @escaping (Result<OFGetEmbeddedStateResponse, Error>) -> Void
    ) {
        let method = OFMethods.getEmbeddedState
        let js = "window.getEmbeddedStateSync();"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.getEmbeddedState, completion: completion)
    }

    func getURL(
        completion: @escaping (Result<OFGetURLResponse, Error>) -> Void
    ) {
        let method = OFMethods.getURL
        let js = "window.getURLSync();"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.getURL, completion: completion)
    }
}
