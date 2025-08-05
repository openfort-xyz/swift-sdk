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
    
    private var responseModelsDictionaryHandler: [String: (Any?, String) -> Void] {
        [
            "logInWithEmailPassword": handlerFor(OFAuthorizationResponse.self),
            "signUpGuest": handlerFor(OFSignUpResponse.self),
            "signUpWithEmailPassword": handlerFor(OFSignUpResponse.self),
            "linkEmailPassword": handlerFor(OFLinkEmailPasswordResponse.self),
            "unlinkEmailPassword": handlerFor(OFUnlinkEmailPasswordResponse.self),
            "sendVerificationEmail": handlerFor(OFSimpleResultResponse.self),
            "isUserVerified": handlerFor(OFIsUserVerifiedResponse.self),
            "reauthenticateWithPassword": handlerFor(OFAuthorizationResponse.self),
            "deleteUser": handlerFor(OFSimpleResultResponse.self),
            "resetPassword": handlerFor(OFResetPasswordResponse.self),
            "requestResetPassword": handlerFor(OFRequestResetPasswordResponse.self),
            "requestEmailVerification": handlerFor(OFRequestEmailVerificationResponse.self),
            "verifyEmail": handlerFor(OFVerifyEmailResponse.self),
            "initOAuth": handlerFor(OFInitOAuthResponse.self),
            "unlinkOAuth": handlerFor(OFUnlinkOAuthResponse.self),
            "loginWithIdToken": handlerFor(OFAuthorizationResponse.self),
            "linkWallet": handlerFor(OFLinkWalletResponse.self),
            "initLinkOAuth": handlerFor(OFInitLinkOAuthResponse.self),
            "poolOAuth": handlerFor(OFPoolOAuthResponse.self),
            "initSIWE": handlerFor(OFInitSIWEResponse.self),
            "unlinkWallet": handlerFor(OFUnlinkWalletResponse.self),
            "linkThirdPartyProvider": handlerFor(OFLinkThirdPartyProviderResponse.self),
            "authenticateWithThirdPartyProvider": handlerFor(OFAuthenticateWithThirdPartyProviderResponse.self),
            "authenticateWithSIWE": handlerFor(OFAuthorizationResponse.self),
            "storeCredentials": handlerFor(OFStoreCredentialsResponse.self),
            "signTypedData": handlerFor(OFSignTypedDataResponse.self),
            "get": handlerFor(OFGetResponse.self),
            "getEthereumProvider": handlerFor(OFGetEthereumProviderResponse.self),
            "configure": handlerFor(OFConfigureResponse.self),
            "exportPrivateKey": handlerFor(OFExportPrivateKeyResponse.self),
            "list": handlerFor(OFListResponse.self),
            "ping": handlerFor(OFPingResponse.self),
            "signMessage": handlerFor(OFSignMessageResponse.self),
            "setEmbeddedRecovery": handlerFor(OFSetEmbeddedRecoveryResponse.self),
            "getEmbeddedState": handlerFor(OFGetEmbeddedStateResponse.self),
            "getURL": handlerFor(OFGetURLResponse.self),
            "sendSignatureTransactionIntentRequest": handlerFor(OFSendSignatureTransactionIntentRequestResponse.self),
            "sendSignatureSessionRequest": handlerFor(OFSendSignatureSessionRequestResponse.self),
            "getUser": handlerFor(OFUserResponse.self),
            "getAccessToken": handlerFor(OFGetAccessTokenResponse.self),
            "validateAndRefreshToken": handlerFor(OFValidateAndRefreshTokenResponse.self)
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
