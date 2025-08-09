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

    public func loginWith(params: OFAuthEmailPasswordParams) async throws -> OFAuthorizationResponse? {
        let method = OFMethods.loginWith
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.logInWithEmailPasswordSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.logInWithEmailPassword
        )
    }

    public func loginWith(params: OFAuthEmailPasswordParams, completion: @escaping (Result<OFAuthorizationResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await loginWith(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func logOut() async throws {
        let method = OFMethods.logOut
        try await evaluateAndObserveVoidAsync(
            js: "window.logoutSync();",
            method: method,
            errorDomain: OFErrorDomains.logOut
        )
    }

    public func logOut(completion: @escaping (Result<Void, Error>) -> Void) {
        Task {
            do {
                try await logOut()
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func signUpGuest() async throws -> OFSignUpResponse? {
        let method = OFMethods.signUpGuest
        return try await evaluateAndObserveAsync(
            js: "window.signUpGuestSync();",
            method: method,
            errorDomain: OFErrorDomains.signUpGuest
        )
    }

    public func signUpGuest(completion: @escaping (Result<OFSignUpResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await signUpGuest()
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func signUpWith(params: OFSignUpWithEmailPasswordParams) async throws -> OFSignUpResponse? {
        let method = OFMethods.signUpWith
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.signUpWithEmailPasswordSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.signUpWithEmailPassword
        )
    }

    public func signUpWith(params: OFSignUpWithEmailPasswordParams, completion: @escaping (Result<OFSignUpResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await signUpWith(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func linkEmailPassword(params: OFLinkEmailPasswordParams) async throws -> OFLinkEmailPasswordResponse? {
        let method = OFMethods.linkEmailPassword
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.linkEmailPasswordSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.linkEmailPassword
        )
    }

    public func linkEmailPassword(params: OFLinkEmailPasswordParams, completion: @escaping (Result<OFLinkEmailPasswordResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await linkEmailPassword(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func unlinkEmailPassword(params: OFUnlinkEmailPasswordParams) async throws -> OFUnlinkEmailPasswordResponse? {
        let method = OFMethods.unlinkEmailPassword
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.unlinkEmailPasswordSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.unlinkEmailPassword
        )
    }

    public func unlinkEmailPassword(params: OFUnlinkEmailPasswordParams, completion: @escaping (Result<OFUnlinkEmailPasswordResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await unlinkEmailPassword(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func resetPassword(params: OFResetPasswordParams) async throws {
        let method = OFMethods.resetPassword
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        try await evaluateAndObserveVoidAsync(
            js: "window.resetPasswordSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.resetPassword
        )
    }

    public func resetPassword(params: OFResetPasswordParams, completion: @escaping (Result<Void, Error>) -> Void) {
        Task {
            do {
                try await resetPassword(params: params)
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func requestResetPassword(params: OFRequestResetPasswordParams) async throws {
        let method = OFMethods.requestResetPassword
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        try await evaluateAndObserveVoidAsync(
            js: "window.requestResetPasswordSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.requestResetPassword
        )
    }

    public func requestResetPassword(params: OFRequestResetPasswordParams, completion: @escaping (Result<Void, Error>) -> Void) {
        Task {
            do {
                try await requestResetPassword(params: params)
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func requestEmailVerification(params: OFRequestEmailVerificationParams) async throws {
        let method = OFMethods.requestEmailVerification
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        try await evaluateAndObserveVoidAsync(
            js: "window.requestEmailVerificationSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.requestEmailVerification
        )
    }

    public func requestEmailVerification(params: OFRequestEmailVerificationParams, completion: @escaping (Result<Void, Error>) -> Void) {
        Task {
            do {
                try await requestEmailVerification(params: params)
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func verifyEmail(params: OFVerifyEmailParams) async throws {
        let method = OFMethods.verifyEmail
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        try await evaluateAndObserveVoidAsync(
            js: "window.verifyEmailSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.verifyEmail
        )
    }

    public func verifyEmail(params: OFVerifyEmailParams, completion: @escaping (Result<Void, Error>) -> Void) {
        Task {
            do {
                try await verifyEmail(params: params)
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func initOAuth(params: OFInitOAuthParams) async throws -> OFInitOAuthResponse? {
        let method = OFMethods.initOAuth
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.initOAuthSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.initOAuth
        )
    }

    public func initOAuth(params: OFInitOAuthParams, completion: @escaping (Result<OFInitOAuthResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await initOAuth(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func unlinkOAuth(params: OFUnlinkOAuthParams) async throws -> OFUnlinkOAuthResponse? {
        let method = OFMethods.unlinkOAuth
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.unlinkOAuthSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.unlinkOAuth
        )
    }

    public func unlinkOAuth(params: OFUnlinkOAuthParams, completion: @escaping (Result<OFUnlinkOAuthResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await unlinkOAuth(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func loginWithIdToken(params: OFLoginWithIdTokenParams) async throws -> OFLoginWithIdTokenResponse? {
        let method = OFMethods.loginWithIdToken
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.loginWithIdTokenSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.loginWithIdToken
        )
    }

    public func loginWithIdToken(params: OFLoginWithIdTokenParams, completion: @escaping (Result<OFLoginWithIdTokenResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await loginWithIdToken(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func linkWallet(params: OFLinkWalletParams) async throws -> OFLinkWalletResponse? {
        let method = OFMethods.linkWallet
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.linkWalletSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.linkWallet
        )
    }

    public func linkWallet(params: OFLinkWalletParams, completion: @escaping (Result<OFLinkWalletResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await linkWallet(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func initLinkOAuth(params: OFInitLinkOAuthParams) async throws -> OFInitLinkOAuthResponse? {
        let method = OFMethods.initLinkOAuth
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.initLinkOAuthSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.initLinkOAuth
        )
    }

    public func initLinkOAuth(params: OFInitLinkOAuthParams, completion: @escaping (Result<OFInitLinkOAuthResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await initLinkOAuth(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func poolOAuth(key: String) async throws -> OFPoolOAuthResponse? {
        let method = OFMethods.poolOAuth
        return try await evaluateAndObserveAsync(
            js: "window.poolOAuthSync(\(key));",
            method: method,
            errorDomain: OFErrorDomains.poolOAuth
        )
    }

    public func poolOAuth(key: String, completion: @escaping (Result<OFPoolOAuthResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await poolOAuth(key: key)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func initSIWE(params: OFInitSIWEParams) async throws -> OFInitSIWEResponse? {
        let method = OFMethods.initSIWE
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.initSIWESync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.initSIWE
        )
    }

    public func initSIWE(params: OFInitSIWEParams, completion: @escaping (Result<OFInitSIWEResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await initSIWE(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func unlinkWallet(params: OFUnlinkWalletParams) async throws -> OFUnlinkWalletResponse? {
        let method = OFMethods.unlinkWallet
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.unlinkWalletSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.unlinkWallet
        )
    }

    public func unlinkWallet(params: OFUnlinkWalletParams, completion: @escaping (Result<OFUnlinkWalletResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await unlinkWallet(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func linkThirdPartyProvider(params: OFLinkThirdPartyProviderParams) async throws -> OFAuthPlayerResponse? {
        let method = OFMethods.linkThirdPartyProvider
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.linkThirdPartyProviderSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.linkThirdPartyProvider
        )
    }

    public func linkThirdPartyProvider(params: OFLinkThirdPartyProviderParams, completion: @escaping (Result<OFAuthPlayerResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await linkThirdPartyProvider(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func authenticateWithThirdPartyProvider(params: OFAuthenticateWithThirdPartyProviderParams) async throws -> OFAuthenticateWithThirdPartyProviderResponse? {
        let method = OFMethods.authenticateWithThirdPartyProvider
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.authenticateWithThirdPartyProviderSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.authenticateWithThirdPartyProvider
        )
    }

    public func authenticateWithThirdPartyProvider(params: OFAuthenticateWithThirdPartyProviderParams, completion: @escaping (Result<OFAuthenticateWithThirdPartyProviderResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await authenticateWithThirdPartyProvider(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func authenticateWithSIWE(params: OFAuthenticateWithSIWEParams) async throws -> OFAuthenticateWithSIWEResponse? {
        let method = OFMethods.authenticateWithSIWE
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.authenticateWithSIWESync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.authenticateWithSIWE
        )
    }

    public func authenticateWithSIWE(params: OFAuthenticateWithSIWEParams, completion: @escaping (Result<OFAuthenticateWithSIWEResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await authenticateWithSIWE(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    public func storeCredentials(params: OFStoreCredentialsParams) async throws  {
        let method = OFMethods.storeCredentials
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        try await evaluateAndObserveVoidAsync(
            js: "window.storeCredentialsSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.storeCredentials
        )
    }

    public func storeCredentials(params: OFStoreCredentialsParams, completion: @escaping (Result<Void, Error>) -> Void) {
        Task {
            do {
                 try await storeCredentials(params: params)
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }
}
