/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neoBg: "#05050a",
        neoAccent: "#ff5eec",
        neoAccentSoft: "#4b5dff",
      },
    },
  },
  plugins: [],
};
