const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],
]);
