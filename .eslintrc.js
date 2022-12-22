module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react-hooks", "react", "@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    indent: [
      "warn",
      2,
      {
        ignoredNodes: ["TemplateLiteral"],
        SwitchCase: 1,
      },
    ],
    quotes: ["error", "single"],
    "prefer-destructuring": "error",
    "array-bracket-spacing": "warn",
    "block-spacing": [2, "always"],
    "no-console": "off",
    "no-use-before-define": "error",
    semi: "error",
    "jsx-quotes": 2,
    "react-hooks/rules-of-hooks": 0,
    "react-hooks/exhaustive-deps": "warn",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prefer-stateless-function": [2, { ignorePureComponents: true }],
    "react/style-prop-object": "off",
    "react/jsx-key": "off",
    "react/no-find-dom-node": 1,
    "@typescript-eslint/no-unused-vars": "error",
    "import/no-unresolved": "error",
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/prop-types": 2,
    "jsx-a11y/alt-text": 0,

    "import/extensions": [
      2,
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "none",
          },
        ],
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
