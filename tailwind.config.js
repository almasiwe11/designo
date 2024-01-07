/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        peach: " #E7816B",
        "peach-light": "#FFAD9B",
        black: "#1D1C1E",
        "gray-dark": " #333136",
        "gray-light": " #F1F3F5",
        input: "#d1d5db",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
}
