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
        typedData: String,
        completion: @escaping (Result<OFSignTypedDataResponse, Error>) -> Void
    ) {
        let method = OFMethods.signTypedData
        let js = "window.signTypedDataSync({typedData: '\(typedData)'});"
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
        completion: @escaping (Result<OFGetEthereumProviderResponse, Error>) -> Void
    ) {
        let method = OFMethods.getEthereumProvider
        let js = "window.getEthereumProviderSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.getEthereumProvider, completion: completion)
    }

    func configure(
        config: String,
        completion: @escaping (Result<OFConfigureResponse, Error>) -> Void
    ) {
        let method = OFMethods.configure
        let js = "window.configureSync({config: '\(config)'});"
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
        completion: @escaping (Result<OFPingResponse, Error>) -> Void
    ) {
        let method = OFMethods.ping
        let js = "window.pingSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.ping, completion: completion)
    }

    func signMessage(
        message: String,
        completion: @escaping (Result<OFSignMessageResponse, Error>) -> Void
    ) {
        let method = OFMethods.signMessage
        let js = "window.signMessageSync({message: '\(message)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.signMessage, completion: completion)
    }

    func setEmbeddedRecovery(
        recoveryData: String,
        completion: @escaping (Result<OFSetEmbeddedRecoveryResponse, Error>) -> Void
    ) {
        let method = OFMethods.setEmbeddedRecovery
        let js = "window.setEmbeddedRecoverySync({recoveryData: '\(recoveryData)'});"
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
