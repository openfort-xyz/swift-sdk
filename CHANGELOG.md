# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Fixes

- `initOAuth` and `initLinkOAuth` now return the provider URL. openfort-js resolves these calls to
  a URL string, which the bridge posted as-is, so decoding into `OFInitOAuthResponse` /
  `OFInitLinkOAuthResponse` failed and both methods always threw. The bridge now wraps the string
  as `{ url }`.
- `options["redirectTo"]` now reaches openfort-js. It reads `redirectTo` as a top-level argument,
  so the bridge dropped the value and the OAuth request went out without a callback URL. The
  bridge lifts `redirectTo` out of `options` and forwards the remaining options unchanged.

## [3.0.1] - 2026-09-25

### Fixes

- Bridge calls no longer stall when WebKit suspends the hidden WebView. `OFWebView` is never in a
  window, so WebKit suspends its content process a few seconds after the last `evaluateJavaScript`;
  asynchronous work openfort-js does in that gap (the embedded-signer iframe during `configure`,
  `create`, `recover` and signing) hung until an unrelated call woke it. The SDK now ticks a no-op
  script every 0.5s while any bridge call is pending. The always-on 1s embedded-state poll that
  2.0.0 removed had masked this.

## [3.0.0] - 2026-09-25

Transactions v2: the SDK now signs and submits `/v2/transactions` transactions, backed by the
openfort-js 2.5.0 bundle.

### Breaking Changes

- **`sendSignatureTransactionIntentRequest` is now `sendTransactionSignatureRequest`.** It takes
  `OFSendTransactionSignatureRequestParams(transactionId:hash:signature:optimistic:)` (was
  `OFSendSignatureTransactionIntentRequestParams(transactionIntentId:signableHash:...)`) and
  returns `OFTransactionResponse` (was `OFTransactionIntentResponse`). Create the transaction
  from your backend with `POST /v2/transactions` and pass its `id` and `nextAction.hash`.
- **Removed the v1 transaction-intent, player and policy models**: `OFTransactionIntentResponse`,
  `OFNextActionResponse`, `OFNextActionPayload`, `OFResponseResponse`, `OFInteraction`,
  `OFTransactionDetails`, `OFTransactionAbstractionType`, `OFPolicyOrEntity`, `OFPlayerOrEntity`,
  `OFAccountOrEntity`, `OFEntityIdResponse`, `OFAuthPlayerResponse`, `OFLinkedAccountResponse`
  and their protocols. `OFAuthProvider`, `OFLog` and `JSONValue` are unchanged and live in their
  own files.
- **`OFSessionResponse`** drops `transactionIntents`; `nextAction` is now `OFSessionNextAction`
  (`type`, `payload.signableHash`).
- **Removed `linkWallet`, `poolOAuth` and `authenticateWithSIWE`** (with `OFLinkWalletParams`,
  `OFPoolOAuthResponse`, `OFAuthenticateWithSIWEParams`, `OFAuthenticateWithSIWEResponse`). They
  have no counterpart in openfort-js 2.5.0; use `linkWithSiwe` and `loginWithSiwe`.
- `OFUnlinkWalletParams` takes `chainId: Int` instead of `authToken`; `OFUnlinkOAuthParams` no
  longer takes `authToken`.
- `OFGetEthereumProviderParams.policy` is now `feeSponsorship`.
- `OFPasskeyInfoDTO.passkeyKey` is a base64url `String?` (was `[UInt8]?`).
- Removed the unused `OFGetResponse`, `OFEmbeddedOwner` and `OFEmbeddedChainType`; `get()` has
  returned `OFEmbeddedAccount` since 1.0.0.

### Changed

- Upgraded the vendored `openfort.js` bundle from 1.5.0 to 2.5.0. Rebuild instructions in
  `js-src/README.md`.

### Fixes

- The bridge passed a single object where openfort-js expects positional arguments in
  `sendSignatureSessionRequest` (and the former transaction-intent call); both now call
  positionally.
- `create`, `recover`, `getEthereumProvider` and `ping` forwarded `undefined` to openfort-js
  because the bridge destructured a wrapper the Swift side never sent. `getEthereumProvider`
  therefore ignored `feeSponsorship` and `chains`.
