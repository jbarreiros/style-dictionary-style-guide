import React from 'react';
import TokensContext from '../src/tokens-context';

export default {
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', '*'],
      },
    },
  },
  globalTypes: {
    tokenVariableFormat: {
      name: 'Variable format',
      description: '',
      defaultValue: 'JS',
      toolbar: {
        // https://storybook.js.org/docs/react/faq#what-icons-are-available-for-my-toolbar-or-my-addon
        icon: 'markup',
        items: ['None', 'CSS', 'JS', 'SASS'],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, { globals: { tokenVariableFormat } }) => (
      <TokensContext.Provider value={tokenVariableFormat}>
        <Story />
      </TokensContext.Provider>
    ),
  ],
};
