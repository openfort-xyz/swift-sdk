# js-src — bundled WebView JavaScript sources

Source for the prebuilt JS bundles checked into `Sources/OpenfortSwift/Resources/`. The bundles are
committed so the SwiftPM package needs no Node toolchain to build; this directory keeps them
reproducible.

## openfort-entry.js → Resources/openfort.js

The openfort-js SDK, bundled as a browser IIFE for the SDK WebView. It exposes the `Openfort` class
as a global so `OFConfig.openfortSyncScript` can `new Openfort({ baseConfiguration,
shieldConfiguration, overrides: { storage } })` and assign `window.openfort`. The bridge
(`openfort-sync.js`) then drives it via `window.openfort.authInstance.*` /
`window.openfort.embeddedWalletInstance.*` / `window.openfort.proxyInstance.*`.

Pin the version explicitly. Three constraints set the floor:

- delegated-account (EIP-7702 / Calibur) gasless sends through the provider require **openfort-js ≥
  1.3.2**, which signs the first-send authorization in `sendCallsSync` (older versions revert `AA24`);
- the funding namespace (`window.openfort.funding.*`, driven by `openfort-sync.js`'s `funding*Sync`
  shims) requires **openfort-js ≥ 1.5.0**, the release that ships `openfort.funding`;
- Transactions v2 (`proxyInstance.sendTransactionSignatureRequest`, `/v2/transactions`) requires
  **openfort-js ≥ 2.4.2**, which finalised the v2 response field names (`calls[].contractId`).

Currently pinned to **2.5.0**.

### Build

```sh
mkdir -p /tmp/ofjs && cd /tmp/ofjs
npm init -y >/dev/null
npm install @openfort/openfort-js@2.5.0 esbuild@^0.24.0
cp /path/to/repo/js-src/openfort-entry.js entry.js
./node_modules/.bin/esbuild entry.js \
  --bundle --minify --format=iife --platform=browser --target=es2020 \
  --outfile=/path/to/repo/Sources/OpenfortSwift/Resources/openfort.js
```

`--format=iife` so it runs as a single `WKUserScript`; `--platform=browser` so openfort-js uses the
WebView's `fetch`/`crypto`. Do **not** enable property mangling: the bridge reads the TypeScript
`private` fields `authInstance` / `embeddedWalletInstance` / `proxyInstance` / `userInstance`, which
are erased at runtime and must keep their names. After rebuilding, confirm the bundle still carries
the bridge props, the v2 proxy method and the pinned version:

```sh
grep -oE 'authInstance|embeddedWalletInstance|proxyInstance|sendTransactionSignatureRequest|sendCalls|get funding\(\)|setPaymentMethod|"2\.5\.0"' \
  Sources/OpenfortSwift/Resources/openfort.js | sort -u
```
