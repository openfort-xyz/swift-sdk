window.ReactNativeWebView = window.ReactNativeWebView || {};
window.ReactNativeWebView.injectedObjectJson = function() {
    return JSON.stringify({ shouldUseAppBackedStorage: true });
};
