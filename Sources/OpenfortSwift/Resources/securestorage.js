window.isSwift = true;
window.shouldUseAppBackedStorage = true;

// --- Secure Storage Bridge (JS <-> Swift) -----------------------------------

(function () {
  const HANDLER_NAME = 'secureHandler';

  function isSwiftAvailable() {
    try {
      return !!(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers[HANDLER_NAME]);
    } catch {
      return false;
    }
  }

  function postToSwift(message) {
    if (!isSwiftAvailable()) {
      throw new Error('Swift message handler is not available');
    }
    window.webkit.messageHandlers[HANDLER_NAME].postMessage(message);
  }

  // Forward a message to Swift (fire-and-forget)
  function forwardToSwift(message) {
    const toSwift = { ...message };
    postToSwift(toSwift);
  }

  function isSecureStorageEvent(evtName) {
    return (
      typeof evtName === 'string' &&
      (evtName === 'app:secure-storage:get' ||
        evtName === 'app:secure-storage:set' ||
        evtName === 'app:secure-storage:remove' ||
        evtName === 'app:secure-storage:flush')
    );
  }

  // Listen for requests from the Openfort lib (posted via window.postMessage)
    // Listen for requests from the Openfort lib (posted via window.postMessage)
    window.addEventListener(
      'message',
      (evt) => {
        const raw = evt && evt.data;
        const msg =
          typeof raw === 'string'
            ? (() => {
                try {
                  return JSON.parse(raw);
                } catch {
                  return null;
                }
              })()
            : raw;
        if (!msg) return;

        // 🔒 Do not forward messages that originated from Swift
        if (msg.__fromSwift === true) return;

        const { event, data } = msg;

        // Only handle secure storage events
        if (!isSecureStorageEvent(event)) return;

        // ✅ Only forward genuine requests to Swift
        try {
          forwardToSwift(msg);
        } catch (error) {
          console.warn('Failed to forward to Swift', error);
        }
      },
      true // capture
    );
})();
