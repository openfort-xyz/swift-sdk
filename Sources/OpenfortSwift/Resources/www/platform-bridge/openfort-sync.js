//
//  openfort-sync.js
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//

window.logInWithEmailPasswordSync = function({ email, password, ecosystemGame }) {
    window.openfort.logInWithEmailPassword(email, password, ecosystemGame)
        .then(result => {
            window.webkit.messageHandlers.userHandler.postMessage({ method: 'logInWithEmailPassword', success: true, data: result });
        })
        .catch(error => {
            window.webkit.messageHandlers.userHandler.postMessage({ method: 'logInWithEmailPassword', success: false, error: error && error.message ? error.message : String(error) });
        });
};
