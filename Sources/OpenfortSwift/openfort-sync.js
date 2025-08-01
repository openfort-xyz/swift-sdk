//
//  openfort-sync.js
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//

function handleResult(method, promise) {
    promise
        .then(result => {
            window.webkit.messageHandlers.userHandler.postMessage({ method: method, success: true, data: result });
        })
        .catch(error => {
            window.webkit.messageHandlers.userHandler.postMessage({ method: method, success: false, error: error && error.message ? error.message : String(error) });
        });
}

// AuthInstance sync methods

window.logInWithEmailPasswordSync = function({ email, password, ecosystemGame }) {
    handleResult('logInWithEmailPassword', window.openfort.authInstance.logInWithEmailPassword({ email, password, ecosystemGame }));
};

window.signUpGuestSync = function() {
    handleResult('signUpGuest', window.openfort.authInstance.signUpGuest());
};

window.signUpWithEmailPasswordSync = function({ email, password, name, ecosystemGame }) {
    const options = name ? { data: { name } } : undefined;
    handleResult(
        'signUpWithEmailPassword',
        window.openfort.authInstance.signUpWithEmailPassword({
            email,
            password,
            options,
            ecosystemGame
        })
    );
};

window.linkEmailPasswordSync = function({ email, password, authToken, ecosystemGame }) {
    handleResult(
        'linkEmailPassword',
        window.openfort.authInstance.linkEmailPassword({ email, password, authToken, ecosystemGame })
    );
};

window.unlinkEmailPasswordSync = function({ email, authToken }) {
    handleResult(
        'unlinkEmailPassword',
        window.openfort.authInstance.unlinkEmailPassword({ email, authToken })
    );
};

window.sendVerificationEmailSync = function() {
    handleResult('sendVerificationEmail', window.openfort.authInstance.sendVerificationEmail());
};

window.isUserVerifiedSync = function() {
    handleResult('isUserVerified', window.openfort.authInstance.isUserVerified());
};

window.reauthenticateWithPasswordSync = function({ password }) {
    handleResult('reauthenticateWithPassword', window.openfort.authInstance.reauthenticateWithPassword({ password }));
};

window.deleteUserSync = function() {
    handleResult('deleteUser', window.openfort.authInstance.deleteUser());
};

window.resetPasswordSync = function({ email, password, state }) {
    handleResult('resetPassword', window.openfort.authInstance.resetPassword({
        email,
        password,
        state
    }));
};

window.requestResetPasswordSync = function({ email, redirectUrl }) {
    handleResult('requestResetPassword', window.openfort.authInstance.requestResetPassword({
        email,
        redirectUrl
    }));
};

window.requestEmailVerificationSync = function({ email, redirectUrl }) {
    handleResult('requestEmailVerification', window.openfort.authInstance.requestEmailVerification({
        email,
        redirectUrl
    }));
};

window.verifyEmailSync = function({ email, state }) {
    handleResult('verifyEmail', window.openfort.authInstance.verifyEmail({
        email,
        state
    }));
};

window.initOAuthSync = function({ provider, options, ecosystemGame }) {
    handleResult('initOAuth', window.openfort.authInstance.initOAuth({
        provider,
        options,
        ecosystemGame
    }));
};

window.unlinkOAuthSync = function({ provider, authToken }) {
    handleResult('unlinkOAuth', window.openfort.authInstance.unlinkOAuth({
        provider,
        authToken
    }));
};

window.loginWithIdTokenSync = function({ provider, token, ecosystemGame }) {
    handleResult('loginWithIdToken', window.openfort.authInstance.loginWithIdToken({
        provider,
        token,
        ecosystemGame
    }));
};

window.linkWalletSync = function({ signature, message, walletClientType, connectorType, authToken }) {
    handleResult('linkWallet', window.openfort.authInstance.linkWallet({
        signature,
        message,
        walletClientType,
        connectorType,
        authToken
    }));
};

window.logoutSync = function() {
    handleResult('logout', window.openfort.authInstance.logout());
};

window.initLinkOAuthSync = function({ provider, authToken, options, ecosystemGame }) {
    handleResult('initLinkOAuth', window.openfort.authInstance.initLinkOAuth({
        provider,
        authToken,
        options,
        ecosystemGame
    }));
};

window.poolOAuthSync = function({ key }) {
    handleResult('poolOAuth', window.openfort.authInstance.poolOAuth({ key }));
};

