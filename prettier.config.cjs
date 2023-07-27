/** @type {import("prettier").Options} */
module.exports = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-svelte"),
  ],
  tailwindConfig: "./tailwind.config.cjs",
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
    { 
      files: '*.svelte', 
      options: { parser: 'svelte' } 
    }
  ]
}
