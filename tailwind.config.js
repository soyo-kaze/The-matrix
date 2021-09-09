module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        opa: "opa 900ms ease-out forwards",
      },
      keyframes: {
        opa: {
          "0%": { opacity: 0, transform: "translateY(50px)" },

          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ["hover", "focus"],
      margin: ["hover"],
    },
  },
  plugins: [],
};
