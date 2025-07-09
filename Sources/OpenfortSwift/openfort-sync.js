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

window.logOutSync = function() {
    handleResult('logOut', window.openfort.authInstance.logOut());
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
