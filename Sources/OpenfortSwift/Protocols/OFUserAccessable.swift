//
//  OFSignable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-01.
//


public protocol OFUserAccessable: OFOpenfortRootable {}

public extension OFUserAccessable {
    
    func getUser() async throws -> OFUser? {
        let method = OFMethods.getUserInstance
        let js = "window.getUserSync();"
        return try await evaluateAndObserveAsync(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.getUserInstance
        )
    }

    /// Retrieves the current user instance from Openfort asynchronously via a completion handler.
    ///
    /// - Parameter completion: A closure that contains a `Result` with either the `OFUser?` or an `Error`.
    ///                         The result can be `nil` if no user is logged in.
    func getUser(
        completion: @escaping (Result<OFUser?, Error>) -> Void
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
