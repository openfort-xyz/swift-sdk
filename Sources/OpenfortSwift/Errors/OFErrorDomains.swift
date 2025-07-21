//
//  OFErrorDomains.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-09.
//


public struct OFErrorDomains {
    // Openfort
    public static let getAccessToken = "OFGetAccessTokenErrorDomain"
    public static let validateAndRefreshToken = "OFValidateAndRefreshTokenErrorDomain"
    
    // AuthInstance
    public static let authenticateWithSIWE = "OFAuthenticateWithSIWEErrorDomain"
    public static let authenticateWithThirdPartyProvider = "OFAuthenticateWithThirdPartyProviderErrorDomain"
    public static let initLinkOAuth = "OFInitLinkOAuthErrorDomain"
    public static let initOAuth = "OFInitOAuthErrorDomain"
    public static let initSIWE = "OFInitSIWEErrorDomain"
    public static let linkEmailPassword = "OFLinkEmailPasswordErrorDomain"
    public static let linkThirdPartyProvider = "OFLinkThirdPartyProviderErrorDomain"
    public static let linkWallet = "OFLinkWalletErrorDomain"
    public static let logInWithEmailPassword = "OFLogInWithEmailPasswordErrorDomain"
    public static let loginWithIdToken = "OFLoginWithIdTokenErrorDomain"
    public static let logOut = "OFLogOutErrorDomain"
    public static let poolOAuth = "OFPoolOAuthErrorDomain"
    public static let resetPassword = "OFResetPasswordErrorDomain"
    public static let requestEmailVerification = "OFRequestEmailVerificationErrorDomain"
    public static let requestResetPassword = "OFRequestResetPasswordErrorDomain"
    public static let signUpGuest = "OFSignUpGuestErrorDomain"
    public static let signUpWithEmailPassword = "OFSignUpWithEmailPasswordErrorDomain"
    public static let storeCredentials = "OFStoreCredentialsErrorDomain"
    public static let unlinkEmailPassword = "OFUnlinkEmailPasswordErrorDomain"
    public static let unlinkOAuth = "OFUnlinkOAuthErrorDomain"
    public static let unlinkWallet = "OFUnlinkWalletErrorDomain"
    public static let verifyEmail = "OFVerifyEmailErrorDomain"
    
    // Proxy
    public static let sendSignatureSessionRequest = "OFSendSignatureSessionRequestErrorDomain"
    public static let sendSignatureTransactionIntentRequest = "OFSendSignatureTransactionIntentRequestErrorDomain"
    
    // UserInstance
    public static let getUserInstance = "OFGetUserInstanceErrorDomain"
    
    // EmbeddedWallet
    public static let configure = "OFConfigureErrorDomain"
    public static let exportPrivateKey = "OFExportPrivateKeyErrorDomain"
    public static let get = "OFGetErrorDomain"
    public static let getEmbeddedState = "OFGetEmbeddedStateErrorDomain"
    public static let getEthereumProvider = "OFGetEthereumProviderErrorDomain"
    public static let getURL = "OFGetURLErrorDomain"
    public static let list = "OFListErrorDomain"
    public static let ping = "OFPingErrorDomain"
    public static let setEmbeddedRecovery = "OFSetEmbeddedRecoveryErrorDomain"
    public static let signMessage = "OFSignMessageErrorDomain"
    public static let signTypedData = "OFSignTypedDataErrorDomain"
    
}
