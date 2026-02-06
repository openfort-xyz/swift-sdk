<img width="1920" height="1080" alt="Group 48096483" src="https://github.com/user-attachments/assets/62af14ff-bd36-451d-bd29-46b32fec4749" />


<div align="center">
  <h4>
    <a href="https://www.openfort.io/">
      Website
    </a>
    <span> | </span>
    <a href="https://www.openfort.io/docs/products/embedded-wallet/swift">
      Documentation
    </a>
    <span> | </span>
    <a href="https://x.com/openfort_hq">
      X
    </a>
  </h4>
</div>


# Openfort iOS SDK

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Documentation](https://img.shields.io/badge/docs-openfort.io-blue)](https://www.openfort.io/docs/products/embedded-wallet/swift)

The easiest way to use embedded wallets, with built-in authentication and payments capabilities in Swift.

## Installation

Adding OpenfortSwift to Your Project (Swift Package Manager)

You can integrate OpenfortSwift into your iOS project using Swift Package Manager (SPM).

**1. Open Your Xcode Project**

- In Xcode, open your project or workspace.
- Select your project file from the Project Navigator.

**2. Add the Package Dependency**

- Go to File > Add Packages...
- In the search field, paste the GitHub repository URL for this SDK:

 ```plaintext
https://github.com/openfort-xyz/swift-sdk.git
 ```

**3. Import the Framework**

 ```swift
import OpenfortSwift
 ```

**4. Configure `OFConfig.plist`**

1. Download the [`OFConfig.plist`](./OFConfig.plist) and add it to your Xcode project.
2. Make sure to select **"Copy items if needed"** when adding the file to your project.
3. Open the file in Xcode and configure the following keys with your own values:
   - **backendURL** – Your backend API base URL (optional).
   - **iframeURL** – URL of your iframe environment (optional).
   - **openfortPublishableKey** – Your Openfort publishable key.
   - **shieldPublishableKey** – Your Shield publishable key.
   - **shieldURL** – Shield service URL (optional).

**5. Initialize the SDK**

In your AppDelegate:

 ```swift
import UIKit
import OpenfortSwift

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {

        OFSDK.setupSDK()

        return true
    }
}
```

## Usage

All methods are available as both async/await and completion handler variants.

### Authentication

```swift
// Email/password login
let response: OFAuthResponse? = try await OFSDK.shared.logInWithEmailPassword(
    params: OFLogInWithEmailPasswordParams(email: "user@example.com", password: "password")
)

// Email/password signup
let response: OFAuthResponse? = try await OFSDK.shared.signUpWithEmailPassword(
    params: OFSignUpWithEmailPasswordParams(email: "user@example.com", password: "password")
)

// Guest signup
let response: OFAuthResponse? = try await OFSDK.shared.signUpGuest()

// Third-party login with ID token
let response: OFAuthResponse? = try await OFSDK.shared.loginWithIdToken(
    params: OFLoginWithIdTokenParams(provider: "firebase", token: idToken)
)

// Email OTP
try await OFSDK.shared.requestEmailOtp(params: OFRequestEmailOtpParams(email: "user@example.com"))
let response: OFAuthResponse? = try await OFSDK.shared.logInWithEmailOtp(
    params: OFLogInWithEmailOtpParams(email: "user@example.com", otp: "123456")
)

// Phone OTP
try await OFSDK.shared.requestPhoneOtp(params: OFRequestPhoneOtpParams(phoneNumber: "+1234567890"))
let response: OFAuthResponse? = try await OFSDK.shared.logInWithPhoneOtp(
    params: OFLogInWithPhoneOtpParams(phoneNumber: "+1234567890", otp: "123456")
)

// OAuth
let oauthResponse = try await OFSDK.shared.initOAuth(
    params: OFInitOAuthParams(provider: "google")
)

// Logout
try await OFSDK.shared.logOut()
```

### User

```swift
let user: OFUser? = try await OFSDK.shared.getUser()
print(user?.email)
print(user?.linkedAccounts) // [OFUserAccount]
```

### Embedded Wallet

```swift
// Configure wallet with password recovery
let account: OFEmbeddedAccount? = try await OFSDK.shared.configure(
    params: OFEmbeddedAccountConfigureParams(
        chainId: 80002,
        recoveryParams: OFRecoveryParamsDTO(recoveryMethod: .password, password: "recovery-password")
    )
)

// Configure wallet with automatic recovery
let account: OFEmbeddedAccount? = try await OFSDK.shared.configure(
    params: OFEmbeddedAccountConfigureParams(
        chainId: 80002,
        recoveryParams: OFRecoveryParamsDTO(recoveryMethod: .automatic, encryptionSession: session)
    )
)

// Sign a message
let signature: String? = try await OFSDK.shared.signMessage(
    params: OFSignMessageParams(message: "Hello, World!")
)

// Get embedded state
let state: Int? = try await OFSDK.shared.getEmbeddedState()

// Export private key
let privateKey: String? = try await OFSDK.shared.exportPrivateKey()

// List accounts
let accounts: [OFEmbeddedAccount]? = try await OFSDK.shared.list()
```

### SIWE (Sign-In with Ethereum)

```swift
// Initialize SIWE
let siweInit: OFSIWEInitResponse? = try await OFSDK.shared.initSIWE(
    params: OFInitSIWEParams(address: walletAddress)
)

// Login with SIWE
let response: OFAuthResponse? = try await OFSDK.shared.loginWithSiwe(
    params: OFLoginWithSiweParams(
        signature: signature,
        message: siweMessage,
        walletClientType: "metamask",
        connectorType: "injected",
        address: walletAddress
    )
)
```

## Types

### Response Types

| Type | Description |
|------|-------------|
| `OFAuthResponse` | Auth response with `token`, `user`, `session`, `action` |
| `OFUser` | User profile with `id`, `email`, `name`, `linkedAccounts` |
| `OFUserAccount` | Linked account entry (provider, email, address, etc.) |
| `OFSession` | Auth session with `id`, `token`, `userId`, `expiresAt` |
| `OFEmbeddedAccount` | Embedded wallet account with `address`, `chainType`, `accountType` |
| `OFSIWEInitResponse` | SIWE init response with `address`, `nonce` |

### Enums

| Enum | Values |
|------|--------|
| `OFEmbeddedState` | `.none`, `.unauthenticated`, `.embeddedSignerNotConfigured`, `.creatingAccount`, `.ready` |
| `OFRecoveryMethod` | `.password`, `.automatic`, `.passkey` |
| `OFAccountType` | `.eoa`, `.smartAccount` |
| `OFChainType` | `.evm`, `.svm` |

## License

[MIT](LICENSE)
