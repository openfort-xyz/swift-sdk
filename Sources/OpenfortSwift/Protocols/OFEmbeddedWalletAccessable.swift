//
//  OFEmbeddedWalletAccessable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-13.
//


public protocol OFEmbeddedWalletAccessable: OFOpenfortRootable {}

public extension OFEmbeddedWalletAccessable {
    
    func getIframeManager(
        completion: @escaping (Result<OFGetIframeManagerResponse, Error>) -> Void
    ) {
        let method = OFMethods.getIframeManager
        let js = "window.getIframeManagerSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.getIframeManager, completion: completion)
    }

    func signTypedData(
        domain: String,
        types: String,
        message: String,
        completion: @escaping (Result<OFSignTypedDataResponse, Error>) -> Void
    ) {
        let method = OFMethods.signTypedData
        let js = "window.signTypedDataSync({domain: \(domain), types: \(types), message: \(message)});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.signTypedData, completion: completion)
    }

    func get(
        key: String,
        completion: @escaping (Result<OFGetResponse, Error>) -> Void
    ) {
        let method = OFMethods.get
        let js = "window.getSync({key: '\(key)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.get, completion: completion)
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
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.getEthereumProvider, completion: completion)
    }

    func configure(
        params: String,
        completion: @escaping (Result<OFConfigureResponse, Error>) -> Void
    ) {
        let method = OFMethods.configure
        let js = "window.configureSync({params: \(params)});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.configure, completion: completion)
    }

    func exportPrivateKey(
        completion: @escaping (Result<OFExportPrivateKeyResponse, Error>) -> Void
    ) {
        let method = OFMethods.exportPrivateKey
        let js = "window.exportPrivateKeySync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.exportPrivateKey, completion: completion)
    }

    func list(
        completion: @escaping (Result<OFListResponse, Error>) -> Void
    ) {
        let method = OFMethods.list
        let js = "window.listSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.list, completion: completion)
    }

    func ping(
        delay: Int,
        completion: @escaping (Result<OFPingResponse, Error>) -> Void
    ) {
        let method = OFMethods.ping
        let js = "window.pingSync({delay: \(delay)});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.ping, completion: completion)
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
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.signMessage, completion: completion)
    }

    func setEmbeddedRecovery(
        recoveryMethod: String,
        recoveryPassword: String,
        encryptionSession: String,
        completion: @escaping (Result<OFSetEmbeddedRecoveryResponse, Error>) -> Void
    ) {
        let method = OFMethods.setEmbeddedRecovery
        let js = "window.setEmbeddedRecoverySync({recoveryMethod: '\(recoveryMethod)', recoveryPassword: '\(recoveryPassword)', encryptionSession: '\(encryptionSession)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.setEmbeddedRecovery, completion: completion)
    }

    func getEmbeddedState(
        completion: @escaping (Result<OFGetEmbeddedStateResponse, Error>) -> Void
    ) {
        let method = OFMethods.getEmbeddedState
        let js = "window.getEmbeddedStateSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.getEmbeddedState, completion: completion)
    }

    func getURL(
        completion: @escaping (Result<OFGetURLResponse, Error>) -> Void
    ) {
        let method = OFMethods.getURL
        let js = "window.getURLSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.getURL, completion: completion)
    }
}
