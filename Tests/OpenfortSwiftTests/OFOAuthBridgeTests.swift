import Foundation
import JavaScriptCore
import Testing

/// Runs `openfort-sync.js` in JavaScriptCore against a stubbed `window.openfort.authInstance`
/// whose `initOAuth` / `initLinkOAuth` record their argument and settle with `outcome`.
private func runBridge(_ call: String, outcome: String) throws -> (request: [String: Any], message: [String: Any]) {
    let scriptURL = URL(fileURLWithPath: #filePath)
        .deletingLastPathComponent().deletingLastPathComponent().deletingLastPathComponent()
        .appendingPathComponent("Sources/OpenfortSwift/Resources/openfort-sync.js")
    let bridge = try String(contentsOf: scriptURL, encoding: .utf8)
    let context = try #require(JSContext())
    var exception: String?
    context.exceptionHandler = { _, value in exception = value?.toString() }
    context.evaluateScript("""
    var window = this;
    var captured = {};
    window.webkit = { messageHandlers: { userHandler: { postMessage: m => { captured.message = m; } } } };
    const stub = arg => { captured.request = arg; return \(outcome); };
    window.openfort = { authInstance: { initOAuth: stub, initLinkOAuth: stub } };
    """)
    context.evaluateScript(bridge)
    context.evaluateScript(call)
    #expect(exception == nil)
    let captured = try #require(context.objectForKeyedSubscript("captured").toDictionary())
    return (
        try #require(captured["request"] as? [String: Any]),
        try #require(captured["message"] as? [String: Any])
    )
}

@Test(arguments: ["initOAuth", "initLinkOAuth"])
func oauthBridgeLiftsRedirectToAndWrapsURL(method: String) throws {
    let (request, message) = try runBridge(
        "window.\(method)Sync({ provider: 'google', options: { redirectTo: 'myapp://cb', scopes: 'email' } });",
        outcome: "Promise.resolve('https://accounts.example/auth')"
    )
    #expect(request["provider"] as? String == "google")
    #expect(request["redirectTo"] as? String == "myapp://cb")
    #expect(request["options"] as? [String: String] == ["scopes": "email"])
    #expect(message["method"] as? String == method)
    #expect(message["success"] as? Bool == true)
    #expect(message["data"] as? [String: String] == ["url": "https://accounts.example/auth"])
}

@Test(arguments: ["initOAuth", "initLinkOAuth"])
func oauthBridgeAcceptsMissingOptions(method: String) throws {
    let (request, message) = try runBridge(
        "window.\(method)Sync({ provider: 'google' });",
        outcome: "Promise.resolve('https://accounts.example/auth')"
    )
    #expect(request["redirectTo"] == nil)
    #expect(message["success"] as? Bool == true)
}

@Test(arguments: ["initOAuth", "initLinkOAuth"])
func oauthBridgeReportsRejection(method: String) throws {
    let (_, message) = try runBridge(
        "window.\(method)Sync({ provider: 'google', options: { redirectTo: 'myapp://cb' } });",
        outcome: "Promise.reject(new Error('Already logged in'))"
    )
    #expect(message["method"] as? String == method)
    #expect(message["success"] as? Bool == false)
    #expect(message["error"] as? String == "Already logged in")
}
