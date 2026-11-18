import js from '@eslint/js';
import globals from 'globals';

// ESLint checks the site's JavaScript for mistakes. Run it with: npm run lint
export default [
  // Folders to skip: build output and installed packages
  { ignores: ['dist/', 'node_modules/'] },

  // ESLint's recommended rules: undefined variables, unreachable code, duplicate keys, etc.
  js.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      // The site runs in a browser, so document, window, navigator, etc. exist
      globals: { ...globals.browser },
    },
    rules: {
      'no-console': ['warn', { allow: ['error'] }], // console.log left in by mistake
      'prefer-const': 'error', // use const unless the value changes
      'no-var': 'error', // use let/const, not var
      eqeqeq: 'error', // use === instead of ==
    },
  },

  // This config file itself runs in Node, not the browser
  {
    files: ['eslint.config.js'],
    languageOptions: { globals: { ...globals.node } },
  },
];
