## TSConfig

```sh
pnpm add @otter-scout/tsconfig -F @xxxx
```

tsconfig.json

```json
{
  "extends": "@otter-scout/tsconfig/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    },
    "plugins": [
      {
        "name": "next"
      }
    ],
    "tsBuildInfoFile": "node_modules/.cache/tsbuildinfo.json"
  },
  "include": [
    ".eslintrc.cjs",
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "**/*.cjs",
    "**/*.mjs",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```


## ESLint
```sh
pnpm add @otter-scout/eslint-config -F @xxxx
```

package.json

```json
"eslintConfig": {
  "root": true,
  "extends": [
    "@otter-scout/eslint-config/base",
    "@otter-scout/eslint-config/nextjs",
    "@otter-scout/eslint-config/react"
  ]
},
```
## Prettier

### Install

```sh
pnpm add @otter-scout/prettier-config -F @xxxx
```

### Setting package.json

```json
{
  "prettier": "@otter-scout/prettier-config"
}
```

## Stylelint

### Install

```sh
pnpm add @otter-scout/stylelint-config -F @xxxx
```

### Setting package.json

```json
{
  "stylelint": {
    "extends": "@otter-scout/stylelint-config"
  }
}
```

## Tailwind

### Install

```sh
pnpm add @otter-scout/tailwind-config -F @xxxx
```

1. Create postcss.config.cjs

```js
// @ts-expect-error - No types for postcss
module.exports = require('@otter-scout/tailwind-config/postcss');
```

2. Create tailwind.config.ts

```ts
import baseConfig from '@otter-scout/tailwind-config';
import { nextui } from '@nextui-org/react';
import { type Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
```
