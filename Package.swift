// swift-tools-version: 6.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "OpenfortSwift",
    platforms: [
            .iOS(.v16) // Set your minimum supported iOS version
        ],
    products: [
        // Products define the executables and libraries a package produces, making them visible to other packages.
        .library(
            name: "OpenfortSwift",
            targets: ["OpenfortSwift"]),
    ],
    targets: [
        // Targets are the basic building blocks of a package, defining a module or a test suite.
        // Targets can depend on other targets in this package and products from dependencies.
        .target(
            name: "OpenfortSwift",
            resources: [
                    .process("index.html"),
                    .process("index.js"),
                    .process("openfort.js"),
                    .process("openfort-sync.js"),
                    .process("recover.html"),
                    .process("recover.js"),
                    .process("signature.html"),
                    .process("signature.js"),
                    .process("utils.js")
                ]
        ),
        
        .testTarget(
            name: "OpenfortSwiftTests",
            dependencies: ["OpenfortSwift"]
        ),
        
    ]
)
