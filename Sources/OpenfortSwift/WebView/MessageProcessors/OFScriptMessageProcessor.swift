//
//  OFScriptMessageProcessor.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-08-20.
//

import WebKit
import Foundation

@MainActor

internal final class OFScriptMessageProcessor {
    
    var getAccessToken: (() async throws -> String?)?
    
    private let jsonDecoder = JSONDecoder()
    private let storageMessageProcessor = OFStorageMessageProcessor()
    
    internal func process(_ message: WKScriptMessage) {
        guard let dict = message.body as? [String: Any] else {
            print("Received message is not a dictionary: \(message.body)")
            return
        }
        
        if message.name == "secureHandler" {
            if storageMessageProcessor.processMessageForSecureStorage(message) {
                return
            }
        }
        
        if message.name == "authHandler" {
            guard
                let event = dict["event"] as? String,
                let id = dict["id"] as? String,
                event == "app:third-party-auth:getAccessToken"
            else { return }

            Task {
                let token = try await getAccessToken?() ?? nil
                let value = token != nil ? "\"\(token!)\"" : "null"
                let js = """
                window.postMessage({
                  event: "app:third-party-auth:getAccessToken",
                  id: "\(id)",
                  data: { value: \(value) }
                }, window.location.origin);
                """
                try await message.webView?.evaluateJavaScript(js)
                print(js)
            }
            return
        }
        
        guard let method = dict["method"] as? String else {
            print("No 'method' key in message: \(dict)")
            return
        }
        
        if storageMessageProcessor.processMessageForKeychain(message) {
            return
        }
        
        let success = dict["success"] as? Bool ?? false
        if success {
            if let handler = responseModelsDictionaryHandler[method] {
                handler(dict["data"], method)
            } else {
                decodeAndHandle(OFAuthorizationResponse.self, from: dict["data"], method: method)
            }
        } else {
            handleError(dict, method: method)
        }
    }
    
    private var responseModelsDictionaryHandler: [String: (Any?, String) -> Void] {
        [
            OFMethods.loginWith: handlerFor(OFAuthorizationResponse.self),
            OFMethods.signUpGuest: handlerFor(OFSignUpResponse.self),
            OFMethods.signUpWith: handlerFor(OFSignUpResponse.self),
            OFMethods.linkEmailPassword: handlerFor(OFLinkEmailPasswordResponse.self),
            OFMethods.unlinkEmailPassword: handlerFor(OFUnlinkEmailPasswordResponse.self),
            OFMethods.initOAuth: handlerFor(OFInitOAuthResponse.self),
            OFMethods.unlinkOAuth: handlerFor(OFUnlinkOAuthResponse.self),
            OFMethods.loginWithIdToken: handlerFor(OFAuthorizationResponse.self),
            OFMethods.linkWallet: handlerFor(OFLinkWalletResponse.self),
            OFMethods.initLinkOAuth: handlerFor(OFInitLinkOAuthResponse.self),
            OFMethods.poolOAuth: handlerFor(OFPoolOAuthResponse.self),
            OFMethods.initSIWE: handlerFor(OFInitSIWEResponse.self),
            OFMethods.unlinkWallet: handlerFor(OFUnlinkWalletResponse.self),
            OFMethods.linkThirdPartyProvider: handlerFor(OFAuthPlayerResponse.self),
            OFMethods.authenticateWithSIWE: handlerFor(OFAuthorizationResponse.self),
            OFMethods.signTypedData: handlerFor(OFSignTypedDataResponse.self),
            OFMethods.get: handlerFor(OFGetResponse.self),
            OFMethods.getEthereumProvider: handlerFor(OFGetEthereumProviderResponse.self),
            OFMethods.configure: handlerFor(OFConfigureResponse.self),
            OFMethods.create: handlerFor(OFEmbeddedAccount.self),
            OFMethods.recover: handlerFor(OFEmbeddedAccount.self),
            OFMethods.exportPrivateKey: handlerFor(OFExportPrivateKeyResponse.self),
            OFMethods.list: handlerFor(OFListResponse.self),
            OFMethods.ping: handlerFor(OFPingResponse.self),
            OFMethods.signMessage: handlerFor(OFSignMessageResponse.self),
            OFMethods.getEmbeddedState: handlerFor(OFGetEmbeddedStateResponse.self),
            OFMethods.getURL: handlerFor(OFGetURLResponse.self),
            OFMethods.sendSignatureTransactionIntentRequest: handlerFor(OFSendSignatureTransactionIntentRequestResponse.self),
            OFMethods.sendSignatureSessionRequest: handlerFor(OFSessionResponse.self),
            OFMethods.getUserInstance: handlerFor(OFGetUserInstanceResponse.self),
            OFMethods.getAccessToken: handlerFor(OFGetAccessTokenResponse.self),
        ]
    }
    
    private func handlerFor<T: Decodable>(_ type: T.Type) -> (Any?, String) -> Void {
        return { [weak self] data, method in
            self?.decodeAndHandle(type, from: data, method: method)
        }
    }
    
    // Helper to decode and handle the model
    private func decodeAndHandle<T: Decodable>(_ type: T.Type, from data: Any?, method: String) {
        let notificationName = Notification.Name(method)
        var object: Any? = nil
        var userInfo = ["success": true]
        
        func postNotification() {
            NotificationCenter.default.post(
                name: notificationName,
                object: object,
                userInfo: userInfo)
        }
    
        do {
            let jsonData: Data?
            
            // Treat empty data (nil, empty dict, empty string) as allowed: post nil object
            if data == nil ||
                (data as? [String: Any])?.isEmpty == true ||
                (data as? String)?.isEmpty == true {
                postNotification()
                print("No data to decode for \(method) (empty is allowed)")
                return
            }
            if let dict = data as? [String: Any] {
                if T.self == String.self {
                    let dataJson = try JSONSerialization.data(withJSONObject: dict, options: [])
                    if let jsonString = String(data: dataJson, encoding: .utf8) {
                        object = jsonString
                        postNotification()
                        return
                    }
                }
                jsonData = try JSONSerialization.data(withJSONObject: dict, options: [])
            } else if let d = data as? T {
                object = d
                postNotification()
                return
            } else {
                print("Data is not valid JSON for \(method)")
                userInfo = ["success": false]
                postNotification()
                return
            }
            object = try jsonDecoder.decode(T.self, from: jsonData!)
            postNotification()
            print("Decoded \(method) data:", object!)
        } catch {
            print("Decoding error for \(method):", error)
            userInfo = ["success": false]
            postNotification()
        }
    }
    
    private func handleError(_ dict: [String: Any], method: String) {
        NotificationCenter.default.post(
            name: Notification.Name(method),
            object: nil,
            userInfo: ["success": false]
        )
        let errorMsg = dict["error"] as? String ?? "Unknown error"
        print("\(method) error: \(errorMsg)")
    }
}
