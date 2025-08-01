# Nuxt 4 Starter

A minimal opinionated starter template based on [Nuxt 4](https://nuxt.com). It comes with essential dependencies and a basic configuration setup that I use in every Nuxt project.

## Features

- [Husky](https://typicode.github.io/husky/) with pre-commit git hook running [lint-staged](https://github.com/lint-staged/lint-staged)
- Github actions on pull request to master/main branch
- Fully configured Eslint with [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- Typesafe `.env` with [Zod](https://zod.dev/)
- .vscode setup
- Nuxt modules
  - [@nuxt/eslint](https://eslint.nuxt.com/)
  - [@nuxt/icon](https://github.com/nuxt/icon)
  - [@nuxt/fonts](https://fonts.nuxt.com)
  - [@nuxt/image](https://image.nuxt.com)
  - [@vueuse/nuxt](https://vueuse.org/)
  - [@pinia/nuxt](https://pinia.vuejs.org/)

---

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
