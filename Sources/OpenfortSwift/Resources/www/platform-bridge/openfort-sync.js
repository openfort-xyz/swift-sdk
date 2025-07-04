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
    handleResult('logInWithEmailPassword', window.openfort.logInWithEmailPassword(email, password, ecosystemGame));
};

window.signUpGuestSync = function() {
    handleResult('signUpGuest', window.openfort.signUpGuest());
};

window.signUpWithEmailPasswordSync = function({ email, password, ecosystemGame }) {
    handleResult(
        'signUpWithEmailPassword',
        window.openfort.signupEmailPassword(email, password, ecosystemGame)
    );
};
