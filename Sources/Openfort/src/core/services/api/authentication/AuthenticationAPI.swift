//
//  AuthenticationAPI.swift
//  Openfort
//
//  Created by Marc Flores on 23/5/25.
//

import Alamofire

enum AuthenticationAPI: BaseRequest {

    var parameters: [String : any Sendable]? {
        switch self {
        case .login(let username, let password):
            [
                "username": username,
                "password": password
            ]
        default:
            nil
        }
    }
    
    var path: String {
        switch self {
        case .login: C.Urls.base + "/iam/v1/oidc/login"
        }
    }
    
    
    var method: HTTPMethod {
        switch self {
        case .login: .post
        }
    }
    
    
    case login(username: String, password: String)
}
