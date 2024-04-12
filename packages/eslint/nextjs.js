/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['./base.js', 'next/core-web-vitals'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};

module.exports = config;
