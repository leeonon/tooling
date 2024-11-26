## Usage

### Install

```sh
pnpm add @leeonon/prettier-config
```

### Custom configuration needed

```js
// .prettierrc.mjs
import { fileURLToPath } from 'url';

import otterPrettier from '@leeonon/prettier-config';

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
  "prettier": "@leeonon/prettier-config"
}
```
