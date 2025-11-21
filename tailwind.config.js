/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: "var(--font-family-dm)",
        corinthia: "var(--font-family-corinthia)",
        lato: "var(--font-family-lato)",
      },
    },
  },
  plugins: [],
};