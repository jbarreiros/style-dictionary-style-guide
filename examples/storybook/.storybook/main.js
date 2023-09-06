export default {
  stories: ["../stories/*.mdx", "../stories/*.stories.@(js|jsx)"],
  staticDirs: ["../dist"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-coverage"],
  framework: "@storybook/react-webpack5",
};
