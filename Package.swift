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
    dependencies: [
        .package(url: "https://github.com/Boilertalk/Web3.swift.git", branch: "master")
    ],
    targets: [
        // Targets are the basic building blocks of a package, defining a module or a test suite.
        // Targets can depend on other targets in this package and products from dependencies.
        .target(
            name: "OpenfortSwift",
            dependencies: [.product(name: "Web3", package: "Web3.swift"),
                           .product(name: "Web3PromiseKit", package: "Web3.swift"),
                           .product(name: "Web3ContractABI", package: "Web3.swift"),],
            resources: [
                    .process("Resources")
                ]
        ),
        
        .testTarget(
            name: "OpenfortSwiftTests",
            dependencies: ["OpenfortSwift"]
        ),
        
    ]
)
