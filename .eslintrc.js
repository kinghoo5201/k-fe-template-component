// eslint config

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  settings: {
    react: { version: "latest" },
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  globals: {
    $: true,
    define: true,
    require: true,
    module: true,
  },
  rules: {
    "no-var": "warn",
    "prefer-const": ["warn", { destructuring: "all" }],
    "no-unused-vars": 0, // 与 @typescript-eslint/no-unused-vars 重复
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    indent: ["warn", 2, { SwitchCase: 1 }],
    quotes: ["error", "single"],
    semi: ["warn", "always", { omitLastInOneLineBlock: true }],
    "default-case": "error",
    "no-fallthrough": 0,
    eqeqeq: ["error", "always"],
    "no-warning-comments": [
      "warn",
      {
        terms: ["xxx", "todo"],
        location: "start",
      },
    ],
    "spaced-comment": [
      "warn",
      "always",
      {
        markers: ["/"],
      },
    ],
    "comma-spacing": [
      "warn",
      {
        before: false,
        after: true,
      },
    ],
    "key-spacing": [
      "warn",
      {
        beforeColon: false,
        afterColon: true,
        mode: "minimum",
      },
    ],
    "keyword-spacing": [
      "warn",
      {
        before: true,
        after: true,
      },
    ],
    "arrow-spacing": [
      "warn",
      {
        before: true,
        after: true,
      },
    ],
    "object-curly-spacing": [
      "warn",
      "always",
      {
        objectsInObjects: false,
      },
    ],
    "array-bracket-spacing": ["warn", "never"],
    "no-multi-spaces": [
      "warn",
      {
        ignoreEOLComments: true,
      },
    ],
    "space-before-blocks": ["warn", "always"],
    "space-infix-ops": "warn",
    "template-curly-spacing": "warn",
    "jsx-quotes": ["error", "prefer-double"],
    "require-atomic-updates": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/jsx-curly-spacing": [
      "warn",
      {
        when: "never",
        children: true,
      },
    ],
    "react/jsx-wrap-multilines": [
      "warn",
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-re": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/prefer-string-starts-ends-with": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/unbound-method": 0,
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/no-floating-promises": 0,
  },
};
