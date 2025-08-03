//
//  OFAuthorizable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//

@preconcurrency import Foundation

public protocol OFAuthorizable: OFOpenfortRootable {}

// MARK: - Openfort AuthApi Methods

extension OFAuthorizable {
    
    public func loginWith(params: OFAuthEmailPasswordParams, completion: @escaping (Result<OFAuthorizationResponse, Error>) -> Void) {
        
        let method = OFMethods.loginWith
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.logInWithEmailPasswordSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.logInWithEmailPassword, completion: completion)
    }
    
    public func logOut(completion: @escaping (Result<Any?, Error>) -> Void) {
        let method = OFMethods.logOut
        let js = "window.logoutSync();"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.logOut, completion: completion)
    }
    
    public func signUpGuest(completion: @escaping (Result<OFSignUpResponse?, Error>) -> Void) {
        let method = OFMethods.signUpGuest
        let js = "window.signUpGuestSync();"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.signUpGuest, completion: completion)
    }
    
    public func signUpWith(params: OFSignUpWithEmailPasswordParams, completion: @escaping (Result<OFSignUpResponse, Error>) -> Void) {
        
        let method = OFMethods.signUpWith
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.signUpWithEmailPasswordSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.signUpWithEmailPassword, completion: completion)
    }
    
    public func linkEmailPassword(params: OFLinkEmailPasswordParams, completion: @escaping (Result<OFLinkEmailPasswordResponse, Error>) -> Void) {
        
        let method = OFMethods.linkEmailPassword
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.linkEmailPasswordSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.linkEmailPassword, completion: completion)
    }
    
    public func unlinkEmailPassword(params: OFUnlinkEmailPasswordParams, completion: @escaping (Result<OFUnlinkEmailPasswordResponse, Error>) -> Void) {
        
        let method = OFMethods.unlinkEmailPassword
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.unlinkEmailPasswordSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.unlinkEmailPassword, completion: completion)
    }
    
    public func resetPassword(params: OFResetPasswordParams, completion: @escaping (Result<OFResetPasswordResponse, Error>) -> Void) {
        
        let method = OFMethods.resetPassword
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.resetPasswordSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.resetPassword, completion: completion)
    }
    
    public func requestResetPassword(params: OFRequestResetPasswordParams, completion: @escaping (Result<OFRequestResetPasswordResponse, Error>) -> Void) {
        
        let method = OFMethods.requestResetPassword
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.requestResetPasswordSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.requestResetPassword, completion: completion)
    }
    
    public func requestEmailVerification(params: OFRequestEmailVerificationParams, completion: @escaping (Result<OFRequestEmailVerificationResponse, Error>) -> Void) {
        
        let method = OFMethods.requestEmailVerification
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.requestEmailVerificationSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.requestEmailVerification, completion: completion)
    }
    
    public func verifyEmail(params: OFVerifyEmailParams, completion: @escaping (Result<OFVerifyEmailResponse, Error>) -> Void) {
        
        let method = OFMethods.verifyEmail
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.verifyEmailSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.verifyEmail, completion: completion)
    }
    
    public func initOAuth(params: OFInitOAuthParams, completion: @escaping (Result<OFInitOAuthResponse, Error>) -> Void) {
        
        let method = OFMethods.initOAuth
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.initOAuthSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.initOAuth, completion: completion)
    }
    
    public func unlinkOAuth(params: OFUnlinkOAuthParams, completion: @escaping (Result<OFUnlinkOAuthResponse, Error>) -> Void) {
        
        let method = OFMethods.unlinkOAuth
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.unlinkOAuthSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.unlinkOAuth, completion: completion)
    }
    
    public func loginWithIdToken(params: OFLoginWithIdTokenParams, completion: @escaping (Result<OFLoginWithIdTokenResponse, Error>) -> Void) {
        
        let method = OFMethods.loginWithIdToken
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.loginWithIdTokenSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.loginWithIdToken, completion: completion)
    }
    
    public func linkWallet(params: OFLinkWalletParams, completion: @escaping (Result<OFLinkWalletResponse, Error>) -> Void) {
        
        let method = OFMethods.linkWallet
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.linkWalletSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.linkWallet, completion: completion)
    }
    
    public func initLinkOAuth(params: OFInitLinkOAuthParams, completion: @escaping (Result<OFInitLinkOAuthResponse, Error>) -> Void) {
        
        let method = OFMethods.initLinkOAuth
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.initLinkOAuthSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.initLinkOAuth, completion: completion)
    }
    
    public func poolOAuth(key: String, completion: @escaping (Result<OFPoolOAuthResponse, Error>) -> Void) {
        
        let method = OFMethods.poolOAuth
        let js = "window.poolOAuthSync(\(key));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.poolOAuth, completion: completion)
    }
    
    public func initSIWE(params: OFInitSIWEParams, completion: @escaping (Result<OFInitSIWEResponse, Error>) -> Void) {
        
        let method = OFMethods.initSIWE
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.initSIWESync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.initSIWE, completion: completion)
    }
    
    public func unlinkWallet(params: OFUnlinkWalletParams, completion: @escaping (Result<OFUnlinkWalletResponse, Error>) -> Void) {
        
        let method = OFMethods.unlinkWallet
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.unlinkWalletSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.unlinkWallet, completion: completion)
    }
    
    public func linkThirdPartyProvider(params: OFLinkThirdPartyProviderParams, completion: @escaping (Result<OFLinkThirdPartyProviderResponse, Error>) -> Void) {
        
        let method = OFMethods.linkThirdPartyProvider
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.linkThirdPartyProviderSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.linkThirdPartyProvider, completion: completion)
    }
    
    public func authenticateWithThirdPartyProvider(params: OFAuthenticateWithThirdPartyProviderParams, completion: @escaping (Result<OFAuthenticateWithThirdPartyProviderResponse, Error>) -> Void) {
        
        let method = OFMethods.authenticateWithThirdPartyProvider
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.authenticateWithThirdPartyProviderSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.authenticateWithThirdPartyProvider, completion: completion)
    }
    
    public func authenticateWithSIWE(params: OFAuthenticateWithSIWEParams, completion: @escaping (Result<OFAuthenticateWithSIWEResponse, Error>) -> Void) {
        
        let method = OFMethods.authenticateWithSIWE
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.authenticateWithSIWESync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.authenticateWithSIWE, completion: completion)
    }
    
    public func storeCredentials(params: OFStoreCredentialsParams, completion: @escaping (Result<OFStoreCredentialsResponse, Error>) -> Void) {
        
        let method = OFMethods.storeCredentials
        guard let jsonString = encodeToJSONString(params) else {
            completion(.failure(OFError.encodingFailed))
            return
        }
        let js = "window.storeCredentialsSync(\(jsonString));"
        evaluateAndObserve(js: js, method: method, errorDomain: OFErrorDomains.storeCredentials, completion: completion)
    }
    
}
