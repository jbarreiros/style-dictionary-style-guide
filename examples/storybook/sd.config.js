const StyleDictionary = require('style-dictionary');
const fontFace = require('./src/style-dictionary/fontFace');

StyleDictionary.registerTransform(fontFace.transform);
StyleDictionary.registerFormat(fontFace.format);

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'color/css'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    'font-face': {
      transforms: ['attribute/font'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'fonts.css',
          format: 'font-face',
          filter: {
            attributes: {
              category: 'asset',
              type: 'font',
            },
          },
          options: {
            fontPathPrefix: 'fonts/'
          }
        },
      ],
    },
    assets: {
      transformGroup: ['assets'],
      buildPath: 'dist/',
      files: [],
      actions: ['copy_assets'],
    },
    json: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json',
        },
      ],
    },
  },
};
