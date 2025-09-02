//
//  ScriptMessageHandler.swift
//  OpenfortAuthorization
//
//  Created by Pavel Gurkovskii on 2025-06-24.
//

import WebKit
import Foundation

internal final class OFScriptMessageHandler: NSObject, WKScriptMessageHandler {
    
    private let scriptMessageProcessor = OFScriptMessageProcessor()
    
    func set(getAccessToken: (() async throws -> String?)?) {
        scriptMessageProcessor.getAccessToken = getAccessToken
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        scriptMessageProcessor.process(message)
    }
}
