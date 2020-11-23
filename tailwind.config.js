module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Roboto'],
    },
    extend: {
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./pages/**/*.tsx", 
      "./components/**/*.tsx", 
    ]
  },
  variants: {
    backgroundColor: ['responsive', 'focus', 'hover', 'active']
  },
  plugins: [],
}