- `loginWithIdToken` called a non-existent `authInstance.loginWithIdToken`; it now calls
  `logInWithIdToken`.

## [2.1.0] - 2026-06-26

Cross-chain funding (deposit) support, mirroring `@openfort/react`'s `useFunding`.

### New

- **Funding (cross-chain deposit).** `OFFunding` — a SwiftUI `ObservableObject`
  mirroring `@openfort/react`'s `useFunding` (`fund` / `createSession` / `track` /
  `payLink` / `reset`, publishing `session` / `status` / `loading` / `error` /
  `isAvailable`). Fund an embedded wallet from any chain or a centralized
  exchange; source routes are `evm` / `solana` / `cex`. The namespace is also
  available directly on `OFSDK.shared` (`fundingCreateSession`,
  `fundingSetPaymentMethod`, `fundingGetSession`, `fundingPayLink`,
  `fundingChains`) for headless use. Funding authenticates with the project
  publishable key, so it works for guest and authenticated users alike.
- `OFFundingChains` — a SwiftUI loader mirroring `@openfort/react`'s
  `useFundingChains`, fetching the live funding source-chain catalog instead of
  hardcoding it in the UI.
- The bundled `openfort.js` WebView is now inspectable in debug builds (Safari
  Web Inspector) to diagnose embedded-wallet / Shield setup.

### Changed

- Upgraded the vendored `openfort.js` bundle from 1.3.7 to 1.5.0 — the release
  that ships the `window.openfort.funding` namespace. Rebuildable via
  `js-src/openfort-entry.js`.

## [2.0.0] - 2026-06-15

Surfaced by dogfooding the SDK to build a Cash App–style wallet.

### Breaking Changes

- **Removed the `Web3.swift` dependency.** This also drops the transitive
  swift-nio, PromiseKit, CryptoSwift, secp256k1, and BigInt dependencies.
- **`OpenfortEIP1193Web3Provider` no longer conforms to `Web3Provider`** and no
  longer exposes `Web3`/`Boilertalk` types. The completion-based
  `send(request: RPCRequest, response:)` API and the `Web3ResponseCompletion`
  typealias are removed, replaced by `request(method:params:) async throws -> String?`.
- `OpenfortEIP1193Web3Provider.init` no longer takes a `callbackQueue`; it now
  takes an optional `getProviderParams`.
- `OFConfig`'s `debug` key is now optional (the sample `OFConfig.plist` shipped
  without it, which previously failed to decode and left the SDK unconfigured).

### New

- **Native EIP-7702 / Calibur gasless sends.** Upgraded the vendored
  `openfort.js` bundle from 1.1.5 to 1.3.7, so a `.delegatedAccount` gasless send
  through `provider.request("eth_sendTransaction", policy)` signs the first-send
  7702 authorization in `sendCallsSync` (no longer reverts `AA24`). Removed the
  782KB bundled-viem workaround and `OF7702Sender` (net JS −390KB). Rebuildable
  via `js-src/openfort-entry.js`.
- `OFERC20` — token balances, `transfer` calldata, and `transferHistory`
  (chunked `eth_getLogs`) returning `[OFTokenTransfer]` for activity feeds.
- `OFEVM` — `waitForReceipt` and `waitForUserOperationReceipt` (Openfort bundler)
  so the UI can settle after a send.
- `waitUntilReady(timeout:)` plus public `.openfortReady` / `.openfortInitError`
  notifications. Embedded-wallet readiness is now event-driven (lifecycle events
  with a bounded backstop) instead of a 1s polling timer.

### Fixes

- `requestEmailOtp` no longer fails with an opaque `INVALID_CONFIGURATION` that
  masked a keychain error. `OFKeychainHelper.save` returns its `OSStatus` and
  `setupSDK()` throws a clear `OFError.keychainInaccessible` (e.g. on
  `errSecMissingEntitlement -34018`).
- `OFScriptMessageProcessor` decodes bare array responses (`list()` returns an
  array in openfort-js ≥1.3.2).
- Adapted to renamed JS SIWE methods (`initSIWE`→`initSiwe`,
  `authenticateWithSIWE`→`loginWithSiwe`).
- `OFError` now conforms to `LocalizedError`.

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
