import css from 'eslint-plugin-css';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default tseslint.config(
  css.configs['flat/recommended'],
  eslint.configs.recommended,
  tseslint.configs.recommended,
  defineConfig([globalIgnores(['dist/', 'node_modules/'])]),
  {
    plugins: {
      css,
      '@typescript-eslint': tseslint.plugin,
      react,
      'jsx-a11y': jsxA11y,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.eslint.json',
      },
    },

    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      'react/require-default-props': [
        'off',
        {
          functions: 'defaultArguments',
        },
      ],

      'linebreak-style': ['error', 'unix'],
      semi: ['error', 'always'],
      'max-len': 'off',
      indent: 'off',
      quotes: 'off',
      'import/prefer-default-export': 'off',

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx'],
        },
      ],

      'react/jsx-indent': [
        1,
        2,
        {
          checkAttributes: false,
          indentLogicalExpressions: false,
        },
      ],

      'react/jsx-indent-props': [1, 2],
      'import/extensions': 'off',
      'react/react-in-jsx-scope': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '_',
        },
      ],

      'jsx-a11y/label-has-associated-control': [
        2,
        {
          labelAttributes: ['label'],
          controlComponents: ['Field'],
          depth: 3,
        },
      ],
    },
  },
);
