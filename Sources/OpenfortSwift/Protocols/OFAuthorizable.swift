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
    
    public func loginWith(_ email: String, _ password: String, completion: @escaping (Result<OFAuthorizationResponse, Error>) -> Void) {
        let method = OFMethods.loginWith
        let js = "window.logInWithEmailPasswordSync({email: '\(email)', password: '\(password)'})"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.loginWithEmailPassword, completion: completion)
    }
    
    public func logOut(completion: @escaping (Result<OFLogOutResponse, Error>) -> Void) {
        let method = OFMethods.logOut
        let js = "window.logoutSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.logOut, completion: completion)
    }
    
    public func signUpGuest(completion: @escaping (Result<OFSignUpResponse?, Error>) -> Void) {
        let method = OFMethods.signUpGuest
        let js = "window.signUpGuestSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.signUpGuest, completion: completion)
    }
    
    public func signUpWith(email: String, password: String, ecosystemGame: String?, completion: @escaping (Result<OFSignUpResponse, Error>) -> Void) {
        let method = OFMethods.signUpWith
        var js = "window.signUpWithEmailPasswordSync({email: '\(email)', password: '\(password)'"
        if let game = ecosystemGame {
            js += ", ecosystemGame: '\(game)'"
        }
        js += "});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.signUpWithEmailPassword, completion: completion)
    }
    
    public func linkEmailPassword(email: String, password: String, authToken: String, ecosystemGame: String?, completion: @escaping (Result<OFLinkEmailPasswordResponse, Error>) -> Void) {
        let method = OFMethods.linkEmailPassword
        var js = "window.linkEmailPasswordSync({email: '\(email)', password: '\(password)', authToken: '\(authToken)'"
        if let game = ecosystemGame {
            js += ", ecosystemGame: '\(game)'"
        }
        js += "});"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.linkEmailPassword, completion: completion)
    }
    
    public func unlinkEmailPassword(email: String, authToken: String, completion: @escaping (Result<OFUnlinkEmailPasswordResponse, Error>) -> Void) {
        let method = OFMethods.unlinkEmailPassword
        let js = "window.unlinkEmailPasswordSync({email: '\(email)', authToken: '\(authToken)'})"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.unlinkEmailPassword, completion: completion)
    }
    
    public func resetPassword(email: String, newPassword: String, completion: @escaping (Result<OFResetPasswordResponse, Error>) -> Void) {
        let method = OFMethods.resetPassword
        let js = "window.resetPasswordSync({email: '\(email)', newPassword: '\(newPassword)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.resetPassword", completion: completion)
    }
    
    public func requestResetPassword(email: String, completion: @escaping (Result<OFRequestResetPasswordResponse, Error>) -> Void) {
        let method = OFMethods.requestResetPassword
        let js = "window.requestResetPasswordSync({email: '\(email)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.requestResetPassword", completion: completion)
    }
    
    public func requestEmailVerification(email: String, completion: @escaping (Result<OFRequestEmailVerificationResponse, Error>) -> Void) {
        let method = OFMethods.requestEmailVerification
        let js = "window.requestEmailVerificationSync({email: '\(email)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.requestEmailVerification", completion: completion)
    }
    
    public func verifyEmail(token: String, completion: @escaping (Result<OFVerifyEmailResponse, Error>) -> Void) {
        let method = OFMethods.verifyEmail
        let js = "window.verifyEmailSync({token: '\(token)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.verifyEmail", completion: completion)
    }
    
    public func initOAuth(provider: String, completion: @escaping (Result<OFInitOAuthResponse, Error>) -> Void) {
        let method = OFMethods.initOAuth
        let js = "window.initOAuthSync({provider: '\(provider)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.initOAuth", completion: completion)
    }
    
    public func unlinkOAuth(provider: String, completion: @escaping (Result<OFUnlinkOAuthResponse, Error>) -> Void) {
        let method = OFMethods.unlinkOAuth
        let js = "window.unlinkOAuthSync({provider: '\(provider)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.unlinkOAuth", completion: completion)
    }
    
    public func loginWithIdToken(idToken: String, completion: @escaping (Result<OFLoginWithIdTokenResponse, Error>) -> Void) {
        let method = OFMethods.loginWithIdToken
        let js = "window.loginWithIdTokenSync({idToken: '\(idToken)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.loginWithIdToken", completion: completion)
    }
    
    public func linkWallet(walletAddress: String, completion: @escaping (Result<OFLinkWalletResponse, Error>) -> Void) {
        let method = OFMethods.linkWallet
        let js = "window.linkWalletSync({walletAddress: '\(walletAddress)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.linkWallet", completion: completion)
    }
    
    public func initLinkOAuth(provider: String, completion: @escaping (Result<OFInitLinkOAuthResponse, Error>) -> Void) {
        let method = OFMethods.initLinkOAuth
        let js = "window.initLinkOAuthSync({provider: '\(provider)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.initLinkOAuth", completion: completion)
    }
    
    public func poolOAuth(poolId: String, completion: @escaping (Result<OFPoolOAuthResponse, Error>) -> Void) {
        let method = OFMethods.poolOAuth
        let js = "window.poolOAuthSync({poolId: '\(poolId)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.poolOAuth", completion: completion)
    }
    
    public func initSIWE(siweData: String, completion: @escaping (Result<OFInitSIWEResponse, Error>) -> Void) {
        let method = OFMethods.initSIWE
        let js = "window.initSIWESync({siweData: '\(siweData)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.initSIWE", completion: completion)
    }
    
    public func unlinkWallet(walletAddress: String, completion: @escaping (Result<OFUnlinkWalletResponse, Error>) -> Void) {
        let method = OFMethods.unlinkWallet
        let js = "window.unlinkWalletSync({walletAddress: '\(walletAddress)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.unlinkWallet", completion: completion)
    }
    
    public func linkThirdPartyProvider(provider: String, credentials: String, completion: @escaping (Result<OFLinkThirdPartyProviderResponse, Error>) -> Void) {
        let method = OFMethods.linkThirdPartyProvider
        let js = "window.linkThirdPartyProviderSync({provider: '\(provider)', credentials: '\(credentials)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.linkThirdPartyProvider", completion: completion)
    }
    
    public func authenticateWithThirdPartyProvider(provider: String, credentials: String, completion: @escaping (Result<OFAuthenticateWithThirdPartyProviderResponse, Error>) -> Void) {
        let method = OFMethods.authenticateWithThirdPartyProvider
        let js = "window.authenticateWithThirdPartyProviderSync({provider: '\(provider)', credentials: '\(credentials)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.authenticateWithThirdPartyProvider", completion: completion)
    }
    
    public func authenticateWithSIWE(siweData: String, completion: @escaping (Result<OFAuthenticateWithSIWEResponse, Error>) -> Void) {
        let method = OFMethods.authenticateWithSIWE
        let js = "window.authenticateWithSIWESync({siweData: '\(siweData)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.authenticateWithSIWE", completion: completion)
    }
    
    public func storeCredentials(credentials: String, completion: @escaping (Result<OFStoreCredentialsResponse, Error>) -> Void) {
        let method = OFMethods.storeCredentials
        let js = "window.storeCredentialsSync({credentials: '\(credentials)'});"
        evaluateAndDecode(js: js, method: method, errorDomain: "OFErrorDomains.storeCredentials", completion: completion)
    }
}
