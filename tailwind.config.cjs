/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#b0bdc2",
          200: "#96a7ad",
          300: "#7c9199",
          400: "#657a82",
          500: "#516168",
          600: "#3c494e",
          700: "#272f32",
          800: "#14181a",
          900: "#000",
        },
        cool: {
          100: "#a5c2cd",
          200: "#87aebd",
          300: "#699aac",
          400: "#528395",
          500: "#416877",
          600: "#314e59",
          700: "#20343b",
        },
        blaze: {
          100: "#ffd3d0",
          200: "#ffa8a2",
          300: "#ff7d73",
          400: "#fe5245",
          500: "#ff2717",
          600: "#e71000",
          700: "#b90d00",
          800: "#8b0900",
          900: "#5c0600",
        },
      },
    },
  },
  plugins: [],
};
