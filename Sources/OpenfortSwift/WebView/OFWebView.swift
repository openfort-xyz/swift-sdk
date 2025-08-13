//
//  WebView.swift
//  OpenfortAuthorization
//
//  Created by Pavel Gurkovskii on 2025-06-22.
//

import SwiftUI
import WebKit

internal class OFWebView: WKWebView {
    let fileUrl: URL
    let delegate: WKNavigationDelegate?
    let scriptMessageHandler: WKScriptMessageHandler?
    private var config: OFConfig?
    
    init(fileUrl: URL, delegate: WKNavigationDelegate?, scriptMessageHandler: WKScriptMessageHandler?, config: OFConfig?) {
        self.fileUrl = fileUrl
        self.delegate = delegate
        self.scriptMessageHandler = scriptMessageHandler
        self.config = config

        // Configure webpage preferences for JavaScript
        let webPagePreferences = WKWebpagePreferences()
        webPagePreferences.allowsContentJavaScript = true

        // Configure the user content controller (message handler for JS-to-Swift bridge)
        let userContentController = WKUserContentController()
        if let messageHandler = scriptMessageHandler {
            userContentController.add(messageHandler, name: "userHandler")
           // userContentController.add(messageHandler, name: "ReactNativeWebView")
        }
        
        if let script = config?.openfortSyncScript() {
            let userScript = WKUserScript(source: script, injectionTime: .atDocumentStart, forMainFrameOnly: false)
            userContentController.addUserScript(userScript)
        }

        // Configure the web view
        let config = WKWebViewConfiguration()
        config.defaultWebpagePreferences = webPagePreferences
        config.setValue(true, forKey: "allowUniversalAccessFromFileURLs")
        config.userContentController = userContentController

        // Call the designated initializer for WKWebView (super)
        super.init(frame: .zero, configuration: config)

        // Configure 'self'
        self.navigationDelegate = delegate

        // Load the local file URL
        self.loadFileURL(fileUrl, allowingReadAccessTo: fileUrl.deletingLastPathComponent())
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
