window.ReactNativeWebView = window.ReactNativeWebView || {};
window.ReactNativeWebView.injectedObjectJson = function() {
    window.webkit.messageHandlers.userHandler.postMessage({ method: 'shouldUseAppBackedStorage' });
    return JSON.stringify({ shouldUseAppBackedStorage: true });
};
