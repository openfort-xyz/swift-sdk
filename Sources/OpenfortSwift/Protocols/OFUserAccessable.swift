//
//  OFSignable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-01.
//


public protocol OFUserAccessable: OFOpenfortRootable {}

public extension OFUserAccessable {
    
    func getUser() async throws -> OFGetUserInstanceResponse? {
        let method = OFMethods.getUserInstance
        let js = "window.getUserSync();"
        return try await evaluateAndObserveAsync(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.getUserInstance
        )
    }

    func getUser(
        completion: @escaping (Result<OFGetUserInstanceResponse?, Error>) -> Void
    ) {
        Task {
            do {
                let result = try await getUser()
                completion(.success(result))
            } catch {
                completion(.failure(error))
            }
        }
    }
}
