import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/switch-exhaustiveness-check": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/prefer-function-type": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/consistent-type-assertions": "off",
      "@typescript-eslint/prefer-optional-chain": "off",
      "@typescript-eslint/prefer-ts-expect-error": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
];
