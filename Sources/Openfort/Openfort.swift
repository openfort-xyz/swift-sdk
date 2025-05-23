
public class Openfort {
    
    private lazy var authManager = AuthManager(publishableKey: "", openfortURL: "")
    
    public init(_ sdkConfiguration: OpenfortSDKConfiguration) {
        
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
