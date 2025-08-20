window.isSwift = true;
window.shouldUseAppBackedStorage = true;

// --- Secure Storage Bridge (JS <-> Swift) -----------------------------------

(function () {
  const HANDLER_NAME = 'secureHandler';
  const TIMEOUT_MS = 10000;

  const pending = new Map(); // id -> { resolve, reject, timer }

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

  // Receive responses coming *from Swift* (Swift posts via window.postMessage)
  window.addEventListener(
    'message',
    (evt) => {
      const data = evt && evt.data;
      if (!data || data.__fromSwift !== true || typeof data.id === 'undefined') return;

      const entry = pending.get(data.id);
      if (!entry) return;

      clearTimeout(entry.timer);
      pending.delete(data.id);
      entry.resolve(data);
    },
    true
  );

  // Forward a message to Swift and await the response
  function roundTrip(message) {
    return new Promise((resolve, reject) => {
      const id = message.id;
      message.id = id;

      const timer = setTimeout(() => {
        pending.delete(id);
        reject(new Error('Secure storage request timed out'));
      }, TIMEOUT_MS);

      pending.set(id, { resolve, reject, timer });

      // Tag so Swift can distinguish origin if needed
      const toSwift = { ...message };
      postToSwift(toSwift);
    });
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
    async (evt) => {
      const msg = evt && evt.data;
      // Ignore messages that originate from Swift or were posted by this bridge to avoid loops
      if (!msg || msg.__fromSwift === true || msg.__fromSecureBridge === true) return;

      const { event } = msg;
      if (!isSecureStorageEvent(event)) return;

      try {
        const response = await roundTrip(msg);
        // Post response back to the lib and tag it so this listener ignores it
        window.postMessage({ ...response, __fromSecureBridge: true }, '*');
      } catch (error) {
        const fail = {
          event,
          id: msg.id ?? null,
          data: { success: false, value: null, error: String(error && error.message ? error.message : error) },
          __fromSecureBridge: true
        };
        window.postMessage(fail, '*');
      }
    },
    true
  );
})();
