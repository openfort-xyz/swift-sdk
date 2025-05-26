
public class Openfort {
    private let config: OpenfortSDKConfiguration
    private lazy var authManager = AuthManager(
        config: config
    )
    
    public init(_ sdkConfiguration: OpenfortSDKConfiguration) {
        self.config = sdkConfiguration
    }
    
    public func logInWith(email: String, password: String) async throws {
        try await authManager.loginEmailPassword(
            email: email,
            password: password,
            ecosystemGame: nil
        )
    }
    
    public func signUpWith(email: String, password: String) async throws -> Bool {
        fatalError("Not implemented yet")
    }
    
    public func logout() async throws {
        fatalError("Not implemented yet")
    }
    
    public func signMessage(message: String) async throws -> String {
        fatalError("Not implemented yet")
    }
    
    public func exportPrivateKey() async throws -> String {
        fatalError("Not implemented yet")
    }
}
