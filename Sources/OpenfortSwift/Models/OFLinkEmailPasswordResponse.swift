//
//  OFLinkEmailPasswordResponse'.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-07.
//

public protocol OFLinkEmailPasswordResponseProtocol {
    var id: String? { get }
    var object: String? { get }
    var linkedAccounts: [OFLinkedEmailAccount]? { get }
    var createdAt: Int? { get }
}

public protocol OFLinkedEmailAccountProtocol {
    var email: String? { get }
    var provider: String? { get }
    var verified: Bool? { get }
    var disabled: Bool? { get }
}

public struct OFLinkEmailPasswordResponse: OFLinkEmailPasswordResponseProtocol, Decodable {
    public let id: String?
    public let object: String?
    public let linkedAccounts: [OFLinkedEmailAccount]?
    public let createdAt: Int?
}

public struct OFLinkedEmailAccount: OFLinkedEmailAccountProtocol, Decodable {
    public let email: String?
    public let provider: String?
    public let verified: Bool?
    public let disabled: Bool?
}
