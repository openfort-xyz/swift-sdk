//
//  OFSDK.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-03.
//

import WebKit

@MainActor
open class OFSDK: NSObject, OFAuthorizable {
    
    private var coordinator = OFWebViewCoordinator()
    private var messageHandler = OFScriptMessageHandler()

    var webView: WKWebView?
    
    @MainActor
    override init () {
        super.init()
        self.webView = OFWebView(fileUrl: contentUrl, delegate: coordinator, scriptMessageHandler: messageHandler)
    }
    
    private var contentUrl: URL {
        Bundle.main.url(forResource: "index", withExtension: "html")!
    }
}
