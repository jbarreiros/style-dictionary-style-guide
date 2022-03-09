const { fileHeader } = require('style-dictionary').formatHelpers;

/**
 * Creates @font-face rules.
 *
 * Example tokens.yml
 * ```
 * asset:
 *   font:
 *     <family>:
 *       <weight>:
 *         <style>:
 *           value: "<path to font file without extension>",
 *           formats: [<list of extensions; recognizes woff2, woff>]
 * ```
 *
 * Platform options:
 * - None
 *
 * File options:
 * - fontPathPrefix (string, defaults to "")
 *   Example: `url("<fontPathPrefix>/path/to/font.woff")`
 *
 * Note, Style Dictionary ships with a "css/fonts.css" format, but it is not
 * very flexible. This version was heavily inspired by
 * https://github.com/amzn/style-dictionary/issues/266#issuecomment-497737486
 *
 * To learn more about the different font formats...
 * https://creativemarket.com/blog/the-missing-guide-to-font-formats
 * https://stackoverflow.com/a/11002874
 */

/**
 * Custom transform to add structured metadata for helping generate @font-face rules.
 */
exports.transform = {
  name: 'attribute/font',
  type: 'attribute',
  transformer: (prop) => ({
    category: prop.path[0],
    type: prop.path[1],
    family: prop.path[2],
    weight: prop.path[3],
    style: prop.path[4],
  }),
};

/**
 * Custom format that generates a CSS file with @font-face rules.
 */
exports.format = {
  name: 'font-face',
  formatter: ({ dictionary: { allTokens }, options }) => {
    const fontPathPrefix = options.fontPathPrefix || '../';

    // https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src
    const formatsMap = {
      'woff2': 'woff2',
      'woff': 'woff',
      'ttf': 'truetype',
      'otf': 'opentype',
      'svg': 'svg',
      'eot': 'embedded-opentype'
    };

    return allTokens.reduce((fontList, prop) => {
      const {
        attributes: { family, weight, style },
        formats,
        value: path
      } = prop;

      const urls = formats
        .map(extension => `url("${fontPathPrefix}${path}.${extension}") format("${formatsMap[extension]}")`);

      const fontCss = [
        '@font-face {',
        `\n\tfont-family: "${family}";`,
        `\n\tfont-style: ${style};`,
        `\n\tfont-weight: ${weight};`,
        `\n\tsrc: ${urls.join(',\n\t\t\t ')};`,
        '\n\tfont-display: fallback;',
        '\n}\n'
      ].join('');

      fontList.push(fontCss);

      return fontList;
    }, []).join('\n');
  },
};
