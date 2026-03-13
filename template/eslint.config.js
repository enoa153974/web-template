import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/**/*.js"],

    ...js.configs.recommended,

    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
      ecmaVersion: "latest"
    },

    rules: {

      // 未使用変数
      "no-unused-vars": "warn",

      // console許可
      "no-console": "off",

      // var禁止
      "no-var": "error",

      // const推奨
      "prefer-const": "warn"
    }
  }
]);