import React from 'react';
import {
  ColorItem as StorybookColorItem,
} from "@storybook/addon-docs";

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

function ColorItem({ tokens, path, order, ...rest }) {
  const colorTokens = getTokenGroup(tokens, path, order);
  const colors = colorTokens.map(token => token.value);

  return (<StorybookColorItem colors={colors} {...rest} />);
}

const DT = {
  ColorItem,
};

export default DT;
