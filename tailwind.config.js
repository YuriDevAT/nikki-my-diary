module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      black: {
        light: "#262626",
        faded: "rgba(0,0,0,0.5)",
      },
      green: {
        light: "#D2E4C8",
        middle: "#7EB363",
        dark: "#6BA451",
      },
      rose: {
        light: "#F4D8DB",
        middle: "#E7A8B0",
        dark: "#DB7582",
      },
      brown: {
        light: "#988281",
        dark: "#413C2F",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
