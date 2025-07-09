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

window.logInWithEmailPasswordSync = function({ email, password, ecosystemGame }) {
    handleResult('loginWithEmailPassword', window.openfort.authInstance.logInWithEmailPassword({ email, password, ecosystemGame }));
};

window.signUpGuestSync = function() {
    handleResult('signUpGuest', window.openfort.signUpGuest());
};

window.signUpWithEmailPasswordSync = function({ email, password, ecosystemGame }) {
    handleResult(
        'signUpWithEmailPassword',
        window.openfort.authInstance.signupEmailPassword(email, password, ecosystemGame)
    );
};

window.linkEmailPasswordSync = function({ email, password, authToken, ecosystemGame }) {
    handleResult(
        'linkEmailPassword',
        window.openfort.authInstance.linkEmailPassword(email, password, authToken, ecosystemGame)
    );
};

window.unlinkEmailPasswordSync = function({ email, authToken }) {
    handleResult(
        'unlinkEmailPassword',
        window.openfort.authInstance.unlinkEmailPassword(email, authToken)
    );
};

window.getSessionSync = function() {
    handleResult('getSession', window.openfort.authInstance.getSession());
};

window.sendPasswordResetEmailSync = function({ email }) {
    handleResult('sendPasswordResetEmail', window.openfort.authInstance.sendPasswordResetEmail(email));
};

window.updatePasswordSync = function({ password }) {
    handleResult('updatePassword', window.openfort.authInstance.updatePassword(password));
};

window.getUserSync = function() {
    handleResult('getUser', window.openfort.authInstance.getUser());
};

window.sendVerificationEmailSync = function() {
    handleResult('sendVerificationEmail', window.openfort.authInstance.sendVerificationEmail());
};

window.isUserVerifiedSync = function() {
    handleResult('isUserVerified', window.openfort.authInstance.isUserVerified());
};

window.reauthenticateWithPasswordSync = function({ password }) {
    handleResult('reauthenticateWithPassword', window.openfort.authInstance.reauthenticateWithPassword(password));
};

window.deleteUserSync = function() {
    handleResult('deleteUser', window.openfort.authInstance.deleteUser());
};

window.resetPasswordSync = function({ email, newPassword }) {
    handleResult('resetPassword', window.openfort.authInstance.resetPassword(email, newPassword));
};

window.requestResetPasswordSync = function({ email }) {
    handleResult('requestResetPassword', window.openfort.authInstance.requestResetPassword(email));
};

window.requestEmailVerificationSync = function({ email }) {
    handleResult('requestEmailVerification', window.openfort.authInstance.requestEmailVerification(email));
};

window.verifyEmailSync = function({ token }) {
    handleResult('verifyEmail', window.openfort.authInstance.verifyEmail(token));
};

window.initOAuthSync = function({ provider }) {
    handleResult('initOAuth', window.openfort.authInstance.initOAuth(provider));
};

window.unlinkOAuthSync = function({ provider }) {
    handleResult('unlinkOAuth', window.openfort.authInstance.unlinkOAuth(provider));
};

window.loginWithIdTokenSync = function({ idToken }) {
    handleResult('loginWithIdToken', window.openfort.authInstance.loginWithIdToken(idToken));
};

window.linkWalletSync = function({ walletAddress }) {
    handleResult('linkWallet', window.openfort.authInstance.linkWallet(walletAddress));
};

window.logoutSync = function() {
    handleResult('logout', window.openfort.authInstance.logout());
};

window.initLinkOAuthSync = function({ provider }) {
    handleResult('initLinkOAuth', window.openfort.authInstance.initLinkOAuth(provider));
};

window.poolOAuthSync = function({ poolId }) {
    handleResult('poolOAuth', window.openfort.authInstance.poolOAuth(poolId));
};

window.initSIWESync = function({ siweData }) {
    handleResult('initSIWE', window.openfort.authInstance.initSIWE(siweData));
};

window.unlinkWalletSync = function({ walletAddress }) {
    handleResult('unlinkWallet', window.openfort.authInstance.unlinkWallet(walletAddress));
};

window.linkThirdPartyProviderSync = function({ provider, credentials }) {
    handleResult('linkThirdPartyProvider', window.openfort.authInstance.linkThirdPartyProvider(provider, credentials));
};

window.authenticateWithThirdPartyProviderSync = function({ provider, credentials }) {
    handleResult('authenticateWithThirdPartyProvider', window.openfort.authInstance.authenticateWithThirdPartyProvider(provider, credentials));
};

window.authenticateWithSIWESync = function({ siweData }) {
    handleResult('authenticateWithSIWE', window.openfort.authInstance.authenticateWithSIWE(siweData));
};

window.storeCredentialsSync = function({ credentials }) {
    handleResult('storeCredentials', window.openfort.authInstance.storeCredentials(credentials));
};
