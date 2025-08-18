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
    
    public static let shared = OFSDK()
    
    public internal(set) var webView: WKWebView?
    public internal(set) var jsonEncoder: JSONEncoder = JSONEncoder()
    public internal(set) var isInitialized: Bool = false
    
    @Published public private(set) var embeddedState: OFEmbeddedState?
    public var embeddedStatePublisher: Published<OFEmbeddedState?>.Publisher { $embeddedState }
    
    private static var initialized: Bool = false
    private var coordinator = OFWebViewCoordinator()
    private var messageHandler = OFScriptMessageHandler()
    private var embeddedStateTimer: Timer?
    
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
        let readyName = Notification.Name("openfortReady")
        let failName  = Notification.Name("openfortInitError")
        
        coordinator.didLoad = { [weak self] in
            self?.isInitialized = true
            if self?.embeddedStateTimer == nil {
                self?.startPollingEmbeddedState()
            }
            NotificationCenter.default.post(name: readyName, object: self)
        }
        
        coordinator.didFailedToLoad = { [weak self] error in
            self?.isInitialized = false
            self?.stopPollingEmbeddedState()
            NotificationCenter.default.post(name: failName, object: self, userInfo: ["error": (error as NSError).localizedDescription])
        }
        
        self.webView = OFWebView(fileUrl: contentUrl, delegate: coordinator, scriptMessageHandler: messageHandler)
        messageHandler.webView = self.webView
    }
    
    private func startPollingEmbeddedState() {
        embeddedStateTimer?.invalidate()
        embeddedStateTimer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { [weak self] _ in
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
