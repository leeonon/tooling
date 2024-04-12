/** @type { import("eslint").Linter.Config } */
module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  extends: ['./base.js', 'plugin:svelte/recommended'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
    sourceType: 'module',
  },
};
