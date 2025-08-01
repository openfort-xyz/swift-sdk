//
//  OFSDK.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-03.
//

import WebKit

@MainActor
open class OFSDK: NSObject, OFOpenfortRootable, OFAuthorizable, OFProxible, OFEmbeddedWalletAccessable, OFUserAccessable {
    
    /// Shared singleton instance of OFSDK
    public static let shared = OFSDK()
    private static var initialized: Bool = false
    /// Completion called when the SDK successfully loads
    public var didLoad: (() -> Void)?
    /// Completion called when the SDK fails to load with an error
    public var didFailedToLoad: ((Error) -> Void)?
    
    private var coordinator = OFWebViewCoordinator()
    private var messageHandler = OFScriptMessageHandler()
    
    public var webView: WKWebView?
    public var jsonEncoder: JSONEncoder = JSONEncoder()
    public var isInitialized: Bool = false
    
    /// Initializes the SDK. Call this once before using `OFSDK.shared`.
    @MainActor
    public static func setupSDK() {
        if initialized {
            return
        }
        shared.setupInstance()
        initialized = true
    }
    
    @MainActor
    private func setupInstance() {
        coordinator.didLoad = { [weak self] in
            self?.isInitialized = true
            self?.didLoad?()
        }
        
        coordinator.didFailedToLoad = { [weak self] error in
            self?.isInitialized = false
            self?.didFailedToLoad?(error)
        }
        
        self.webView = OFWebView(fileUrl: contentUrl, delegate: coordinator, scriptMessageHandler: messageHandler)
        messageHandler.webView = self.webView
    }
    
    private var contentUrl: URL {
        Bundle.module.url(forResource: "index", withExtension: "html")!
    }
}
