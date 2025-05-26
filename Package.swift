// swift-tools-version: 6.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Openfort",
    platforms: [
        .iOS(.v13), .macOS(.v11)
    ],
    products: [
        // Products define the executables and libraries a package produces, making them visible to other packages.
        .library(
            name: "Openfort",
            targets: ["Openfort"]),
    ],
    dependencies: [
        .package(url: "https://github.com/Alamofire/Alamofire.git", from: "5.0.0"),
        .package(url: "https://github.com/evgenyneu/keychain-swift.git", from: "22.0.0"),
    ],
    targets: [
        // Targets are the basic building blocks of a package, defining a module or a test suite.
        // Targets can depend on other targets in this package and products from dependencies.
        .target(
            name: "Openfort",
            dependencies: ["Alamofire"]
        ),
        .testTarget(
            name: "OpenfortTests",
            dependencies: ["Openfort"]
        )
    ]
)
