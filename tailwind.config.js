/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-100": "#eb4511",
      "primary-200": "#f25e2e",
      "primary-300": "#f87548",
      "primary-400": "#fc8a61",
      "primary-500": "#ff9e7a",
      "primary-600": "#ffb294",
      "seconday-100": "#61c4d1",
      "seconday-200": "#76cbd6",
      "seconday-300": "#8ad1db",
      "seconday-400": "#9cd8e0",
      "seconday-500": "#addee5",
      "seconday-600": "#bee5ea",
      "surface-100": "#121212",
      "surface-200": "#282828",
      "surface-300": "#3f3f3f",
      "surface-400": "#575757",
      "surface-500": "#717171",
      "surface-600": "#8b8b8b",
    },
  },
  plugins: [],
};
