import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      quotes: ['error'],
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
];
