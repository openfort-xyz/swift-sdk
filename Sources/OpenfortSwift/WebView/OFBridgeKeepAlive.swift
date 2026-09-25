//
//  OFBridgeKeepAlive.swift
//  OpenfortSwift
//

import WebKit

/// Keeps the bridge WebView's content process awake while a native caller awaits a reply.
///
/// `OFWebView` is never added to a window, so WebKit treats it as invisible and suspends its
/// WebContent process a few seconds after the last `evaluateJavaScript`. Asynchronous work that
/// openfort-js does in that gap (the embedded-signer iframe during `configure`, `create`, `recover`
/// and signing) then stalls until the next evaluation wakes the process, which the caller sees as a
/// call that never returns. Ticking a no-op script while any call is pending keeps it scheduled.
@MainActor
final class OFBridgeKeepAlive {
    static let shared = OFBridgeKeepAlive()

    private static let tickInterval: TimeInterval = 0.5
    private var pending = 0
    private var timer: Timer?
    private weak var webView: WKWebView?

    func begin(_ webView: WKWebView?) {
        self.webView = webView
        pending += 1
        guard timer == nil else { return }
        timer = Timer.scheduledTimer(withTimeInterval: Self.tickInterval, repeats: true) { [weak self] _ in
            Task { @MainActor in
                self?.webView?.evaluateJavaScript("0") { _, _ in }
            }
        }
    }

    func end() {
        pending = max(0, pending - 1)
        guard pending == 0 else { return }
        timer?.invalidate()
        timer = nil
    }
}
