//
//  OFAuthProvider.swift
//  OpenfortSwift
//

/// Third-party authentication provider passed to `OFSDK.setupSDK(thirdParty:getAccessToken:)`.
public enum OFAuthProvider: String, OFCodableSendable {
    case email
    case wallet
    case apple
    case google
    case twitter
    case discord
    case facebook
    case epic_games
    case accelbyte
    case firebase
    case lootlocker
    case playfab
    case supabase
    case custom
    case oidc
}
