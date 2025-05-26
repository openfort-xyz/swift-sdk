//
//  NetworkWrapper.swift
//  Openfort
//
//  Created by Marc Flores on 23/5/25.
//

import Alamofire
import Foundation


protocol NetworkWrapperProtocol {
    func request(_ request: BaseRequest) async throws
}

final class NetworkWrapper: NetworkWrapperProtocol, @unchecked Sendable {
    private var session: Session!
    private let config: OpenfortSDKConfiguration
    
    init(config: OpenfortSDKConfiguration) {
        self.config = config
        self.session = Session(
            configuration: URLSessionConfiguration.af.default,
            interceptor: self
        )
    }
    
    func request(_ request: BaseRequest) async throws {
        let urlRequest = try request.asURLRequest()
        return try await withCheckedThrowingContinuation { continuation in
            session.request(urlRequest)
                .validate()
                .response { response in
                    self.printBody(data: response.data, request: request)
                    switch response.result {
                    case .success(let data):
                        continuation.resume(with: .success(()))
                        
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

