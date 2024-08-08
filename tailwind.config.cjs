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
      colors: {
        // color pallete from #ECF4F4, #DEC4E2, #54B4EA, #0363BB, #023785
        'aqua-haze': {
          50: '#f5fafa',
          100: '#ecf4f4', // base
          200: '#d2e5e4',
          300: '#aacfcc',
          400: '#7db3ad',
          500: '#5c9b96',
          600: '#48817e',
          700: '#3c6865',
          800: '#345857',
          900: '#2f4b4a',
          950: '#1f3232',
        },
        thistle: {
          50: '#fcf8fc',
          100: '#f6eff8',
          200: '#efe3f1',
          300: '#dec4e2',
          400: '#d0abd5',
          500: '#bc8ac2',
          600: '#a96eaf',
          700: '#915a96',
          800: '#794d7c',
          900: '#623f64',
          950: '#442546',
        },
        'picton-blue': {
          50: '#f1f8fe',
          100: '#e2f1fc',
          200: '#bfe1f8',
          300: '#87c9f2',
          400: '#54b4ea',
          500: '#2094d7',
          600: '#1276b7',
          700: '#105e94',
          800: '#11507b',
          900: '#144466',
          950: '#0d2b44',
        },
        denim: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#baddfd',
          300: '#7ec2fb',
          400: '#39a3f7',
          500: '#0f87e8',
          600: '#0363bb',
          700: '#0453a0',
          800: '#084884',
          900: '#0d3d6d',
          950: '#082649',
        },
        'bay-of-many': {
          50: '#e9f9ff',
          100: '#cff0ff',
          200: '#a9e8ff',
          300: '#6edcff',
          400: '#2ac4ff',
          500: '#009fff',
          600: '#0076ff',
          700: '#005cff',
          800: '#004de2',
          900: '#0047b0',
          950: '#023785',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
