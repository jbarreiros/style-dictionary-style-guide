module.exports = {
  "stories": [
    "../stories/*.stories.mdx",
    "../stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-toolbars",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "staticDirs": ["../dist"],
}
