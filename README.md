Steps to reproduce:

```sh
pnpm install
pnpm build
```

`next@13.1.6` build passes:

```sh
pnpm add next@13.1.6
pnpm build
```

Full error log:

```
> next-ofetch-edge-api-route@ build /home/user/next-ofetch-edge-api-route
> next build

info  - Linting and checking validity of types...
info  - Creating an optimized production build...
Failed to compile.

node:buffer
Module build failed: UnhandledSchemeError: Reading from "node:buffer" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
    at /home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395974
    at Hook.eval [as callAsync] (eval at create (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:13:28771), <anonymous>:6:1)
    at Object.processResource (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395899)
    at processResource (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5308)
    at iteratePitchingLoaders (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4667)
    at runLoaders (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8590)
    at NormalModule._doBuild (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395761)
    at NormalModule.build (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:397789)
    at /home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:81243
    at NormalModule.needBuild (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:401868)

Import trace for requested module:
node:buffer
./node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/index.mjs
./node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs

node:fs
Module build failed: UnhandledSchemeError: Reading from "node:fs" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
    at /home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395974
    at Hook.eval [as callAsync] (eval at create (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:13:28771), <anonymous>:6:1)
    at Object.processResource (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395899)
    at processResource (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5308)
    at iteratePitchingLoaders (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4667)
    at runLoaders (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8590)
    at NormalModule._doBuild (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395761)
    at NormalModule.build (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:397789)
    at /home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:81243
    at NormalModule.needBuild (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:401868)

Import trace for requested module:
node:fs
./node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/index.mjs
./node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs

node:https
Module build failed: UnhandledSchemeError: Reading from "node:https" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
    at /home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395974
    at Hook.eval [as callAsync] (eval at create (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:13:28771), <anonymous>:6:1)
    at Object.processResource (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395899)
    at processResource (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5308)
    at iteratePitchingLoaders (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4667)
    at runLoaders (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8590)
    at NormalModule._doBuild (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395761)
    at NormalModule.build (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:397789)
    at /home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:81243
    at NormalModule.needBuild (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:401868)

Import trace for requested module:
node:https
./node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs

node:http
Module build failed: UnhandledSchemeError: Reading from "node:http" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
    at /home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395974
    at Hook.eval [as callAsync] (eval at create (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:13:28771), <anonymous>:6:1)
    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:13:25925)
    at Object.processResource (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395899)
    at processResource (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5308)
    at iteratePitchingLoaders (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4667)
    at runLoaders (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8590)
    at NormalModule._doBuild (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395761)
    at NormalModule.build (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:397789)
    at /home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:81243

Import trace for requested module:
node:http
./node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs

node:net
Module build failed: UnhandledSchemeError: Reading from "node:net" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
    at /home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395974
    at Hook.eval [as callAsync] (eval at create (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:13:28771), <anonymous>:6:1)
    at Object.processResource (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395899)
    at processResource (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5308)
    at iteratePitchingLoaders (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4667)
    at runLoaders (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8590)
    at NormalModule._doBuild (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:395761)
    at NormalModule.build (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:397789)
    at /home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:81243
    at NormalModule.needBuild (/home/user/next-ofetch-edge-api-route/node_modules/.pnpm/next@13.2.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/webpack/bundle5.js:28:401868)

Import trace for requested module:
node:net
./node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/index.mjs
./node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs


> Build failed because of webpack errors
 ELIFECYCLE  Command failed with exit code 1.
```
