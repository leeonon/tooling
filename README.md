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

## 发布
1. `dev` 分支开发完成一个功能，执行 `pnpm changeset`，选择变更的包， 描述此次的改动是什么，这将在`.changeset` 目录生成 md 文件，需要提交到仓库
2. 全部功能开发完毕，将 `dev` 分支合并到 `main` 触发 `Github Action`, 此时会自动执行 `yml` 配置中的 `pnpm run version` 命令，也就是 `pnpm changeset version`, 将会修改变动的包的版本号，以及生成对应的 `CHANGELOG` 日志文件，执行完毕后会创建一个 `Pull Request` ，目标分支为 `changeset-release/main`，这时候 `package` 还未真正发布到 `npm`。
4. `Merge Pull Request`，再次触发 `Github Action`, 这时候会执行 `changesets/action@v1`，此时`.changesets` 文件中的更改集已经被 `pnpm changeset version` 命令使用掉，所以 `No changesets found, attempting to publish any unpublished packages to npm`。未找到任何更改集，尝试将所有未发布的软件包发布到npm。然后会执行 `pnpm run lint && pnpm publish -r` 命令，将 package 发布到 npm 中。  
