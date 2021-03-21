module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      carrois: ["Carrois Gothic"],
      fira: ["Fira Sans"],
    },
    colors: {
      blue: "var(--color-blue)",
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
