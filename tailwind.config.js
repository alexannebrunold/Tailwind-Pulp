module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  options: {
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^router-link(|-exact)-active$/,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#226470',
        secondary: '#8b143d',
      },
      screens: {
        mobile: '768px',
        laptop: '1024px',
        desktop: '1280px',
      },
      fontSize: {
        mobileBody: '18px',
        mobileDescription: '14px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
