//
//  ScriptMessageHandler.swift
//  OpenfortAuthorization
//
//  Created by Pavel Gurkovskii on 2025-06-24.
//

import WebKit
import Foundation

internal final class OFScriptMessageHandler: NSObject, WKScriptMessageHandler {
    
    weak var webView: WKWebView?
    let jsonDecoder = JSONDecoder()
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        
        guard let dict = message.body as? [String: Any] else {
            print("Received message is not a dictionary: \(message.body)")
            return
        }

        if let value = dict["shouldUseAppBackedStorage"] {
            print("shouldUseAppBackedStorage: \(value)")
        }
        
        // Process secure storage messages first (they have 'event' key instead of 'method')
        if processMessageForSecureStorage(dict) {
            return
        }
        
        // Process keychain messages (they have 'method' key)
        if processMessageForKeychain(dict) {
            return
        }
        
        // For other messages, require 'method' key
        guard let method = dict["method"] as? String else {
            print("No 'method' key in message: \(dict)")
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
            guard let value = data["value"] as? String,
                  let key = data["key"] as? String,
                  let requestId = data["requestId"] as? Int else {
                print("KeychainSave: Missing required parameters")
                return false
            }
            OFKeychainHelper.save(value, for: key)
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            webView?.evaluateJavaScript(js)
            return true
        case "KeychainRemove":
            guard let key = data["key"] as? String,
                  let requestId = data["requestId"] as? Int else {
                print("KeychainRemove: Missing required parameters")
                return false
            }
            OFKeychainHelper.delete(for: key)
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            webView?.evaluateJavaScript(js)
            return true
        case "KeychainGet":
            guard let key = data["key"] as? String,
                  let requestId = data["requestId"] as? Int else {
                print("KeychainGet: Missing required parameters")
                return false
            }
            let value = OFKeychainHelper.retrieve(for: key) ?? ""
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
            guard let requestId = data["requestId"] as? Int else {
                print("KeychainFlush: Missing requestId parameter")
                return false
            }
            OFKeychainHelper.clearAll()
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            webView?.evaluateJavaScript(js)
            return true
        default:
            return false
        }
    }
    
    // Helper method to send JSON responses to JavaScript
    private func sendResponse(_ responseDict: [String: Any]) {
        do {
            let jsonData = try JSONSerialization.data(withJSONObject: responseDict, options: [])
            if let jsonString = String(data: jsonData, encoding: .utf8) {
                let js = """
                    if (window.__secureStorageOnResponse) {
                        window.__secureStorageOnResponse(\(jsonString));
                    }
                """
                webView?.evaluateJavaScript(js) { _, error in
                    if let error = error {
                        print("Error sending secure storage response: \(error)")
                    }
                }
            }
        } catch {
            print("Error serializing response: \(error)")
        }
    }
    
    // Helper method to send error responses
    private func sendErrorResponse(requestId: String, error: String) {
        let responseDict: [String: Any] = [
            "id": requestId,
            "event": "app:secure-storage:response",
            "data": ["success": false, "error": error]
        ]
        sendResponse(responseDict)
    }
    
    private func processMessageForSecureStorage(_ data: [String: Any]) -> Bool {
        guard let event = data["event"] as? String else { return false }
        guard let requestId = data["id"] as? String else { return false }

        switch event {
        case "app:secure-storage:get":
            if let key = (data["data"] as? [String: Any])?["key"] as? String {
                let value = OFKeychainHelper.retrieve(for: key)
                
                // Use proper JSON serialization
                let responseDict: [String: Any] = [
                    "id": requestId,
                    "event": "app:secure-storage:response",
                    "data": ["value": value as Any]
                ]
                
                sendResponse(responseDict)
            } else {
                // Send error response for missing key
                sendErrorResponse(requestId: requestId, error: "Missing key parameter")
            }
            return true
            
        case "app:secure-storage:set":
            var success = false
            var errorMessage: String?
            
            if let dict = data["data"] as? [String: Any],
               let key = dict["key"] as? String,
               let value = dict["value"] as? String {
                OFKeychainHelper.save(value, for: key)
                success = true
            } else {
                errorMessage = "Missing key or value parameter"
            }
            
            // Send response using proper JSON serialization
            let responseDict: [String: Any] = [
                "id": requestId,
                "event": "app:secure-storage:response",
                "data": errorMessage != nil ? ["success": false, "error": errorMessage!] as [String: Any] : ["success": success] as [String: Any]
            ]
            
            sendResponse(responseDict)
            return true
            
        case "app:secure-storage:remove":
            var success = false
            var errorMessage: String?
            
            if let key = (data["data"] as? [String: Any])?["key"] as? String {
                OFKeychainHelper.delete(for: key)
                success = true
            } else {
                errorMessage = "Missing key parameter"
            }
            
            // Send response using proper JSON serialization
            let responseDict: [String: Any] = [
                "id": requestId,
                "event": "app:secure-storage:response",
                "data": errorMessage != nil ? ["success": false, "error": errorMessage!] as [String: Any] : ["success": success] as [String: Any]
            ]
            
            sendResponse(responseDict)
            return true
            
        case "app:secure-storage:flush":
            OFKeychainHelper.clearAll()
            
            // Send response using proper JSON serialization
            let responseDict: [String: Any] = [
                "id": requestId,
                "event": "app:secure-storage:response",
                "data": ["success": true]
            ]
            
            sendResponse(responseDict)
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
