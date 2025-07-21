//
//  ScriptMessageHandler.swift
//  OpenfortAuthorization
//
//  Created by Pavel Gurkovskii on 2025-06-24.
//

import WebKit
import Foundation

internal class OFScriptMessageHandler: NSObject, WKScriptMessageHandler {
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let dict = message.body as? [String: Any] else {
            print("Received message is not a dictionary: \(message.body)")
            return
        }

        guard let method = dict["method"] as? String else {
            print("No 'method' key in message: \(dict)")
            return
        }

        let success = dict["success"] as? Bool ?? false
        if success, let data = dict["data"] {
            if let handler = responseModelsDictionaryHandler[method] {
                handler(data, method)
            } else {
                decodeAndHandle(OFAuthorizationResponse.self, from: data, method: method)
            }
        } else {
            handleError(dict, method: method)
        }
    }

    private var responseModelsDictionaryHandler: [String: (Any, String) -> Void] {
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
            "logout": handlerFor(OFLogOutResponse.self),
            "initLinkOAuth": handlerFor(OFInitLinkOAuthResponse.self),
            "poolOAuth": handlerFor(OFPoolOAuthResponse.self),
            "initSIWE": handlerFor(OFInitSIWEResponse.self),
            "unlinkWallet": handlerFor(OFUnlinkWalletResponse.self),
            "linkThirdPartyProvider": handlerFor(OFLinkThirdPartyProviderResponse.self),
            "authenticateWithThirdPartyProvider": handlerFor(OFAuthorizationResponse.self),
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
    private func decodeAndHandle<T: Decodable>(_ type: T.Type, from data: Any, method: String) {
        do {
            let jsonData: Data
            if let dict = data as? [String: Any] {
                jsonData = try JSONSerialization.data(withJSONObject: dict, options: [])
            } else if let str = data as? String, let d = str.data(using: .utf8) {
                jsonData = d
            } else {
                print("Data is not valid JSON for \(method)")
                return
            }
            let decoded = try JSONDecoder().decode(T.self, from: jsonData)
            NotificationCenter.default.post(name: Notification.Name(method), object: decoded)
            print("Decoded \(method) data:", decoded)
            // You can now send `decoded` to your delegate, publisher, or state
        } catch {
            print("Decoding error for \(method):", error)
        }
    }

    private func handleError(_ dict: [String: Any], method: String) {
        let errorMsg = dict["error"] as? String ?? "Unknown error"
        print("\(method) error: \(errorMsg)")
    }
}
