module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:css/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['css', '@typescript-eslint', 'react'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/jsx-indent': [1, 4, { checkAttributes: false, indentLogicalExpressions: false }],
        'react/jsx-indent-props': [1, 4],
        'import/extensions': ['error', 'always'],
    },
};
