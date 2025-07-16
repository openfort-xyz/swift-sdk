//
//  OFSignable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-01.
//


public protocol OFUserAccessable: OFOpenfortRootable {}

public extension OFUserAccessable {
    
    func getUser(
        completion: @escaping (Result<OFGetUserInstanceResponse, Error>) -> Void
    ) {
        let method = OFMethods.getUserInstance
        let js = "window.getUserSync();"
        evaluateAndDecode(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.getUserInstance,
            completion: completion
        )
    }
}
