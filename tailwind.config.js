/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#edf2f8",
      secondary: "#313bac",
      black: "#030303",
      lightGray: "#e4e4e4",
      gray: "#6b7688",
      brown: "#46364a",
      white: "#ffffff",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
