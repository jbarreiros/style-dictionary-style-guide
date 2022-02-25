const StyleDictionary = require('style-dictionary');
const copyAssetsAction = require('./src/copyAssetsFolders');
const fontFace = require('./src/fontFace');

StyleDictionary.registerAction(copyAssetsAction);
StyleDictionary.registerTransform(fontFace.transform);
StyleDictionary.registerFormat(fontFace.format);

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'color/css'],
      buildPath: 'public/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    'font-face': {
      transforms: ['attribute/font'],
      buildPath: 'public/',
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
      buildPath: 'public/',
      files: [],
      actions: ['copy_assets_folders'],
    },
    json: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      buildPath: 'public/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json',
        },
      ],
    },
  },
};
