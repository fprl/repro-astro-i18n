/**
 * @type {import("eslint").Linter.Config}
 * @see https://eslint.org/docs/user-guide/configuring
 * @see https://github.com/ota-meshi/eslint-plugin-astro
*/
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'turbo', 'prettier'],
  rules: {},
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Enable this plugin
      plugins: ["astro"],
      env: {
        // Enables global variables available in Astro components.
        node: true,
        "astro/astro": true,
        es2020: true,
      },
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser", extraFileExtensions: [".astro"],// The script of Astro components uses ESM.sourceType: "module",
      },
      rules: { "astro/no-conflict-set-directives": "error", "astro/no-unused-define-vars-in-style": "error", },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: { browser: true, es2020: true, },
      parserOptions: { sourceType: "module", },
      rules: { "prettier/prettier": "off", },
    },
  ],
}
