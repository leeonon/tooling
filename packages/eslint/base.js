/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'jsdoc', 'perfectionist', 'unused-imports'],
  extends: [
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'perfectionist/sort-objects': [
      'error',
      {
        order: 'asc',
        type: 'natural',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        ' argsIgnorePattern': '^_',
        args: 'after-used',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],

    // These opinionated rules are enabled in stylistic-type-checked above.
    // Feel free to reconfigure them to your own preference.
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/unbound-method': 'off',

    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};

module.exports = config;
