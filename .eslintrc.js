module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react-hooks', 'react', '@typescript-eslint', 'import'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'no-set-state': 'off',
    'prefer-destructuring': 'warn',
    'no-shadow': 'off',
    quotes: ['error', 'single'],
    'array-bracket-spacing': 'warn',
    'block-spacing': [2, 'always'],
    'react-hooks/rules-of-hooks': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'max-lines-per-function': 'off',
    'jsx-quotes': 0,
    'react/self-closing-comp': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 'off',
    'react/style-prop-object': 'off',
    'react/jsx-key': 'off',
    'no-nested-ternary': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 'off',
    'no-param-reassign': 'error',
    'no-plusplus': 1,
    'react/no-find-dom-node': 1,
    semi: 'error',
    'react/prop-types': 2,
    'jsx-a11y/alt-text': 0,
    indent: [
      'warn',
      2,
      {
        MemberExpression: 1,
        ignoredNodes: ['TemplateLiteral'],
        SwitchCase: 1,
      },
    ],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
