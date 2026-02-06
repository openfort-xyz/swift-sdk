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


    /// Logs in with email & password.
    ///
    /// Calls `window.logInWithEmailPasswordSync(...)` in the WebView, waits for completion, and returns an optional authorization payload.
    /// - Parameter params: Email/password credentials (`OFLogInWithEmailPasswordParams`).
    /// - Returns: Optional `OFAuthResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func logInWithEmailPassword(params: OFLogInWithEmailPasswordParams) async throws -> OFAuthResponse? {
        let method = OFMethods.logInWithEmailPassword
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.logInWithEmailPasswordSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.logInWithEmailPassword
        )
    }

    /// Logs in with email & password (completion-based API).
    /// - Parameters:
    ///   - params: Email/password credentials (`OFLogInWithEmailPasswordParams`).
    ///   - completion: Called with an optional `OFAuthResponse` or an error.
    public func logInWithEmailPassword(params: OFLogInWithEmailPasswordParams, completion: @escaping (Result<OFAuthResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await logInWithEmailPassword(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Logs out the current user.
    ///
    /// Calls `window.logoutSync()` and waits for completion.
    /// - Throws: An error from the JS bridge.
    public func logOut() async throws {
        let method = OFMethods.logOut
        try await evaluateAndObserveVoidAsync(
            js: "window.logoutSync();",
            method: method,
            errorDomain: OFErrorDomains.logOut
        )
    }

    /// Logs out the current user (completion-based API).
    /// - Parameter completion: Called with `Void` on success or an error.
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

    /// Signs up a guest user.
    ///
    /// Calls `window.signUpGuestSync()` and returns an optional sign-up response.
    /// - Returns: Optional `OFSignUpResponse` on success.
    /// - Throws: An error from the JS bridge.
    public func signUpGuest() async throws -> OFSignUpResponse? {
        let method = OFMethods.signUpGuest
        return try await evaluateAndObserveAsync(
            js: "window.signUpGuestSync();",
            method: method,
            errorDomain: OFErrorDomains.signUpGuest
        )
    }

    /// Signs up a guest user (completion-based API).
    /// - Parameter completion: Called with an optional `OFSignUpResponse` or an error.
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

    /// Signs up with email & password.
    ///
    /// Calls `window.signUpWithEmailPasswordSync(...)` with the provided parameters.
    /// - Parameter params: Sign-up data (`OFSignUpWithEmailPasswordParams`).
    /// - Returns: Optional `OFSignUpResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func signUpWithEmailPassword(params: OFSignUpWithEmailPasswordParams) async throws -> OFSignUpResponse? {
        let method = OFMethods.signUpWithEmailPassword
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.signUpWithEmailPasswordSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.signUpWithEmailPassword
        )
    }

    /// Signs up with email & password (completion-based API).
    /// - Parameters:
    ///   - params: Sign-up data (`OFSignUpWithEmailPasswordParams`).
    ///   - completion: Called with an optional `OFSignUpResponse` or an error.
    public func signUpWithEmailPassword(params: OFSignUpWithEmailPasswordParams, completion: @escaping (Result<OFSignUpResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await signUpWithEmailPassword(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Resets the user's password.
    ///
    /// Calls `window.resetPasswordSync(...)` and waits for completion.
    /// - Parameter params: Reset data (`OFResetPasswordParams`).
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Resets the user's password (completion-based API).
    /// - Parameters:
    ///   - params: Reset data (`OFResetPasswordParams`).
    ///   - completion: Called with `Void` on success or an error.
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

    /// Requests a password reset email.
    ///
    /// Calls `window.requestResetPasswordSync(...)`.
    /// - Parameter params: Request data (`OFRequestResetPasswordParams`).
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Requests a password reset email (completion-based API).
    /// - Parameters:
    ///   - params: Request data (`OFRequestResetPasswordParams`).
    ///   - completion: Called with `Void` on success or an error.
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

    /// Requests an email verification message.
    ///
    /// Calls `window.requestEmailVerificationSync(...)`.
    /// - Parameter params: Request data (`OFRequestEmailVerificationParams`).
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Requests an email verification message (completion-based API).
    /// - Parameters:
    ///   - params: Request data (`OFRequestEmailVerificationParams`).
    ///   - completion: Called with `Void` on success or an error.
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

    /// Verifies the user's email.
    ///
    /// Calls `window.verifyEmailSync(...)` and waits for completion.
    /// - Parameter params: Verify data (`OFVerifyEmailParams`).
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Verifies the user's email (completion-based API).
    /// - Parameters:
    ///   - params: Verify data (`OFVerifyEmailParams`).
    ///   - completion: Called with `Void` on success or an error.
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

    /// Initializes an OAuth flow.
    ///
    /// Calls `window.initOAuthSync(...)` and returns an optional response containing redirect info.
    /// - Parameter params: Init data (`OFInitOAuthParams`).
    /// - Returns: Optional `OFInitOAuthResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Initializes an OAuth flow (completion-based API).
    /// - Parameters:
    ///   - params: Init data (`OFInitOAuthParams`).
    ///   - completion: Called with an optional `OFInitOAuthResponse` or an error.
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

    /// Unlinks an OAuth provider from the current account.
    ///
    /// Calls `window.unlinkOAuthSync(...)`.
    /// - Parameter params: Unlink data (`OFUnlinkOAuthParams`).
    /// - Returns: Optional `OFUnlinkOAuthResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Unlinks an OAuth provider (completion-based API).
    /// - Parameters:
    ///   - params: Unlink data (`OFUnlinkOAuthParams`).
    ///   - completion: Called with an optional `OFUnlinkOAuthResponse` or an error.
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

    /// Logs in using an ID token (third-party identity provider).
    ///
    /// Calls `window.loginWithIdTokenSync(...)`.
    /// - Parameter params: Login data (`OFLoginWithIdTokenParams`).
    /// - Returns: Optional `OFLoginWithIdTokenResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Logs in using an ID token (completion-based API).
    /// - Parameters:
    ///   - params: Login data (`OFLoginWithIdTokenParams`).
    ///   - completion: Called with an optional `OFLoginWithIdTokenResponse` or an error.
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

    /// Links an external wallet to the current player.
    ///
    /// Calls `window.linkWalletSync(...)` in the web context.
    /// - Parameter params: Link data (`OFLinkWalletParams`).
    /// - Returns: Optional `OFLinkWalletResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Links an external wallet (completion-based API).
    /// - Parameters:
    ///   - params: Link data (`OFLinkWalletParams`).
    ///   - completion: Called with an optional `OFLinkWalletResponse` or an error.
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

    /// Initializes linking of an OAuth provider.
    ///
    /// Calls `window.initLinkOAuthSync(...)`.
    /// - Parameter params: Init data (`OFInitLinkOAuthParams`).
    /// - Returns: Optional `OFInitLinkOAuthResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Initializes linking of an OAuth provider (completion-based API).
    /// - Parameters:
    ///   - params: Init data (`OFInitLinkOAuthParams`).
    ///   - completion: Called with an optional `OFInitLinkOAuthResponse` or an error.
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

    /// Polls the OAuth result using the provided key.
    ///
    /// Calls `window.poolOAuthSync(key)` and returns the OAuth result once available.
    /// - Parameter key: The pooling key obtained from init.
    /// - Returns: Optional `OFPoolOAuthResponse` on success.
    /// - Throws: An error from the JS bridge.
    public func poolOAuth(key: String) async throws -> OFPoolOAuthResponse? {
        let method = OFMethods.poolOAuth
        return try await evaluateAndObserveAsync(
            js: "window.poolOAuthSync(\(key));",
            method: method,
            errorDomain: OFErrorDomains.poolOAuth
        )
    }

    /// Polls the OAuth result (completion-based API).
    /// - Parameters:
    ///   - key: The pooling key obtained from init.
    ///   - completion: Called with an optional `OFPoolOAuthResponse` or an error.
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

    /// Initializes a Sign-In with Ethereum (SIWE) flow and returns the nonce and metadata.
    ///
    /// Calls `window.initSIWESync(...)`.
    /// - Parameter params: Init data (`OFInitSIWEParams`).
    /// - Returns: Optional `OFSIWEInitResponse` (includes `address`, `nonce`, `expiresAt`).
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func initSIWE(params: OFInitSIWEParams) async throws -> OFSIWEInitResponse? {
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

    /// Initializes a SIWE flow (completion-based API).
    /// - Parameters:
    ///   - params: Init data (`OFInitSIWEParams`).
    ///   - completion: Called with an optional `OFSIWEInitResponse` or an error.
    public func initSIWE(params: OFInitSIWEParams, completion: @escaping (Result<OFSIWEInitResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await initSIWE(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Unlinks a wallet from the current player.
    ///
    /// Calls `window.unlinkWalletSync(...)`.
    /// - Parameter params: Unlink data (`OFUnlinkWalletParams`).
    /// - Returns: Optional `OFUnlinkWalletResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Unlinks a wallet (completion-based API).
    /// - Parameters:
    ///   - params: Unlink data (`OFUnlinkWalletParams`).
    ///   - completion: Called with an optional `OFUnlinkWalletResponse` or an error.
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

    /// Authenticates a player using Sign-In with Ethereum (SIWE).
    ///
    /// Calls `window.authenticateWithSIWESync(...)`.
    /// - Parameter params: Auth data (`OFAuthenticateWithSIWEParams`).
    /// - Returns: Optional `OFAuthenticateWithSIWEResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Authenticates with SIWE (completion-based API).
    /// - Parameters:
    ///   - params: Auth data (`OFAuthenticateWithSIWEParams`).
    ///   - completion: Called with an optional `OFAuthenticateWithSIWEResponse` or an error.
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

    /// Stores credential tokens for the current player.
    ///
    /// Calls `window.storeCredentialsSync(...)` and waits for completion.
    /// - Parameter params: Store data (`OFStoreCredentialsParams`).
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
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

    /// Stores credential tokens (completion-based API).
    /// - Parameters:
    ///   - params: Store data (`OFStoreCredentialsParams`).
    ///   - completion: Called with `Void` on success or an error.
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

    // MARK: - Email OTP Methods

    /// Requests an email OTP to be sent to the given address.
    ///
    /// Calls `window.requestEmailOtpSync(...)` and waits for completion.
    /// - Parameter params: Request data (`OFRequestEmailOtpParams`).
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func requestEmailOtp(params: OFRequestEmailOtpParams) async throws {
        let method = OFMethods.requestEmailOtp
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        try await evaluateAndObserveVoidAsync(
            js: "window.requestEmailOtpSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.requestEmailOtp
        )
    }

    /// Requests an email OTP (completion-based API).
    /// - Parameters:
    ///   - params: Request data (`OFRequestEmailOtpParams`).
    ///   - completion: Called with `Void` on success or an error.
    public func requestEmailOtp(params: OFRequestEmailOtpParams, completion: @escaping (Result<Void, Error>) -> Void) {
        Task {
            do {
                try await requestEmailOtp(params: params)
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Logs in using an email OTP.
    ///
    /// Calls `window.logInWithEmailOtpSync(...)` and returns an optional authorization response.
    /// - Parameter params: Login data (`OFLogInWithEmailOtpParams`).
    /// - Returns: Optional `OFAuthResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func logInWithEmailOtp(params: OFLogInWithEmailOtpParams) async throws -> OFAuthResponse? {
        let method = OFMethods.logInWithEmailOtp
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.logInWithEmailOtpSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.logInWithEmailOtp
        )
    }

    /// Logs in using an email OTP (completion-based API).
    /// - Parameters:
    ///   - params: Login data (`OFLogInWithEmailOtpParams`).
    ///   - completion: Called with an optional `OFAuthResponse` or an error.
    public func logInWithEmailOtp(params: OFLogInWithEmailOtpParams, completion: @escaping (Result<OFAuthResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await logInWithEmailOtp(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    // MARK: - Phone OTP Methods

    /// Requests a phone OTP to be sent to the given number.
    ///
    /// Calls `window.requestPhoneOtpSync(...)` and waits for completion.
    /// - Parameter params: Request data (`OFRequestPhoneOtpParams`).
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func requestPhoneOtp(params: OFRequestPhoneOtpParams) async throws {
        let method = OFMethods.requestPhoneOtp
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        try await evaluateAndObserveVoidAsync(
            js: "window.requestPhoneOtpSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.requestPhoneOtp
        )
    }

    /// Requests a phone OTP (completion-based API).
    /// - Parameters:
    ///   - params: Request data (`OFRequestPhoneOtpParams`).
    ///   - completion: Called with `Void` on success or an error.
    public func requestPhoneOtp(params: OFRequestPhoneOtpParams, completion: @escaping (Result<Void, Error>) -> Void) {
        Task {
            do {
                try await requestPhoneOtp(params: params)
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Logs in using a phone OTP.
    ///
    /// Calls `window.logInWithPhoneOtpSync(...)` and returns an optional authorization response.
    /// - Parameter params: Login data (`OFLogInWithPhoneOtpParams`).
    /// - Returns: Optional `OFAuthResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func logInWithPhoneOtp(params: OFLogInWithPhoneOtpParams) async throws -> OFAuthResponse? {
        let method = OFMethods.logInWithPhoneOtp
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.logInWithPhoneOtpSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.logInWithPhoneOtp
        )
    }

    /// Logs in using a phone OTP (completion-based API).
    /// - Parameters:
    ///   - params: Login data (`OFLogInWithPhoneOtpParams`).
    ///   - completion: Called with an optional `OFAuthResponse` or an error.
    public func logInWithPhoneOtp(params: OFLogInWithPhoneOtpParams, completion: @escaping (Result<OFAuthResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await logInWithPhoneOtp(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Links a phone number using OTP to the current player.
    ///
    /// Calls `window.linkPhoneOtpSync(...)` and returns an optional authorization response.
    /// - Parameter params: Link data (`OFLinkPhoneOtpParams`).
    /// - Returns: Optional `OFAuthResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func linkPhoneOtp(params: OFLinkPhoneOtpParams) async throws -> OFAuthResponse? {
        let method = OFMethods.linkPhoneOtp
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.linkPhoneOtpSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.linkPhoneOtp
        )
    }

    /// Links a phone number using OTP (completion-based API).
    /// - Parameters:
    ///   - params: Link data (`OFLinkPhoneOtpParams`).
    ///   - completion: Called with an optional `OFAuthResponse` or an error.
    public func linkPhoneOtp(params: OFLinkPhoneOtpParams, completion: @escaping (Result<OFAuthResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await linkPhoneOtp(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    // MARK: - Email Verification OTP

    /// Verifies an email address using an OTP code.
    ///
    /// Calls `window.verifyEmailOtpSync(...)` and waits for completion.
    /// - Parameter params: Verify data (`OFVerifyEmailOtpParams`).
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func verifyEmailOtp(params: OFVerifyEmailOtpParams) async throws {
        let method = OFMethods.verifyEmailOtp
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        try await evaluateAndObserveVoidAsync(
            js: "window.verifyEmailOtpSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.verifyEmailOtp
        )
    }

    /// Verifies an email address using an OTP code (completion-based API).
    /// - Parameters:
    ///   - params: Verify data (`OFVerifyEmailOtpParams`).
    ///   - completion: Called with `Void` on success or an error.
    public func verifyEmailOtp(params: OFVerifyEmailOtpParams, completion: @escaping (Result<Void, Error>) -> Void) {
        Task {
            do {
                try await verifyEmailOtp(params: params)
                completion(.success(()))
            } catch {
                completion(.failure(error))
            }
        }
    }

    // MARK: - SIWE Authentication Methods

    /// Logs in using Sign-In with Ethereum (SIWE).
    ///
    /// Calls `window.loginWithSiweSync(...)` and returns an optional authorization response.
    /// - Parameter params: Login data (`OFLoginWithSiweParams`).
    /// - Returns: Optional `OFAuthResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func loginWithSiwe(params: OFLoginWithSiweParams) async throws -> OFAuthResponse? {
        let method = OFMethods.loginWithSiwe
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.loginWithSiweSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.loginWithSiwe
        )
    }

    /// Logs in using SIWE (completion-based API).
    /// - Parameters:
    ///   - params: Login data (`OFLoginWithSiweParams`).
    ///   - completion: Called with an optional `OFAuthResponse` or an error.
    public func loginWithSiwe(params: OFLoginWithSiweParams, completion: @escaping (Result<OFAuthResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await loginWithSiwe(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Initializes linking a SIWE wallet to the current player.
    ///
    /// Calls `window.initLinkSiweSync(...)` and returns an optional SIWE init response.
    /// - Parameter params: Init data (`OFInitLinkSiweParams`).
    /// - Returns: Optional `OFSIWEInitResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func initLinkSiwe(params: OFInitLinkSiweParams) async throws -> OFSIWEInitResponse? {
        let method = OFMethods.initLinkSiwe
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.initLinkSiweSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.initLinkSiwe
        )
    }

    /// Initializes linking a SIWE wallet (completion-based API).
    /// - Parameters:
    ///   - params: Init data (`OFInitLinkSiweParams`).
    ///   - completion: Called with an optional `OFSIWEInitResponse` or an error.
    public func initLinkSiwe(params: OFInitLinkSiweParams, completion: @escaping (Result<OFSIWEInitResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await initLinkSiwe(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    /// Links a wallet using SIWE to the current player.
    ///
    /// Calls `window.linkWithSiweSync(...)` and returns an optional link wallet response.
    /// - Parameter params: Link data (`OFLinkWithSiweParams`).
    /// - Returns: Optional `OFLinkWalletResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func linkWithSiwe(params: OFLinkWithSiweParams) async throws -> OFLinkWalletResponse? {
        let method = OFMethods.linkWithSiwe
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.linkWithSiweSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.linkWithSiwe
        )
    }

    /// Links a wallet using SIWE (completion-based API).
    /// - Parameters:
    ///   - params: Link data (`OFLinkWithSiweParams`).
    ///   - completion: Called with an optional `OFLinkWalletResponse` or an error.
    public func linkWithSiwe(params: OFLinkWithSiweParams, completion: @escaping (Result<OFLinkWalletResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await linkWithSiwe(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }

    // MARK: - Add Email

    /// Adds an email address to the current player's account.
    ///
    /// Calls `window.addEmailSync(...)` and returns an optional add email response.
    /// - Parameter params: Add email data (`OFAddEmailParams`).
    /// - Returns: Optional `OFAddEmailResponse` on success.
    /// - Throws: `OFError.encodingFailed` or an error from the JS bridge.
    public func addEmail(params: OFAddEmailParams) async throws -> OFAddEmailResponse? {
        let method = OFMethods.addEmail
        guard let jsonString = encodeToJSONString(params) else {
            throw OFError.encodingFailed
        }
        return try await evaluateAndObserveAsync(
            js: "window.addEmailSync(\(jsonString));",
            method: method,
            errorDomain: OFErrorDomains.addEmail
        )
    }

    /// Adds an email address (completion-based API).
    /// - Parameters:
    ///   - params: Add email data (`OFAddEmailParams`).
    ///   - completion: Called with an optional `OFAddEmailResponse` or an error.
    public func addEmail(params: OFAddEmailParams, completion: @escaping (Result<OFAddEmailResponse?, Error>) -> Void) {
        Task {
            do {
                let result = try await addEmail(params: params)
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }
}
