/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        bodins: ["bodin", "sans-serif"],
      },
      colors: {
        purple: "#530054",
        empower: "#FCF5FF",
        body: "#777",
        progressGreen: "#30B700",
        progressBackground: "#EEE",
      },
    },
  },
  plugins: [],
};
