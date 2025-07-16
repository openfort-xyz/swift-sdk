//
//  KeychainHelper.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-16.
//

import Foundation
import Security

internal enum KeychainHelper {

    static let authTokenKey = "of_auth_token"
    static let refreshTokenKey = "of_refresh_token"
    
    static func save(_ value: String, for key: String) {
        guard let data = value.data(using: .utf8) else { return }
        
        // Delete any existing item
        delete(for: key)
        
        let query: [String: Any] = [
            kSecClass as String       : kSecClassGenericPassword,
            kSecAttrAccount as String : key,
            kSecValueData as String   : data
        ]
        
        SecItemAdd(query as CFDictionary, nil)
    }
    
    static func retrieve(for key: String) -> String? {
        let query: [String: Any] = [
            kSecClass as String       : kSecClassGenericPassword,
            kSecAttrAccount as String : key,
            kSecReturnData as String  : true,
            kSecMatchLimit as String  : kSecMatchLimitOne
        ]
        
        var result: AnyObject?
        let status = SecItemCopyMatching(query as CFDictionary, &result)
        
        if status == errSecSuccess, let data = result as? Data {
            return String(data: data, encoding: .utf8)
        }
        
        return nil
    }
    
    static func delete(for key: String) {
        let query: [String: Any] = [
            kSecClass as String       : kSecClassGenericPassword,
            kSecAttrAccount as String : key
        ]
        
        SecItemDelete(query as CFDictionary)
    }
}
