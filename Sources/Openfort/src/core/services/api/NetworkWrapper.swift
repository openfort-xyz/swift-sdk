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

final class NetworkWrapper: NetworkWrapperProtocol {
    private var session: Session!
    
    init() {
        self.session = Session(
            configuration: URLSessionConfiguration.af.default
        )
    }
    
    func request(_ request: BaseRequest) async throws {
        let urlRequest = try request.asURLRequest()
        return try await withCheckedThrowingContinuation { continuation in
            session.request(urlRequest)
                .validate()
                .response { response in
                    switch response.result {
                    case .success(let data):
                        continuation.resume(with: .success(()))
                        
                    case .failure(let error):
                        self.printBody(data: response.data, request: request)
                        continuation.resume(throwing: error)
                    }
                }
        }
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

