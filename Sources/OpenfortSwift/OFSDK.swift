//
//  OFSDK.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-03.
//

import WebKit
import Combine

@MainActor
open class OFSDK: NSObject, OFOpenfortRootable, OFAuthorizable, OFProxible, OFEmbeddedWalletAccessable, OFUserAccessable {
    
    /// Shared singleton instance of OFSDK
    public static let shared = OFSDK()
    private static var initialized: Bool = false
    /// Completion called when the SDK successfully loads
    public var didLoad: (() -> Void)?
    /// Completion called when the SDK fails to load with an error
    public var didFailedToLoad: ((Error) -> Void)?
    public var webView: WKWebView?
    public var jsonEncoder: JSONEncoder = JSONEncoder()
    public var isInitialized: Bool = false
    
    @Published public private(set) var embeddedState: OFEmbeddedState?
    public var embeddedStatePublisher: Published<OFEmbeddedState?>.Publisher { $embeddedState }
    
    private var coordinator = OFWebViewCoordinator()
    private var messageHandler = OFScriptMessageHandler()
    private var embeddedStateTimer: Timer?
    
    
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
            if self?.embeddedStateTimer == nil {
                self?.startPollingEmbeddedState()
            }
        }
        
        coordinator.didFailedToLoad = { [weak self] error in
            self?.isInitialized = false
            self?.didFailedToLoad?(error)
        }
        
        self.webView = OFWebView(fileUrl: contentUrl, delegate: coordinator, scriptMessageHandler: messageHandler)
        messageHandler.webView = self.webView
    }
    
    /// Call this after didLoad to start polling getEmbeddedState every 0.5s
    private func startPollingEmbeddedState() {
        embeddedStateTimer?.invalidate()
        embeddedStateTimer = Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { [weak self] _ in
            guard let self = self else { return }
            Task { @MainActor in
                self.getEmbeddedState(completion: { result in
                    switch result {
                    case .success(let newValue):
                        self.embeddedState = OFEmbeddedState(rawValue: newValue)
                    case .failure(_):
                        // Optionally handle error, currently ignoring
                        break
                    }
                })
            }
        }
    }
    
    /// Call this to stop polling if needed
    private func stopPollingEmbeddedState() {
        embeddedStateTimer?.invalidate()
        embeddedStateTimer = nil
    }
    private var contentUrl: URL {
        Bundle.module.url(forResource: "index", withExtension: "html")!
    }
}
