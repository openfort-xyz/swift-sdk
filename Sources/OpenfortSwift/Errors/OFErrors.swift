//
//  OFErrors.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-07-25.
//

public enum OFError: Error {
    case encodingFailed

    public var errorDescription: String? {
        switch self {
        case .encodingFailed:
            return "Encoding failed"
        }
    }
}
