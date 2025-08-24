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
    
    private let webView: WKWebView?
    private let jsonDecoder = JSONDecoder()
    
    init(webView: WKWebView?) {
        self.webView = webView
    }
    
    internal func process(_ message: WKScriptMessage) {
        guard let dict = message.body as? [String: Any] else {
            print("Received message is not a dictionary: \(message.body)")
            return
        }
        
        if message.name == "secureHandler" {
            if processMessageForSecureStorage(dict) {
                return
            }
        }
        
        guard let method = dict["method"] as? String else {
            
            print("No 'method' key in message: \(dict)")
            return
        }
        
        if processMessageForKeychain(dict) {
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
    
    private func processMessageForKeychain(_ data: [String: Any]) -> Bool {
        
        let method = data["method"] as? String ?? ""
        
        switch method {
        case "KeychainSave":
            OFKeychainHelper.save(data["value"] as! String, for: data["key"] as! String)
            let requestId = data["requestId"] as! Int
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            webView?.evaluateJavaScript(js)
            return true
        case "KeychainRemove":
            OFKeychainHelper.delete(for: data["key"] as! String)
            let requestId = data["requestId"] as! Int
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            webView?.evaluateJavaScript(js)
            return true
        case "KeychainGet":
            let value = OFKeychainHelper.retrieve(for: data["key"] as! String) ?? ""
            let requestId = data["requestId"] as! Int
            if !value.isEmpty {
                // Try to parse value as JSON
                if let data = value.data(using: .utf8),
                   let jsonObject = try? JSONSerialization.jsonObject(with: data, options: []),
                   JSONSerialization.isValidJSONObject(jsonObject) {
                    // It's a JSON object/array, pass as-is
                    let js = "window.__keychainOnGet({ requestId: \(requestId), value: \(value) })"
                    webView?.evaluateJavaScript(js)
                } else {
                    // It's a plain string, escape and quote
                    let js = "window.__keychainOnGet({ requestId: \(requestId), value: \"\(value)\" })"
                    webView?.evaluateJavaScript(js)
                }
            } else {
                // If nil or empty, send null
                let js = "window.__keychainOnGet({ requestId: \(requestId), value: null })"
                webView?.evaluateJavaScript(js)
            }
            return true
        case "KeychainFlush":
            OFKeychainHelper.clearAll()
            let requestId = data["requestId"] as! Int
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            webView?.evaluateJavaScript(js)
            return true
        default:
            return false
        }
    }
    
    /// Serializes a dictionary to JSON and posts it to the page via window.postMessage
    private func postMessageToJS(_ object: [String: Any]) {
        var enriched = object
        // Mark messages so the JS bridge can distinguish Swift responses
        enriched["__fromSwift"] = true
        
        guard JSONSerialization.isValidJSONObject(enriched),
              let data = try? JSONSerialization.data(withJSONObject: enriched, options: []),
              let json = String(data: data, encoding: .utf8) else {
            print("postMessageToJS: invalid JSON object")
            return
        }
        let js = "window.postMessage(\(json), window.location.origin);"
        webView?.evaluateJavaScript(js, completionHandler: { result, error in
            
        })
    }
    
    private func processMessageForSecureStorage(_ data: [String: Any]) -> Bool {
        
        func reply(event: String, id: Any?, data: [String: Any]) {
            let payload: [String: Any] = [
                "event": event,
                "id": id as Any,
                "data": data
            ]
            postMessageToJS(payload)
        }
        
        func succeed(event: String, id: Any?, data: [String: Any] = [:]) {
            var responseData = data
            responseData["success"] = true
            reply(event: event, id: id, data: responseData)
        }
        
        func fail(event: String, id: Any?, error: String = "Operation failed") {
            reply(event: event, id: id, data: ["success": false])
            handleError(["error": error], method: event)
        }
        
        guard let event = data["event"] as? String else { return false }
        
        // If this is already a response payload carrying a failure, just handle the error and stop.
        if let payload = data["data"] as? [String: Any] {
            if let success = payload["success"] as? Bool, success == false {
                let err = (payload["error"] as? String) ?? "Operation failed"
                fail(event: event, id: data["id"], error: err)
                return true
            } else if let successNum = payload["success"] as? Int, successNum == 0 {
                let err = (payload["error"] as? String) ?? "Operation failed"
                fail(event: event, id: data["id"], error: err)
                return true
            }
        }
        let requestId = data["id"]
        switch event {
        case "app:secure-storage:get":
            if let key = (data["data"] as? [String: Any])?["key"] as? String {
                let value = OFKeychainHelper.retrieve(for: key)
                let normalizedValue: Any = value ?? NSNull()
                reply(event: event, id: requestId, data: ["value": normalizedValue])
            }
            return true
        case "app:secure-storage:set":
            if let dict = data["data"] as? [String: Any],
               let key = dict["key"] as? String,
               let value = dict["value"] as? String {
                OFKeychainHelper.save(value, for: key)
                succeed(event: event, id: requestId)
            } else {
                fail(event: event, id: requestId)
            }
            return true
        case "app:secure-storage:remove":
            if let key = (data["data"] as? [String: Any])?["key"] as? String {
                OFKeychainHelper.delete(for: key)
                succeed(event: event, id: requestId)
            } else {
                fail(event: event, id: requestId)
            }
            return true
        case "app:secure-storage:flush":
            OFKeychainHelper.clearAll()
            succeed(event: event, id: requestId)
            return true
        default:
            return false
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
            OFMethods.authenticateWithThirdPartyProvider: handlerFor(OFAuthenticateWithThirdPartyProviderResponse.self),
            OFMethods.authenticateWithSIWE: handlerFor(OFAuthorizationResponse.self),
            OFMethods.signTypedData: handlerFor(OFSignTypedDataResponse.self),
            OFMethods.get: handlerFor(OFGetResponse.self),
            OFMethods.getEthereumProvider: handlerFor(OFGetEthereumProviderResponse.self),
            OFMethods.configure: handlerFor(OFConfigureResponse.self),
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
    
    private func handlerFor<T: Decodable>(_ type: T.Type) -> (Any, String) -> Void {
        return { [weak self] data, method in
            self?.decodeAndHandle(type, from: data, method: method)
        }
    }
    
    // Helper to decode and handle the model
    private func decodeAndHandle<T: Decodable>(_ type: T.Type, from data: Any?, method: String) {
        do {
            let jsonData: Data?
            // Treat empty data (nil, empty dict, empty string) as allowed: post nil object
            if data == nil ||
                (data as? [String: Any])?.isEmpty == true ||
                (data as? String)?.isEmpty == true {
                NotificationCenter.default.post(
                    name: Notification.Name(method),
                    object: nil,
                    userInfo: ["success": true]
                )
                print("No data to decode for \(method) (empty is allowed)")
                return
            }
            if let dict = data as? [String: Any] {
                if T.self == String.self {
                    let dataJson = try JSONSerialization.data(withJSONObject: dict, options: [])
                    if let jsonString = String(data: dataJson, encoding: .utf8) {
                        NotificationCenter.default.post(
                            name: Notification.Name(method),
                            object: jsonString as? T,
                            userInfo: ["success": true]
                        )
                        return
                    }
                }
                jsonData = try JSONSerialization.data(withJSONObject: dict, options: [])
            } else if let d = data as? T {
                NotificationCenter.default.post(
                    name: Notification.Name(method),
                    object: d,
                    userInfo: ["success": true]
                )
                return
            } else {
                print("Data is not valid JSON for \(method)")
                NotificationCenter.default.post(
                    name: Notification.Name(method),
                    object: nil,
                    userInfo: ["success": false]
                )
                return
            }
            let decoded = try jsonDecoder.decode(T.self, from: jsonData!)
            NotificationCenter.default.post(
                name: Notification.Name(method),
                object: decoded,
                userInfo: ["success": true]
            )
            print("Decoded \(method) data:", decoded)
        } catch {
            print("Decoding error for \(method):", error)
            NotificationCenter.default.post(
                name: Notification.Name(method),
                object: nil,
                userInfo: ["success": false]
            )
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
