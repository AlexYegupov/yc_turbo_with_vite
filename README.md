# AY: turbo + workspaces + vite
    npx create-turbo -e with-vite

## how it was created
 - npx create-turbo -e with-vite
   then select yarn(!) there (not use "yarn create turbo" because it not works)

 - in dir upgrade yarn to latest BERRY version (2+)
   yarn set version stable

 - setup yarn to loose mode (to be compatible with eslint module loader)
   in .yarnrc.yml:
     enableGlobalCache: false
     nodeLinker: node-modules
     pnpMode: strict  #loose

 - to deny "yarn" warning:
    ➤ YN0002: │ @repo/eslint-config@workspace:packages/config-eslint doesn't provide eslint (p6cd8b), requested by eslint-config-prettier.

   add peer eslint dependency to packages/config-eslint/package.json:
     "peerDependencies": {
       "eslint": ">=7.0.0"
     }
   (same as node_modules/eslint-config-prettier/package.json





 - add to packages/config-typescript/base.json:
    /* free typing */
    "noImplicitAny": false,
    "noImplicitThis": false,
    "allowJs": true,
    "checkJs": true
 -
 - add web2 (packages/web + react)
 - add ui2 (packages/ui + react)

 - (optional) to use emacs use pnpify:
   ```
   yarn add -D @yarnpkg/pnpify
   yarn pnpify emacs .
   ```

## ui2

ui + react


# ORIGINAL README:

# `Turborepo` Vite starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e with-vite
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: a vanilla [vite](https://vitejs.dev) ts app
- `web`: another vanilla [vite](https://vitejs.dev) ts app
- `ui`: a stub component & utility library shared by both `web` and `docs` applications
- `eslint-config-custom`: shared `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
