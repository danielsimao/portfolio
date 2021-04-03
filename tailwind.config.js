module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/layout/**/*.{js,ts,jsx,tsx}",
    "./components/sections/**/*.{jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      carrois: ["Carrois Gothic"],
      fira: ["Fira Sans"],
      roboto: ["Roboto"],
    },
    colors: {
      blue: {
        light: "#0C9DC9",
        lightest: "#49ABC9",
        DEFAULT: "var(--color-blue)",
        dark: "#357D93",
        darkest: "#357D93",
      },
      "blue-light": "var(--color-blue-light)",
      orange: "var(--color-orange)",
      dark: "var(--color-dark)",
      light: "var(--color-light)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
