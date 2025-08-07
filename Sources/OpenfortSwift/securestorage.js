window.ReactNativeWebView = window.ReactNativeWebView || {};
window.ReactNativeWebView.injectedObjectJson = function() {
    window.webkit.messageHandlers.userHandler.postMessage({ shouldUseAppBackedStorage : true });
    return JSON.stringify({ shouldUseAppBackedStorage: true });
};

class SecureStorage {
    static _pendingRequests = {};
    static _nextRequestId = 1;

    static _getNextRequestId() {
        const id = SecureStorage._nextRequestId++;
        if (SecureStorage._nextRequestId > Number.MAX_SAFE_INTEGER - 1000) {
            SecureStorage._nextRequestId = 1;
        }
        return id;
    }

    async get(key) {
        return this._send('app:secure-storage:get', { key });
    }

    async set(key, value) {
        return this._send('app:secure-storage:set', { key, value });
    }

    async remove(key) {
        return this._send('app:secure-storage:remove', { key });
    }

    async flush(origin = 'default') {
        return this._send('app:secure-storage:flush', { origin });
    }

    _send(event, data) {
        const id = SecureStorage._getNextRequestId();
        const message = { event, id, data };
        return new Promise((resolve, reject) => {
            SecureStorage._pendingRequests[id] = { resolve, reject, event };
            if (
                window.webkit &&
                window.webkit.messageHandlers &&
                window.webkit.messageHandlers.userHandler
            ) {
                // Optionally support WKWebView messageHandlers for iOS
                window.webkit.messageHandlers.userHandler.postMessage(message);
            } else {
                reject(new Error("No native postMessage handler found"));
            }
        });
    }

    static handleResponse(response) {
        let res = response;
        if (typeof response === 'string') {
            try { res = JSON.parse(response); } catch {}
        }
        const { id, data } = res;
        const pending = SecureStorage._pendingRequests[id];
        if (pending) {
            // Success for get returns value; for set/remove/flush returns success:true/false
            if ( pending.event === "app:secure-storage:get") {
                pending.resolve(data);
            } else {
                pending.resolve(res);
            }
            delete SecureStorage._pendingRequests[id];
        }
    }
}
window.secureStorage = window.secureStorage || new SecureStorage();

window.ReactNativeWebView = window.ReactNativeWebView || {};
window.ReactNativeWebView.postMessage = function(data) {
    window.webkit.messageHandlers.userHandler.postMessage(message);
//    let message;
//    try {
//        message = typeof data === 'string' ? JSON.parse(data) : data;
//    } catch (e) {
//        // Invalid message
//        return;
//    }
//    const { event, id, data: payload } = message;
//
//    try {
//        let result;
//        switch (event) {
//            case 'app:secure-storage:get':
//                result = await window.secureStorage.get(payload.key);
//                break;
//            case 'app:secure-storage:set':
//                result = await window.secureStorage.set(payload.key, payload.value);
//                break;
//            case 'app:secure-storage:remove':
//                result = await window.secureStorage.remove(payload.key);
//                break;
//            case 'app:secure-storage:flush':
//                result = await window.secureStorage.flush(payload.origin);
//                break;
//            default:
//                result = { error: "Unknown event" };
//        }
//    } catch (err) {
//        // Handle errors if needed
//    }
};

window.__secureStorageOnResponse = function(response) {
    SecureStorage.handleResponse(response);
};
