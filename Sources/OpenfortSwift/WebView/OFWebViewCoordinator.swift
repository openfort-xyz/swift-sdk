//
//  WebViewCoordinator.swift
//  OpenfortAuthorization
//
//  Created by Pavel Gurkovskii on 2025-06-22.
//
import Foundation
import WebKit

internal final class OFWebViewCoordinator: NSObject, WKNavigationDelegate {
    var didLoad: (() -> Void)?
    var didFailedToLoad: ((Error) -> Void)?
    
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print("✅ WebView finished loading.")
        didLoad?()
    }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        print("❌ WebView failed to load: \(error.localizedDescription)")
        didFailedToLoad?(error)
    }
    
    private func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if let url = navigationAction.request.url {
            print("Navigating to:", url.absoluteString)
        }
        decisionHandler(.allow)
    }
}
