module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "odibee-sans": ['"Odibee Sans"', "cursive"],
        "squada-one": ['"Squada One"', "cursive"],
        inconsolata: ['"Inconsolata"', "monospace"],
        sriracha: ['"Sriracha"', "cursive"],
        "courier-new": ['"Courier New"', "monospace"],
        heebo: ['"Heebo"', "sans-serif"],
        "andale-mono": ['"Andale Mono"', "monospace"],
      },
      backgroundImage: {
        "games-background-01": "url('./Images/games.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
