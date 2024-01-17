## Usage

### Install

```sh
pnpm add @otter-hacker/prettier-config
```

### Custom configuration needed

```js
// .prettierrc.mjs
import { fileURLToPath } from 'url';

import otterPrettier from '@otter-hacker/prettier-config';

export default {
  ...otterPrettier,
  tailwindConfig: fileURLToPath(
    new URL('./tailwind.config.ts', import.meta.url),
  ),
};
```

### No customization

```json
{
  "prettier": "@otter-hacker/prettier-config"
}
```
