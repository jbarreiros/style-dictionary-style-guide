export default {
  stories: ["../stories/*.mdx", "../stories/*.stories.@(js|jsx)"],
  staticDirs: ["../dist"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
