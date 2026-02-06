# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-02-06

### Breaking Changes

**Type renames** (aligned with openfort-js SDK naming):
- `OFAuthorizationResponse` → `OFAuthResponse`
- `OFGetUserInstanceResponse` → `OFUser`
- `OFUserLinkedAccount` → `OFUserAccount`
- `OFAuthSession` → `OFSession`
- `OFInitSIWEResponse` → `OFSIWEInitResponse`
- `OFConfigureEmbeddedWalletDTO` → `OFEmbeddedAccountConfigureParams`
- `OFAuthEmailPasswordParams` → `OFLogInWithEmailPasswordParams`
- `OFSignUpResponse` is now a typealias for `OFAuthResponse`

**Method renames**:
- `loginWith(params:)` → `logInWithEmailPassword(params:)`
- `signUpWith(params:)` → `signUpWithEmailPassword(params:)`

**DTO fixes** (params now match JS SDK signatures):
- `OFResetPasswordParams`: changed from `{email, password, state}` to `{password, token}`
- `OFVerifyEmailParams`: changed from `{email, state}` to `{token, callbackURL?}`
- `OFStoreCredentialsParams`: changed from `{provider, token, tokenType, ecosystemGame}` to `{token, userId}`

**Removed methods** (did not exist in JS SDK):
- `linkEmailPassword(params:)`
- `unlinkEmailPassword(params:)`
- `linkThirdPartyProvider(params:)`

### New Methods

- `requestEmailOtp(params:)` — Request an email OTP
- `logInWithEmailOtp(params:)` — Log in with email OTP
- `requestPhoneOtp(params:)` — Request a phone OTP
- `logInWithPhoneOtp(params:)` — Log in with phone OTP
- `linkPhoneOtp(params:)` — Link a phone number via OTP
- `verifyEmailOtp(params:)` — Verify email with OTP
- `loginWithSiwe(params:)` — Log in with Sign-In with Ethereum
- `initLinkSiwe(params:)` — Initialize SIWE wallet linking
- `linkWithSiwe(params:)` — Link a wallet via SIWE
- `addEmail(params:)` — Add an email to the account

### Fixes

- Response models now match actual JS SDK return shapes instead of backend OpenAPI types
- Auth methods correctly decode `{token, user, session}` responses
- `createdAt` fields handle both integer timestamps and ISO string dates via `FlexTimestamp`
- JS error messages are now forwarded to Swift callers
- Added `safeCall` wrapper in JS bridge to catch synchronous errors
- Regenerated `openfort.js` bundle from latest openfort-js v1.1.5

## [0.0.1] - 2025-09-08

Public Launch
