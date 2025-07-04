//
//  OFInitializable.swift
//  OpenfortSwift
//
//  Created by Pavel Gurkovskii on 2025-06-30.
//
import WebKit

@MainActor
protocol OFWebViewAccessable{
    var webView: WKWebView? { get }
}
