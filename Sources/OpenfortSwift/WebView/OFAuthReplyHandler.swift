//
//  AuthReplyHandler.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-10-22.
//

import WebKit

@available(iOS 16.0, *)
final class OFAuthReplyHandler: NSObject, WKScriptMessageHandlerWithReply {
    
    var getAccessToken: (() async throws -> String?)?

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage, replyHandler: @escaping @MainActor (Any?, String?) -> Void) {
        // Expecting { event: "app:third-party-auth:getAccessToken" }
        guard let body = message.body as? [String: Any],
              let event = body["event"] as? String,
              event == "app:third-party-auth:getAccessToken"
        else {
            replyHandler(nil, nil) // no error string → just return undefined
            return
        }

        Task { @MainActor in
            do {
                let token = try await getAccessToken?()
                // Send the actual token string (or null) back to JS directly.
                replyHandler(token ?? NSNull(), nil)
            } catch {
                replyHandler(nil, String(describing: error))
            }
        }
    }
}
