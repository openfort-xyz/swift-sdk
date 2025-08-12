//
//  OFSDK.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-03.
//

import WebKit
import Combine

@MainActor
public final class OFSDK: NSObject, OFOpenfortRootable, OFAuthorizable, OFProxible, OFEmbeddedWalletAccessable, OFUserAccessable {
    
    private var _config: OFConfig?
    public static let shared = OFSDK()
    
    public var didLoad: (() -> Void)?
    public var didFailedToLoad: ((Error) -> Void)?
    public var webView: WKWebView?
    public var jsonEncoder: JSONEncoder = JSONEncoder()
    public var isInitialized: Bool = false
    
    @Published public private(set) var embeddedState: OFEmbeddedState?
    public var embeddedStatePublisher: Published<OFEmbeddedState?>.Publisher { $embeddedState }
    
    private static var initialized: Bool = false
    private var coordinator = OFWebViewCoordinator()
    private var messageHandler = OFScriptMessageHandler()
    private var embeddedStateTimer: Timer?
    
    @MainActor
    public static func setupSDK(config: OFConfig) {
        if initialized {
            return
        }
        shared._config = config
        shared.setupInstance()
        initialized = true
    }
    
    public var config: OFConfig? {
        _config
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
        
        self.webView = OFWebView(fileUrl: contentUrl, delegate: coordinator, scriptMessageHandler: messageHandler, config: config)
        messageHandler.webView = self.webView
    }
    
    private func startPollingEmbeddedState() {
        embeddedStateTimer?.invalidate()
        embeddedStateTimer = Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { [weak self] _ in
            guard let self = self else { return }
            Task { @MainActor in
                self.getEmbeddedState(completion: { result in
                    switch result {
                    case .success(let newValue):
                        self.embeddedState = OFEmbeddedState(rawValue: newValue ?? 0)
                    case .failure(_):
                        break
                    }
                })
            }
        }
    }
    
    private func stopPollingEmbeddedState() {
        embeddedStateTimer?.invalidate()
        embeddedStateTimer = nil
    }
    
    private var contentUrl: URL {
        Bundle.module.url(forResource: "index", withExtension: "html")!
    }
}
