//
//  openfort-sync.js
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//
import { logInWithEmailPassword } from 'openfort.js';

function logInWithEmailPasswordSync({
    email: t,
    password: e,
    ecosystemGame: r
}){
    logInWithEmailPassword(t, e, r)
            .then(result => {
                window.webkit.messageHandlers.userHandler.postMessage({ method: 'logInWithEmailPassword', success: true, data: result });
            })
            .catch(error => {
                window.webkit.messageHandlers.userHandler.postMessage({ method: 'logInWithEmailPassword', success: false, error: error && error.message ? error.message : String(error) });
            });
}
