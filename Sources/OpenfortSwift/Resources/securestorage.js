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
    window.addEventListener(
      'message',
      (evt) => {
        const raw = evt && evt.data;
        const msg = typeof raw === 'string' ? (() => { try { return JSON.parse(raw); } catch { return null; } })() : raw;
        if (!msg) return;

        const { event, data } = msg;
        if (!isSecureStorageEvent(event)) return;

        // 🔒 IMPORTANT: ignore responses (they have data.success)
        if (data && Object.prototype.hasOwnProperty.call(data, 'success')) {
          return; // it's a response from Swift/SDK, do NOT forward
        }

        // Only forward genuine requests to Swift
        try {
          postToSwift(msg); // your existing bridge to window.webkit.messageHandlers.secureHandler.postMessage(...)
        } catch (error) {
          // optional: console.warn('Failed to forward to Swift', error);
        }
      },
      true // capture phase
    );
})();
