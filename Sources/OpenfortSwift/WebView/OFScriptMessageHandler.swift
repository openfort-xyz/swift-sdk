//
//  ScriptMessageHandler.swift
//  OpenfortAuthorization
//
//  Created by Pavel Gurkovskii on 2025-06-24.
//

import WebKit
import Foundation

internal class OFScriptMessageHandler: NSObject, WKScriptMessageHandler {
    
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
        
        guard let method = dict["method"] as? String else {
            print("No 'method' key in message: \(dict)")
            return
        }
        
        if processMessageForKeychain(dict) {
            return
        }
        
        if processMessageForSecureStorage(dict) {
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
    
    private func processMessageForSecureStorage(_ data: [String: Any]) -> Bool {
        guard let event = data["event"] as? String else { return false }

        switch event {
        case "app:secure-storage:get":
            // Call Swift storage logic, then send value back
            // Example:
            if let key = (data["data"] as? [String: Any])?["key"] as? String,
               let requestId = data["id"] {
                let value = OFKeychainHelper.retrieve(for: key) // Use your actual storage logic
                let js = """
                    window.__secureStorageOnResponse({ id: \(requestId), data: \(value != nil ? "\"\(value!)\"" : "null") });
                """
                webView?.evaluateJavaScript(js)
            }
            return true
        case "app:secure-storage:set":
            if let dict = data["data"] as? [String: Any],
               let key = dict["key"] as? String,
               let value = dict["value"] as? String,
               let requestId = data["id"] {
                OFKeychainHelper.save(value, for: key)
            }
            return true
        case "app:secure-storage:remove":
            if let key = (data["data"] as? [String: Any])?["key"] as? String,
               let requestId = data["id"] {
                OFKeychainHelper.delete(for: key)
            }
            return true
        case "app:secure-storage:flush":
            OFKeychainHelper.clearAll()
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
            OFMethods.resetPassword: handlerFor(OFResetPasswordResponse.self),
            OFMethods.requestResetPassword: handlerFor(OFRequestResetPasswordResponse.self),
            OFMethods.requestEmailVerification: handlerFor(OFRequestEmailVerificationResponse.self),
            OFMethods.verifyEmail: handlerFor(OFVerifyEmailResponse.self),
            OFMethods.initOAuth: handlerFor(OFInitOAuthResponse.self),
            OFMethods.unlinkOAuth: handlerFor(OFUnlinkOAuthResponse.self),
            OFMethods.loginWithIdToken: handlerFor(OFAuthorizationResponse.self),
            OFMethods.linkWallet: handlerFor(OFLinkWalletResponse.self),
            OFMethods.initLinkOAuth: handlerFor(OFInitLinkOAuthResponse.self),
            OFMethods.poolOAuth: handlerFor(OFPoolOAuthResponse.self),
            OFMethods.initSIWE: handlerFor(OFInitSIWEResponse.self),
            OFMethods.unlinkWallet: handlerFor(OFUnlinkWalletResponse.self),
            OFMethods.linkThirdPartyProvider: handlerFor(OFLinkThirdPartyProviderResponse.self),
            OFMethods.authenticateWithThirdPartyProvider: handlerFor(OFAuthenticateWithThirdPartyProviderResponse.self),
            OFMethods.authenticateWithSIWE: handlerFor(OFAuthorizationResponse.self),
            OFMethods.storeCredentials: handlerFor(OFStoreCredentialsResponse.self),
            OFMethods.signTypedData: handlerFor(OFSignTypedDataResponse.self),
            OFMethods.get: handlerFor(OFGetResponse.self),
            OFMethods.getEthereumProvider: handlerFor(OFGetEthereumProviderResponse.self),
            OFMethods.configure: handlerFor(OFConfigureResponse.self),
            OFMethods.exportPrivateKey: handlerFor(OFExportPrivateKeyResponse.self),
            OFMethods.list: handlerFor(OFListResponse.self),
            OFMethods.ping: handlerFor(OFPingResponse.self),
            OFMethods.signMessage: handlerFor(OFSignMessageResponse.self),
            OFMethods.setEmbeddedRecovery: handlerFor(OFSetEmbeddedRecoveryResponse.self),
            OFMethods.getEmbeddedState: handlerFor(OFGetEmbeddedStateResponse.self),
            OFMethods.getURL: handlerFor(OFGetURLResponse.self),
            OFMethods.sendSignatureTransactionIntentRequest: handlerFor(OFSendSignatureTransactionIntentRequestResponse.self),
            OFMethods.sendSignatureSessionRequest: handlerFor(OFSendSignatureSessionRequestResponse.self),
            OFMethods.getUserInstance: handlerFor(OFGetUserInstanceResponse.self),
            OFMethods.getAccessToken: handlerFor(OFGetAccessTokenResponse.self),
            OFMethods.validateAndRefreshToken: handlerFor(OFValidateAndRefreshTokenResponse.self)
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
        let errorMsg = dict["error"] as? String ?? "Unknown error"
        print("\(method) error: \(errorMsg)")
    }
}
