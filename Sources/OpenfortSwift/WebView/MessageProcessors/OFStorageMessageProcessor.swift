//
//  OFStorageMessageProcessor.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-08-25.
//

import WebKit
import Foundation

@MainActor

internal final class OFStorageMessageProcessor {

    private let jsonDecoder = JSONDecoder()
    
    internal func processMessageForKeychain(_ message: WKScriptMessage) -> Bool {
        guard let data = message.body as? [String: Any] else {
            print("Received message is not a dictionary: \(message.body)")
            return false
        }
        
        let method = data["method"] as? String ?? ""
        
        switch method {
        case "KeychainSave":
            OFKeychainHelper.save(data["value"] as! String, for: data["key"] as! String)
            let requestId = data["requestId"] as! Int
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            message.webView?.evaluateJavaScript(js)
            return true
        case "KeychainRemove":
            OFKeychainHelper.delete(for: data["key"] as! String)
            let requestId = data["requestId"] as! Int
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            message.webView?.evaluateJavaScript(js)
            return true
        case "KeychainGet":
            let value = OFKeychainHelper.retrieve(for: data["key"] as! String) ?? ""
            let requestId = data["requestId"] as! Int
            if !value.isEmpty {
                // Try to parse value as JSON
                if let data = value.data(using: .utf8),
                   let jsonObject = try? JSONSerialization.jsonObject(with: data, options: []),
                   JSONSerialization.isValidJSONObject(jsonObject) {
                    // It's a JSON object/array, pass as-is
                    let js = "window.__keychainOnGet({ requestId: \(requestId), value: \(value) })"
                    message.webView?.evaluateJavaScript(js)
                } else {
                    // It's a plain string, escape and quote
                    let js = "window.__keychainOnGet({ requestId: \(requestId), value: \"\(value)\" })"
                    message.webView?.evaluateJavaScript(js)
                }
            } else {
                // If nil or empty, send null
                let js = "window.__keychainOnGet({ requestId: \(requestId), value: null })"
                message.webView?.evaluateJavaScript(js)
            }
            return true
        case "KeychainFlush":
            OFKeychainHelper.clearAll()
            let requestId = data["requestId"] as! Int
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            message.webView?.evaluateJavaScript(js)
            return true
        default:
            return false
        }
    }
    
    internal func processMessageForSecureStorage(_ message: WKScriptMessage) -> Bool {
        
        guard let data = message.body as? [String: Any] else {
            print("Received message is not a dictionary: \(message.body)")
            return false
        }
        
        func reply(event: String, id: Any?, data: [String: Any]) {
            let payload: [String: Any] = [
                "event": event,
                "id": id as Any,
                "data": data
            ]
            postSecureMessageToJS(payload, webView: message.webView)
        }
        
        func succeed(event: String, id: Any?, data: [String: Any] = [:]) {
            var responseData = data
            responseData["success"] = true
            reply(event: event, id: id, data: responseData)
        }
        
        func fail(event: String, id: Any?, error: String = "Operation failed") {
            reply(event: event, id: id, data: ["success": false, "error": error])
            handleError(["error": error], method: event)
        }
        
        guard let event = data["event"] as? String else { return false }
        
        // If this is already a response payload carrying a failure, just handle the error and stop.
        if let payload = data["data"] as? [String: Any] {
            if let success = payload["success"] as? Bool, success == false {
                let err = (payload["error"] as? String) ?? "Operation failed"
                fail(event: event, id: data["id"], error: err)
                return true
            } else if let successNum = payload["success"] as? Int, successNum == 0 {
                let err = (payload["error"] as? String) ?? "Operation failed"
                fail(event: event, id: data["id"], error: err)
                return true
            }
        }
        let requestId = data["id"]
        switch event {
        case "app:secure-storage:get":
            if let key = (data["data"] as? [String: Any])?["key"] as? String {
                let value = OFKeychainHelper.retrieve(for: key)
                let normalizedValue: Any = value ?? NSNull()
                reply(event: event, id: requestId, data: ["success": true, "value": normalizedValue])
            }
            return true
        case "app:secure-storage:set":
            if let dict = data["data"] as? [String: Any],
               let key = dict["key"] as? String,
               let value = dict["value"] as? String {
                OFKeychainHelper.save(value, for: key)
                succeed(event: event, id: requestId)
            } else {
                fail(event: event, id: requestId)
            }
            return true
        case "app:secure-storage:remove":
            if let key = (data["data"] as? [String: Any])?["key"] as? String {
                OFKeychainHelper.delete(for: key)
                succeed(event: event, id: requestId)
            } else {
                fail(event: event, id: requestId)
            }
            return true
        case "app:secure-storage:flush":
            OFKeychainHelper.clearAll()
            succeed(event: event, id: requestId)
            return true
        default:
            return false
        }
    }
    
    /// Serializes a dictionary to JSON and posts it to the page via window.postMessage
    private func postSecureMessageToJS(_ object: [String: Any], webView: WKWebView?) {
        guard JSONSerialization.isValidJSONObject(object),
              let data = try? JSONSerialization.data(withJSONObject: object, options: []),
              let json = String(data: data, encoding: .utf8) else {
            print("postMessageToJS: invalid JSON object")
            return
        }

        let js = """
        (function(msg){
          try { window.postMessage(msg, '*'); } catch (e) {}
          try {
            var frames = window.frames;
            for (var i = 0; i < frames.length; i++) {
              try { frames[i].postMessage(msg, '*'); } catch (e) {}
            }
          } catch (e) {}
        })(\(json));
        """

        webView?.evaluateJavaScript(js, completionHandler: nil)
    }
    
    private func handleError(_ dict: [String: Any], method: String) {
        NotificationCenter.default.post(
            name: Notification.Name(method),
            object: nil,
            userInfo: ["success": false]
        )
        let errorMsg = dict["error"] as? String ?? "Unknown error"
        print("\(method) error: \(errorMsg)")
    }
}
