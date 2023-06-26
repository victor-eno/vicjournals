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
          100: '#40444b',
        },
        coolday: {
          100: '#FFF',
        },
        moodytext: {
          100: '#c5cae9',
        },
        greytext: {
          100: '#9ca3af'
        },
        whitetext: {
          100: '#fafafa'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/typography')],
};
