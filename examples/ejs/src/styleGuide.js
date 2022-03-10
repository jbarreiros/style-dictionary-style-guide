const fs = require('fs');
const ejs = require('ejs');
const beautify = require('js-beautify').html;

/**
 * @param {string} configFile
 *   Relative path to style-guide configuration file (e.g. "style-guide/config.json").
 * @returns {object}
 */
function getConfig(configFile) {
  try {
    const json = fs.readFileSync(configFile);
    return JSON.parse(json);
  } catch (e) {
    console.error(`Unable to read or parse "${configFile}"`);
    throw e;
  }
}

/**
 * @param {object} tokens
 *   Style Dictionary's "dictionary.tokens"
 * @param {string} targetPath
 *   Represents the group of tokens to display together.
 *   Dot-notation key path, e.g. "color.primary".
 * @param {string[]} orderOverride
 *   Array of token keys to define the order of a group.
 *   E.g. ["base", "10", "20"]
 *   Why? In some cases, the list of tokens generated by a formatter will not
 *   match their original order. This happens because the order of object keys
 *   are not guaranteed in JavaScript.
 * @returns {object[]} List of Style Dictionary tokens
 */
function getTokenGroup(tokens, targetPath, orderOverride = []) {
  let tokenGroup;

  try {
    tokenGroup = targetPath.split(".").reduce((o, k) => o[k], tokens);
  } catch (e) {
    console.log(`Token path "${targetPath}" does not exist`);
    throw e;
  }

  if (orderOverride.length) {
    return orderOverride.map((key) => tokenGroup[key]);
  }

  return Object.values(tokenGroup);
}

/**
 * @param {object} config
 *   The config object to inject tokens into.
 * @param {object} tokens
 *   Style Dictionary's "dictionary.tokens"
 */
function addTokensToConfig(config, tokens) {
  config.sections.forEach((section) => {
    section.groups.forEach((group) => {
      const tokenGroup = getTokenGroup(
        tokens,
        group.tokensPath,
        group.order
      );

      // Add SD tokens to config object
      group.tokens = tokenGroup;
    });
  });
}

module.exports = {
  name: "style-guide/static",
  formatter: ({
    dictionary: {
      tokens,
    },
    options: {
      templatesFolder,
      configFile
    }
  }) => {
    const config = getConfig(configFile);
    addTokensToConfig(config, tokens);

    const indexTemplate = fs.readFileSync(`${templatesFolder}layout/index.ejs`, 'utf8');

    const html = ejs.render(indexTemplate, { config }, {
      root: templatesFolder,
    });

    return beautify(html, { 'max_preserve_newlines': '-1' });
  }
};