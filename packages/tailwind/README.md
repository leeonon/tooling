## Usage

### Install

```sh
pnpm add @otter-hacker/tailwind-config -F @xxxx
```

1. Create postcss.config.cjs

```js
module.exports = require('@otter-hacker/tailwind-config/postcss');
```

2. Create tailwind.config.ts

```ts
import baseConfig from '@otter-hacker/tailwind-config';
import { type Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [baseConfig],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
```
