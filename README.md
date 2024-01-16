## TSConfig

```sh
pnpm add @otter-hacker/tsconfig -F @xxxx
```

tsconfig.json

```json
{
  "extends": "@otter-hacker/tsconfig/base.json",
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
pnpm add @otter-hacker/eslint-config -F @xxxx
```

package.json

```json
"eslintConfig": {
  "root": true,
  "extends": [
    "@otter-hacker/eslint-config/base",
    "@otter-hacker/eslint-config/nextjs",
    "@otter-hacker/eslint-config/react"
  ]
},
```
## Prettier

### Install

```sh
pnpm add @otter-hacker/prettier-config -F @xxxx
```

### Setting package.json

```json
{
  "prettier": "@otter-hacker/prettier-config"
}
```

## Stylelint

### Install

```sh
pnpm add @otter-hacker/stylelint-config -F @xxxx
```

### Setting package.json

```json
{
  "stylelint": {
    "extends": "@otter-hacker/stylelint-config"
  }
}
```

## Tailwind

### Install

```sh
pnpm add @otter-hacker/tailwind-config -F @xxxx
```

1. Create postcss.config.cjs

```js
// @ts-expect-error - No types for postcss
module.exports = require('@otter-hacker/tailwind-config/postcss');
```

2. Create tailwind.config.ts

```ts
import baseConfig from '@otter-hacker/tailwind-config';
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
