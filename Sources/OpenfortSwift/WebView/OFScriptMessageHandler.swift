//
//  ScriptMessageHandler.swift
//  OpenfortAuthorization
//
//  Created by Pavel Gurkovskii on 2025-06-24.
//

import WebKit
import Foundation

internal final class OFScriptMessageHandler: NSObject, WKScriptMessageHandler {
    
    weak var webView: WKWebView? {
        didSet {
            scriptMessageProcessor = OFScriptMessageProcessor(webView: webView)
        }
    }
    
    private var scriptMessageProcessor: OFScriptMessageProcessor?
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        scriptMessageProcessor?.process(message)
    }
}
