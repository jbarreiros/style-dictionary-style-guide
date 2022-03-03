const fs = require('fs-extra');

/**
 * Action that copies the "./dist" directory to the
 * "buildPath" of the platform.
 */
module.exports = {
  name: 'copy_dist',
  do: (dictionary, config) => {
    console.log(`Copying dist directory to ${config.buildPath}dist`);
    fs.copySync('dist', `${config.buildPath}dist`);
  },
  undo: (dictionary, config) => {
    console.log(`Removing dist directory from ${config.buildPath}dist`);
    fs.removeSync(`${config.buildPath}dist`);
  }
}
