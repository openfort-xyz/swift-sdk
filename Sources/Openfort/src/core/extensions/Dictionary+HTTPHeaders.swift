//
//  Dictionary+HTTPHeaders.swift
//  Openfort
//
//  Created by Marc Flores on 23/5/25.
//

import Alamofire
import Foundation

extension Dictionary<String, String> {
    static var defaultHeader: Self {
        [
            "Content-Type" : "application/json"
        ]
    }
}
