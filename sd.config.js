const StyleDictionary = require('style-dictionary');
const styleGuideFormat = require('./style-guide/format');

StyleDictionary.registerFormat(styleGuideFormat.jsonFormat);
StyleDictionary.registerFormat(styleGuideFormat.staticFormat);

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    assets: {
      transformGroup: ['assets'],
      buildPath: 'build/',
      files: [],
      actions: ['copy_assets'],
    },
    styleGuide: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'color/css'],
      buildPath: 'build/style-guide/',
      files: [
        {
          destination: 'style-guide.json',
          format: 'style-guide/json',
          options: {
            configFile: 'style-guide/config.json'
          }
        },
        {
          destination: 'index.html',
          format: 'style-guide/static',
          options: {
            templatesFolder: 'style-guide/',
            configFile: 'style-guide/config.json'
          }
        }
      ]
    }
  }
}
