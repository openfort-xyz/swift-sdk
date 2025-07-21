//
//  OFInitializable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//
@preconcurrency import WebKit

@MainActor
public protocol OFOpenfortRootable {
    var webView: WKWebView? { get }
    
    func evaluateAndDecode<T: Decodable>(
        js: String,
        method: String,
        errorDomain: String,
        completion: @escaping (Result<T, Error>) -> Void)
}

extension OFOpenfortRootable {
    
    public func getAccessToken(completion: @escaping (Result<OFGetAccessTokenResponse, Error>) -> Void) {
        let method = OFMethods.getAccessToken
        let js = "window.getAccessTokenSync();"
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.getAccessToken, completion: completion)
    }
    
    public func validateAndRefreshToken(forceRefresh: Bool? = nil, completion: @escaping (Result<OFValidateAndRefreshTokenResponse, Error>) -> Void) {
        let method = OFMethods.validateAndRefreshToken
        let js: String
        if let forceRefresh = forceRefresh {
            js = "window.validateAndRefreshTokenSync({forceRefresh: \(forceRefresh)});"
        } else {
            js = "window.validateAndRefreshTokenSync();"
        }
        evaluateAndDecode(js: js, method: method, errorDomain: OFErrorDomains.validateAndRefreshToken, completion: completion)
    }
}

extension OFOpenfortRootable {
    
    
}
