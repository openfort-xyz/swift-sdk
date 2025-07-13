//
//  OFSignable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-07-01.
//


public protocol OFUserAccessable: OFOpenfortRootable {}

public extension OFUserAccessable {
    
    func getUserInstance(
        key: String,
        completion: @escaping (Result<OFGetUserInstanceResponse, Error>) -> Void
    ) {
        let method = "getUserInstance"
        let js = "window.getUser({'\(key)'});"
        evaluateAndDecode(
            js: js,
            method: method,
            errorDomain: OFErrorDomains.getUserInstance,
            completion: completion
        )
    }
}



