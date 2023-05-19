module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        coolnight: {
          100: '#192734',
        },
        coolday: {
          100: '#FFF',
        },
        moodytext: {
          100: '#bfdbfe',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/typography')],
};
