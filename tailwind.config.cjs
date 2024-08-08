const {
  fontFamily: { sans: defaultSans },
} = require('tailwindcss/defaultTheme');

// I'm doing this because apparently Tailwind only supports one font values
// when using font-variation-settings.
const fontInter = '"Inter Variable"';
const fontInterDefaultFeatures = ['ss01', 'ss02', 'ss07'];

/**
 *
 * @param  {...string} features
 * @returns a css compatible string of features
 */
function generateFeatures(...features) {
  return features.map((feature) => `"${feature}"`).join(', ');
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          fontInter,
          {
            fontFeatureSettings: generateFeatures(
              ...fontInterDefaultFeatures,
              'cv10',
              'cv11'
            ),
            fontVariationSettings: '"opsz" 32',
          },
          ...defaultSans,
        ],
        body: [
          fontInter,
          {
            fontFeatureSettings: generateFeatures(...fontInterDefaultFeatures),
            fontVariationSettings: '"opsz" 14',
          },
          ...defaultSans,
        ],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
};
