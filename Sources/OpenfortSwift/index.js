class KeychainStorage {
    static _pendingGets = {};
    static _pendingOps = {};
    static _nextRequestId = 1;
    
    async get(key) {
        // Returns a Promise resolving to the string value or null
        const requestId = KeychainStorage._nextRequestId++;
        return new Promise((resolve) => {
            KeychainStorage._pendingGets[requestId] = resolve;
            window.webkit?.messageHandlers?.userHandler?.postMessage({ method: "KeychainGet", key: key, requestId: requestId });
        });
    }
    
    async save(key, value) {
        const requestId = KeychainStorage._nextRequestId++;
        return new Promise((resolve) => {
            KeychainStorage._pendingOps[requestId] = resolve;
            window.webkit?.messageHandlers?.userHandler?.postMessage({ method: "KeychainSave", key: key, value: value, requestId: requestId });
        });
    }
    
    async remove(key) {
        const requestId = KeychainStorage._nextRequestId++;
        return new Promise((resolve) => {
            KeychainStorage._pendingOps[requestId] = resolve;
            window.webkit?.messageHandlers?.userHandler?.postMessage({ method: "KeychainRemove", key: key, requestId: requestId });
        });
    }
    
    async flush() {
        const requestId = KeychainStorage._nextRequestId++;
        return new Promise((resolve) => {
            KeychainStorage._pendingOps[requestId] = resolve;
            window.webkit?.messageHandlers?.userHandler?.postMessage({ method: "KeychainFlush", requestId: requestId });
        });
    }
}

// This function will be called by Swift when value is ready
window.__keychainOnGet = function({ requestId, value }) {
    const resolve = KeychainStorage._pendingGets[requestId];
    if (resolve) {
        resolve(value);
        delete KeychainStorage._pendingGets[requestId];
    }
};

// Callback for save, remove, flush
window.__keychainOnOp = function({ requestId }) {
    const resolve = KeychainStorage._pendingOps[requestId];
    if (resolve) {
        resolve();
        delete KeychainStorage._pendingOps[requestId];
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    const storage = new KeychainStorage();
    
    const openfort = new Openfort({
        baseConfiguration: {
            publishableKey: 'pk_test_15238963-23a6-5e6b-a32c-8b8f27414db7',
        },
        shieldConfiguration: {
            shieldPublishableKey: '3a3ef549-5d4c-4f6d-b5cf-42881c23c2de',
            shieldEncryptionKey: 'b9ee1765-d986-4423-b29b-d9172994ea38',
        },
        overrides: {
            storage: storage,
        },
    });
    
    window.openfort = openfort;

});
