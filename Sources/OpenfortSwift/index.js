document.addEventListener('DOMContentLoaded', async () => {
    const storage = new KeychainStorage();
    
    const openfort = new Openfort({
        baseConfiguration: {
            publishableKey: 'pk_test_15238963-23a6-5e6b-a32c-8b8f27414db7',
        },
        shieldConfiguration: {
            shieldPublishableKey: '3a3ef549-5d4c-4f6d-b5cf-42881c23c2de',
            shieldEncryptionKey: 'AnOZE0fPHC4+n+8jpg9mCNXmPMVY0eRVewi7dQ/7G2yv',
        },
        overrides: {
            iframeUrl: 'http://localhost:5173',
            storage: storage,
        },
    });
    
    window.openfort = openfort;

});
