module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lila: {
        light: '#570df8',
        dark: '#4506cb',
      },
      black: '#00000',
      rose: {
        light: '#f000b8',
        dark: '#bd0091',
      },
      green: {
        light: '#37cdbe',
        dark: '#2aa79b',
      },
      blue: {
        light: '#3d4451',
        dark: '#2a2e37',
      },

      white: {
        pure: '#fffff',
        base: '#f9fafb',
      },
      gray: {
        light: '#d1d5db',
        dark: '#1f2937',
      },
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
