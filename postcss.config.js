const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: {
    // presetenvはデフォルトのstage2を使う.
    "postcss-preset-env": {},
    autoprefixer: {},
  },
};
