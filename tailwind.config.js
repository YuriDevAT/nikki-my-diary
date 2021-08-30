module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lila: {
        light: '#D1C1D7',
        dark: '#B9A2C3',
      },
      black: '#000',
      rose: {
        light: '#F6CBD1',
        dark: '#EEA0AA',
      },
      green: {
        light: '#B4E9D6',
        dark: '#8CDEC0',
      },
      blue: {
        light: '#70ABC7',
        dark: '#507b90',
      },

      white: {
        pure: '#fff',
        base: '#f9fafb',
      },
      gray: {
        light: '#d1d5db',
        dark: '#898D90',
      },
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s ease-in-out infinite',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
