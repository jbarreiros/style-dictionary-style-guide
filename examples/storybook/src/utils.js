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
export function getTokenGroup(tokens, targetPath, orderOverride = []) {
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

function camalize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

/**
 *
 * @param {string} format
 *   One of CSS, SASS, or JS.
 * @param {string} tokenName
 * @returns {string}
 */
export function prefixTokenName(format, tokenName) {
  switch (format) {
    case 'CSS':
      return `--${tokenName}`;
    case 'SASS':
      return `$${tokenName}`;
    case 'JS':
      return camalize(tokenName);
    default:
      return tokenName;
  }
}
