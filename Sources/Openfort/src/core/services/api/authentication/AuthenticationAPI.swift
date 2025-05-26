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
        case .login(let email, let password):
            [
                "email": email,
                "password": password
            ]
        default:
            nil
        }
    }
    
    var path: String {
        switch self {
        case .login: C.Urls.base + "iam/v1/password/login"
        case .getUser: C.Urls.base + "iam/v1/me"
        }
    }
    
    
    var method: HTTPMethod {
        switch self {
        case .login: .post
        default: .get
        }
    }
    
    
    case login(email: String, password: String)
    case getUser
}
