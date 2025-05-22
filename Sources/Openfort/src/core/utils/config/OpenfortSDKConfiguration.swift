//
//  OpenfortSDKConfiguration.swift
//  Openfort
//
//  Created by Marc Flores on 22/5/25.
//
import Foundation

final public class OpenfortSDKConfiguration {
    let baseConfiguration: BaseConfiguration
    let shieldConfiguration: ShieldConfiguration?
    let overrides: SDKOverrides?
    
    public init(
        baseConfiguration: BaseConfiguration,
        shieldConfiguration: ShieldConfiguration? = nil,
        overrides: SDKOverrides? = nil
    ) {
        self.baseConfiguration = baseConfiguration
        self.shieldConfiguration = shieldConfiguration
        self.overrides = overrides
    }
    
    
    final public class BaseConfiguration {
        let publishableKey: String
        
        public init(publishableKey: String) {
            self.publishableKey = publishableKey
        }
    }
    
    final public class SDKOverrides {
        let backendUrl: String?
        let iframeUrl: String?
        let shieldUrl: String?

        init(
            backendUrl: String?,
            iframeUrl: String?,
            shieldUrl: String?
        ) {
            self.backendUrl = backendUrl
            self.iframeUrl = iframeUrl
            self.shieldUrl = shieldUrl
        }
    }
    
    final public class ShieldConfiguration {
        let shieldPublishableKey: String
        let shieldEncryptionKey: String
        let debug: Bool
        
        public init(shieldPublishableKey: String, shieldEncryptionKey: String, debug: Bool = false) {
            self.shieldPublishableKey = shieldPublishableKey
            self.shieldEncryptionKey = shieldEncryptionKey
            self.debug = debug
        }
    }
}