window.initSIWESync = function({ address, ecosystemGame }) {
    handleResult('initSIWE', window.openfort.authInstance.initSIWE({
        address,
        ecosystemGame
    }));
};

window.unlinkWalletSync = function({ address, authToken }) {
    handleResult('unlinkWallet', window.openfort.authInstance.unlinkWallet({
        address,
        authToken
    }));
};

window.linkThirdPartyProviderSync = function({ provider, token, tokenType }) {
    handleResult('linkThirdPartyProvider', window.openfort.authInstance.linkThirdPartyProvider({
        provider,
        token,
        tokenType
    }));
};

window.authenticateWithThirdPartyProviderSync = function({ provider, token, tokenType, ecosystemGame }) {
    handleResult('authenticateWithThirdPartyProvider', window.openfort.authInstance.authenticateWithThirdPartyProvider({
        provider,
        token,
        tokenType,
        ecosystemGame
    }));
};

window.authenticateWithSIWESync = function({ signature, message, walletClientType, connectorType }) {
    handleResult('authenticateWithSIWE', window.openfort.authInstance.authenticateWithSIWE({
        signature,
        message,
        walletClientType,
        connectorType
    }));
};

window.storeCredentialsSync = function({ provider, token, tokenType, ecosystemGame }) {
    handleResult(
        'storeCredentials',
        window.openfort.authInstance.storeCredentials({
            provider,
            token,
            tokenType,
            ecosystemGame
        })
    );
};

// EmbeddedWalletInstance sync methods

window.signTypedDataSync = function({ domain, types, message }) {
    handleResult('signTypedData', window.openfort.embeddedWalletInstance.signTypedData(domain, types, message));
};

window.getSync = function({ key }) {
    handleResult('get', window.openfort.embeddedWalletInstance.get(key));
};

window.getEthereumProviderSync = function({ options } = {}) {
    handleResult('getEthereumProvider', window.openfort.embeddedWalletInstance.getEthereumProvider(options));
};

window.configureSync = function(params) {
    handleResult('configure', window.openfort.embeddedWalletInstance.configure(params));
};

window.exportPrivateKeySync = function() {
    handleResult('exportPrivateKey', window.openfort.embeddedWalletInstance.exportPrivateKey());
};

window.listSync = function() {
    handleResult('list', window.openfort.embeddedWalletInstance.list());
};

window.pingSync = function({ delay }) {
    handleResult('ping', window.openfort.embeddedWalletInstance.ping(delay));
};

window.signMessageSync = function({ message, options }) {
    handleResult('signMessage', window.openfort.embeddedWalletInstance.signMessage(message, options));
};

window.setEmbeddedRecoverySync = function({ recoveryMethod, recoveryPassword, encryptionSession }) {
    handleResult('setEmbeddedRecovery', window.openfort.embeddedWalletInstance.setEmbeddedRecovery({
        recoveryMethod,
        recoveryPassword,
        encryptionSession
    }));
};

window.getEmbeddedStateSync = function() {
    handleResult('getEmbeddedState', window.openfort.embeddedWalletInstance.getEmbeddedState());
};

window.getURLSync = function() {
    handleResult('getURL', window.openfort.embeddedWalletInstance.getURL());
};

// ProxyInstance sync methods

window.sendSignatureTransactionIntentRequestSync = function({ transactionIntentId, signableHash = null, signature = null, optimistic = false }) {
    handleResult(
        'sendSignatureTransactionIntentRequest',
        window.openfort.proxyInstance.sendSignatureTransactionIntentRequest({ transactionIntentId, signableHash, signature, optimistic })
    );
};

window.sendSignatureSessionRequestSync = function({ sessionId, signature, optimistic }) {
    handleResult(
        'sendSignatureSessionRequest',
        window.openfort.proxyInstance.sendSignatureSessionRequest({ sessionId, signature, optimistic })
    );
};

// UserInstance sync methods

window.getUserSync = function() {
    handleResult('get', window.openfort.authInstance.get());
};

// Openfort sync methods

window.getAccessTokenSync = function() {
    handleResult('getAccessToken', window.openfort.getAccessToken());
};

window.validateAndRefreshTokenSync = function({ forceRefresh } = {}) {
    handleResult('validateAndRefreshToken', window.openfort.validateAndRefreshToken(forceRefresh));
};
