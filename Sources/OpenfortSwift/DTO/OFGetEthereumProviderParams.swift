//
//  OFGetEthereumProviderParams.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public struct OFGetEthereumProviderParams: Codable, Sendable {
    public struct ProviderInfo: Codable, Sendable {
        public let icon: String?
        public let name: String?
        public let rdns: String?
        
        public init(icon: String? = nil, name: String? = nil, rdns: String? = nil) {
            self.icon = icon
            self.name = name
            self.rdns = rdns
        }
    }

    public let policy: String?
    public let chains: [Int: String]?        // Changed key type to Int for Record<number, string>
    public let providerInfo: ProviderInfo?   // New field
    public let announceProvider: Bool?       // New field

    public init(
        policy: String? = nil,
        chains: [Int: String]? = nil,
        providerInfo: ProviderInfo? = nil,
        announceProvider: Bool? = nil
    ) {
        self.policy = policy
        self.chains = chains
        self.providerInfo = providerInfo
        self.announceProvider = announceProvider
    }
}
