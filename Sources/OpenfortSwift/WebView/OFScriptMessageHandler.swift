//
//  ScriptMessageHandler.swift
//  OpenfortAuthorization
//
//  Created by Pavel Gurkovskii on 2025-06-24.
//

import WebKit
import Foundation

internal final class OFScriptMessageHandler: NSObject, WKScriptMessageHandler {
    
    private var scriptMessageProcessor: OFScriptMessageProcessor?
    
    func initScriptMessageProcessor(with webView: WKWebView?, getAccessToken: (() async -> String?)?) {
        scriptMessageProcessor = OFScriptMessageProcessor(webView: webView)
        scriptMessageProcessor?.getAccessToken = getAccessToken
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        scriptMessageProcessor?.process(message)
    }
}
