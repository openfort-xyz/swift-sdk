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

    private func jsEscape(_ s: String) -> String {
        return s
            .replacingOccurrences(of: "\\", with: "\\\\")
            .replacingOccurrences(of: "\"", with: "\\\"")
            .replacingOccurrences(of: "\n", with: "\\n")
            .replacingOccurrences(of: "\r", with: "\\r")
    }

    private func toInt(_ any: Any?) -> Int? {
        if let i = any as? Int { return i }
        if let d = any as? Double { return Int(d) }
        if let s = any as? String, let i = Int(s) { return i }
        return nil
    }

    internal func processMessageForKeychain(_ message: WKScriptMessage) -> Bool {
        guard let data = message.body as? [String: Any] else {
            print("Received message is not a dictionary: \(message.body)")
            return false
        }

        let method = data["method"] as? String ?? ""

        switch method {
        case "KeychainSave":
            guard let key = data["key"] as? String, let value = data["value"] as? String else {
                print("KeychainSave: missing key/value")
                return false
            }
            OFKeychainHelper.save(value, for: key)
            guard let requestId = toInt(data["requestId"]) else {
                print("KeychainSave: missing/invalid requestId")
                return true
            }
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            if let webView = message.webView { webView.evaluateJavaScript(js) }
            return true

        case "KeychainRemove":
            guard let key = data["key"] as? String else {
                print("KeychainRemove: missing key")
                return false
            }
            OFKeychainHelper.delete(for: key)
            guard let requestId = toInt(data["requestId"]) else {
                print("KeychainRemove: missing/invalid requestId")
                return true
            }
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            if let webView = message.webView { webView.evaluateJavaScript(js) }
            return true

        case "KeychainGet":
            guard let key = data["key"] as? String else {
                print("KeychainGet: missing key")
                return false
            }
            guard let requestId = toInt(data["requestId"]) else {
                print("KeychainGet: missing/invalid requestId")
                return true
            }
            let value = OFKeychainHelper.retrieve(for: key) ?? ""
            if !value.isEmpty {
                if let bytes = value.data(using: .utf8),
                   let jsonObject = try? JSONSerialization.jsonObject(with: bytes, options: []),
                   JSONSerialization.isValidJSONObject(jsonObject) {
                    // JSON object/array – pass as-is
                    let js = "window.__keychainOnGet({ requestId: \(requestId), value: \(value) })"
                    if let webView = message.webView { webView.evaluateJavaScript(js) }
                } else {
                    // Plain string – escape and quote
                    let escaped = jsEscape(value)
                    let js = "window.__keychainOnGet({ requestId: \(requestId), value: \"\(escaped)\" })"
                    if let webView = message.webView { webView.evaluateJavaScript(js) }
                }
            } else {
                let js = "window.__keychainOnGet({ requestId: \(requestId), value: null })"
                if let webView = message.webView { webView.evaluateJavaScript(js) }
            }
            return true

        case "KeychainFlush":
            OFKeychainHelper.clearAll()
            guard let requestId = toInt(data["requestId"]) else {
                print("KeychainFlush: missing/invalid requestId")
                return true
            }
            let js = "window.__keychainOnOp({ requestId: \(requestId) })"
            if let webView = message.webView { webView.evaluateJavaScript(js) }
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
