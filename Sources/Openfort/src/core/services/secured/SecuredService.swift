//
//  SecuredService.swift
//  Openfort
//
//  Created by Marc Flores on 26/5/25.
//

protocol SecuredServiceProtocol {
    func getAuth() -> LoginResponse?
    func setAuth(data: LoginResponse?)
}

final class SecuredService: SecuredServiceProtocol {
    
    private var authData: LoginResponse?
    
    func getAuth() -> LoginResponse? {
        authData
    }
    
    func setAuth(data: LoginResponse?) {
        authData = data
    }
}
