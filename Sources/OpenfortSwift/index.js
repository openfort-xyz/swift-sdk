class KeychainStorage {
    static _pendingGets = {};
    static _nextRequestId = 1;
    
    async get(key) {
        // Returns a Promise resolving to the string value or null
        const requestId = KeychainStorage._nextRequestId++;
        return new Promise((resolve) => {
            KeychainStorage._pendingGets[requestId] = resolve;
            window.webkit?.messageHandlers?.keychain?.postMessage({ method: "KeychainGet", key: key, requestId: requestId });
        });
    }
    
    save(key, value) {
        window.webkit?.messageHandlers?.keychain?.postMessage({ method: "KeychainSave", key: key, value: value });
    }
    
    remove(key) {
        window.webkit?.messageHandlers?.keychain?.postMessage({ method: "KeychainRemove", key: key });
    }
    
    flush() {
        window.webkit?.messageHandlers?.keychain?.postMessage({ method: "KeychainFlush" });
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
    });
    
    window.openfort = openfort;

});
