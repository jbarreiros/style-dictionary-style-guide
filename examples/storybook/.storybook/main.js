export default {
  stories: [
    // '../stories/*.stories.mdx',
    // '../stories/*.stories.@(js|jsx|ts|tsx)',
    // '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: ['../dist'],
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
