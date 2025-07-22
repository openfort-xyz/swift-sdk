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
        domain: String,
        types: String,
        message: String,
        completion: @escaping (Result<OFSignTypedDataResponse, Error>) -> Void
    ) {
        let method = OFMethods.signTypedData
        let js = "window.signTypedDataSync({domain: \(domain), types: \(types), message: \(message)});"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.signTypedData, completion: completion)
    }

    func get(
        key: String,
        completion: @escaping (Result<OFGetResponse, Error>) -> Void
    ) {
        let method = OFMethods.get
        let js = "window.getSync({key: '\(key)'});"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.get, completion: completion)
    }

    func getEthereumProvider(
        options: String? = nil,
        completion: @escaping (Result<OFGetEthereumProviderResponse, Error>) -> Void
    ) {
        let method = OFMethods.getEthereumProvider
        let js: String
        if let options = options {
            js = "window.getEthereumProviderSync({options: \(options)});"
        } else {
            js = "window.getEthereumProviderSync();"
        }
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.getEthereumProvider, completion: completion)
    }

    func configure(
        params: ConfigureEmbeddedWalletDTO,
        completion: @escaping (Result<OFConfigureResponse, Error>) -> Void
    ) {
        let method = OFMethods.configure
        let encoder = JSONEncoder()
        guard let jsonData = try? encoder.encode(params),
              let jsonString = String(data: jsonData, encoding: .utf8) else {
            print("Failed to encode ConfigureEmbeddedWalletDTO")
            completion(.failure(NSError(domain: OFErrorDomains.configure, code: -1, userInfo: [NSLocalizedDescriptionKey: "Encoding failed"])))
            return
        }
        let js = "window.configureSync({params: \(jsonString)});"
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
        let js = "window.pingSync({delay: \(delay)});"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.ping, completion: completion)
    }

    func signMessage(
        message: String,
        options: String? = nil,
        completion: @escaping (Result<OFSignMessageResponse, Error>) -> Void
    ) {
        let method = OFMethods.signMessage
        let js: String
        if let options = options {
            js = "window.signMessageSync({message: '\(message)', options: \(options)});"
        } else {
            js = "window.signMessageSync({message: '\(message)'});"
        }
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.signMessage, completion: completion)
    }

    func setEmbeddedRecovery(
        recoveryMethod: String,
        recoveryPassword: String,
        encryptionSession: String,
        completion: @escaping (Result<OFSetEmbeddedRecoveryResponse, Error>) -> Void
    ) {
        let method = OFMethods.setEmbeddedRecovery
        let js = "window.setEmbeddedRecoverySync({recoveryMethod: '\(recoveryMethod)', recoveryPassword: '\(recoveryPassword)', encryptionSession: '\(encryptionSession)'});"
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
