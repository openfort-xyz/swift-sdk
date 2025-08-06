//
//  Untitled.swift
//  OpenfortSwift
//
//  Created by Pavlo Hurkovskyi on 2025-08-02.
//

public enum OFEmbeddedState: Int, Decodable {
    case none = 0
    case unauthenticated = 1
    case embeddedSignerNotConfigured = 2
    case creatingAccount = 3
    case ready = 4
}
