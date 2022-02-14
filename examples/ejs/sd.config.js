const StyleDictionary = require('style-dictionary');
const styleGuideFormat = require('./src/styleGuide');
const copyAssetsAction = require('./src/copyAssetsFolders');
const fontFace = require('./src/fontFace');

StyleDictionary.registerFormat(styleGuideFormat);
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
            fontPathPrefix: '../fonts/'
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
    styleGuide: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'color/css'],
      buildPath: 'public/',
      files: [
        {
          destination: 'index.html',
          format: 'style-guide/static',
          options: {
            templatesFolder: 'views/',
            configFile: 'config.json'
          }
        }
      ]
    }
  }
}