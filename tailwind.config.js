module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        opa: "opa 900ms ease-out forwards",
        sideWayRed: "sideWayRed 1000ms ease-out forwards",
        sideWayBlue: "sideWayBlue 1000ms ease-out forwards",
      },
      keyframes: {
        opa: {
          "0%": { opacity: 0, transform: "translateY(50px)" },

          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        sideWayRed: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(60px)" },
        },
        sideWayBlue: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-60px)" },
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
