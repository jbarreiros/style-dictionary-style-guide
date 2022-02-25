const fs = require('fs-extra');

/**
 * Action that copies the contents of the "./assets" directory to the
 * "buildPath" of the platform.
 */
module.exports = {
  name: 'copy_assets_folders',
  do: (dictionary, config) => {
    console.log(`Copying assets directory contents to ${config.buildPath}`);
    fs.copySync('assets', `${config.buildPath}`);
  },
  undo: (dictionary, config) => {
    // console.log('Removing assets directory from ' + config.buildPath + 'assets');
    // fs.removeSync( config.buildPath + 'assets');
  }
}
