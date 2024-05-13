<div align="center">
  <h1>Expo monorepo</h1>
  <p>Fast pnpm monorepo for cross-platform apps built with Expo and React</p>
</div>

<br />


## 🚀 How to use it

You can use and modify this repository however you want. If you want to use EAS to build your app, you'll need to create an [Expo access token](https://expo.dev/accounts/[account]/settings/access-tokens) and set it as `EXPO_TOKEN` GitHub actions secret.

To run the repository locally, run these two commands:

- `$ pnpm install` - This installs all required Node libraries using [pnpm](https://pnpm.io/).
- `$ pnpm dev` - Starts the development servers for all **apps**.


## 📁 Structure

- [`apps`](./apps) - Apps that only use packages and aren't aware of other apps.
- [`packages`](./packages) - Packages that may use external and/or other monorepo packages.

### Apps

- [`apps/mobile`](./apps/mobile) - Expo app using `eslint-config` and `feature-home` packages.

### Packages

- [`packages/components`](./packages/components) -  All the components live here.
- [`packages/core`](./packages/core) - All the logic related stuff lives here.


