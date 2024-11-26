## Usage

### Install

```sh
pnpm add @leeonon/tailwind-config
```

1. Create postcss.config.cjs

```js
module.exports = require('@leeonon/tailwind-config/postcss');
```

2. Create tailwind.config.ts

```ts
import baseConfig from '@leeonon/tailwind-config';
import { type Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [baseConfig],
  theme: {},
  darkMode: 'class',
  plugins: [],
} satisfies Config;
```
