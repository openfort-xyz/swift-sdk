//
//  AuthProvider.swift
//  Openfort
//
//  Created by Marc Flores on 22/5/25.
//

import Foundation

enum AuthProvider: String, Codable {
    case email = "email",
         wallet = "wallet",
         apple = "apple",
         google = "google",
         twitter = "twitter",
         discord = "discord",
         facebook = "facebook",
         epicGames = "epic_games",
         accelbyte = "accelbyte",
         firebase = "firebase",
         lootlocker = "lootlocker",
         playfab = "playfab",
         supabase = "supabase",
         custom = "custom",
         oidc = "oidc"
}
