module.exports = {
  "stories": [
    "../style-guide/*.stories.mdx",
    "../style-guide/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-toolbars",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
