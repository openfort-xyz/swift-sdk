//
//  BaseRequest.swift
//  Openfort
//
//  Created by Marc Flores on 23/5/25.
//

import Alamofire
import Foundation

protocol BaseRequest: URLRequestConvertible {
    
    var path: String { get }
    var method: HTTPMethod { get }
    var header: [String: String]? { get }
    var parameters: [String: Sendable]? { get }
    
    var parameterEncoding: ParameterEncoding { get }
}

extension BaseRequest {
    
    var method: HTTPMethod { .get }

    var header: [String: String]? {
        .defaultHeader
    }
    var parameters: [String: Any]? { nil }
    
    var parameterEncoding: ParameterEncoding {
        switch method {
        case .get: return URLEncoding.default
        default: return JSONEncoding.default
        }
    }
    
    func asURLRequest() throws -> URLRequest {
        guard let url = URL(string: path) else {
            fatalError()
        }
        
        var urlRequest = URLRequest(url: url)
        urlRequest.httpMethod = method.rawValue
        urlRequest.allHTTPHeaderFields = header
        return try parameterEncoding.encode(urlRequest, with: parameters)
    }
}
