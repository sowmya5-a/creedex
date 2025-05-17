import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // keep all your existing extends…
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // add a rules block to override just the explicit-any rule:
  {
    rules: {
      // disable “no-explicit-any” so using `any` no longer errors:
      "@typescript-eslint/no-explicit-any": "off",

      // you can also tweak other rules here, for example:
      // turn unused-vars into a warning instead of an error:
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
