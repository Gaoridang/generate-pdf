module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "airbnb/hooks", "standard-with-typescript", "prettier"],
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    "no-console": "off",
    "no-multiple-empty-lines": "error",
    "@typescript-eslint/no-misused-promises": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
  },
};
