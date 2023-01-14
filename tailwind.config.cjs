/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          100: "#dbddea",
          200: "#b7bcd5",
          300: "#939bc0",
          400: "#6f7aac",
          500: "#525d8f",
          600: "#3e466b",
          700: "#033a6d",
          800: "#292e47",
          900: "#141723",
          1000: "#0f111a",
        },
      },
      fontFamily: {
        neutro: "'Neutro', sans-serif;",
        urb: "'Urbanist', sans-serif"
      },
      animation: {
        pageHighlight: "active-page-hl 400ms ease-out 1 forwards",
        jiggle: "jiggle 200ms ease-out 1 forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
