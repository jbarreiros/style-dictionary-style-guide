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

export function prefixTokenName(format, name) {
  switch (format) {
    case 'CSS':
      return `--${name}`;
    case 'SASS':
      return `$${name}`;
    case 'JS':
      return camalize(name);
    default:
      return name;
  }
}
