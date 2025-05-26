//
//  NetworkWrapper.swift
//  Openfort
//
//  Created by Marc Flores on 23/5/25.
//

import Alamofire
import Foundation


protocol NetworkWrapperProtocol {
    func request<D: Decodable>(_ request: BaseRequest) async throws -> D where D : Sendable
}

final class NetworkWrapper: NetworkWrapperProtocol, @unchecked Sendable {
    private var session: Session!
    private let config: OpenfortSDKConfiguration
    private let secured: SecuredServiceProtocol
    
    init(config: OpenfortSDKConfiguration, secured: SecuredServiceProtocol) {
        self.config = config
        self.secured = secured
        self.session = Session(
            configuration: URLSessionConfiguration.af.default,
            interceptor: self
        )
    }
    
    func request<D: Decodable>(_ request: any BaseRequest) async throws -> D where D: Sendable {
        let urlRequest = try request.asURLRequest()
        return try await withCheckedThrowingContinuation { continuation in
            session.request(urlRequest)
                .validate()
                .responseDecodable(of: D.self) { response in
                    self.printBody(data: response.data, request: request)
                    switch response.result {
                    case .success(let data):
                        continuation.resume(with: .success((data)))
                        
                    case .failure(let error):
                        continuation.resume(throwing: error)
                    }
                }
        }
    }
}

extension NetworkWrapper: RequestInterceptor {
    func adapt(_ urlRequest: URLRequest, for session: Session, completion: @escaping (Result<URLRequest, any Error>) -> Void) {
        var request = urlRequest
        request.headers.add(
            name: "Authorization",
            value: "Bearer \(config.baseConfiguration.publishableKey)"
        )
        
        if let auth = secured.getAuth() {
            request.headers.add(
                name: "X-Player-Token",
                value: auth.token
            )
        }
        
        completion(.success(request))
    }
}

private extension NetworkWrapper {
    func printBody(data: Data?, request: BaseRequest) {
        var output = "############################## REQUEST ##############################"
        output += "\n" + request.method.rawValue.uppercased() + ": " + request.path
        if let headers = request.header {
            output += "\n" + "HEADER:"
            output += "\n" + "\(headers)"
        }
        if let params = request.parameters {
            output += "\n" + "BODY:"
            output += "\n" + "\(params)"
        }
        if let data {
            output += "\n" + ""
            output += "\n" + "############################## RESPONSE ##############################"
            output += "\n" + "BODY:"
            output += "\n" + (String(data: data, encoding: .utf8) ?? "")
        }
        print(output)
    }
}

