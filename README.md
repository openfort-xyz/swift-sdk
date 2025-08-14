# swift-sdk

📦 Adding OpenfortSwift to Your Project (Swift Package Manager)

You can integrate OpenfortSwift into your iOS project using Swift Package Manager (SPM).

**1️⃣ Open Your Xcode Project**

- In Xcode, open your project or workspace.
- Select your project file from the Project Navigator.

**2️⃣ Add the Package Dependency**

-	Go to File → Add Packages….
-	In the search field, paste the GitHub repository URL for this SDK:

 ```plaintext
https://github.com/openfort-xyz/swift-sdk.git
 ```

**2️⃣ Import the Framework**

 ```swift
import OpenfortSwift
 ```

**4️⃣ Configure `OFConfig.plist`**

1. Download the [`OFConfig.plist`](./OFConfig.plist) and add it to your Xcode project.
2. Make sure to select **"Copy items if needed"** when adding the file to your project.
3. Open the file in Xcode and configure the following keys with your own values:
   - **backendURL** – Your backend API base URL (optional).
   - **iframeURL** – URL of your iframe environment (optional).
   - **openfortPublishableKey** – Your Openfort publishable key.
   - **shieldPublishableKey** – Your Shield publishable key.
   - **shieldEncryptionKey** – Your Shield encryption key.
   - **shieldURL** – Shield service URL (optional).

**5️⃣ Initialize the SDK**


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

