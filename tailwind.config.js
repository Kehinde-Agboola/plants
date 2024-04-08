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
        body: "#FCF9F3",
        primary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
        brand: "#f8f1e3",
        darkPink: "#C8B8A5",
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('/src/assets/plant11.png')",
        hero_a: "url('/src/assets/a.jpg')",
        hero_b: "url('/src/assets/b.jpg')",
        hero_c: "url('/src/assets/c.jpg')",
      },
    },
  },
  plugins: [],
};
