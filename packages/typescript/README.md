## Usage

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
