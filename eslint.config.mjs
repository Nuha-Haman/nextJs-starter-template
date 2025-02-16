// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

// Initialize FlatCompat to support traditional ESLint configurations
const compat = new FlatCompat({
  baseDirectory: import.meta.url, // Use import.meta.url for ESM modules
});

/** @type {import('eslint').Linter.Config[]} */

const eslintConfig = [
  // Apply configurations to relevant file types
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: pluginReact,
    },
    rules: {
      // Add your custom rules here
    },
  },
  // Include configurations from traditional ESLint setups
  ...compat.config({
    extends: ["next", "prettier", "next/core-web-vitals"],
  }),
];

export default eslintConfig;
