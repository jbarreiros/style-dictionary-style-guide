import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Acme Design Tokens',
    brandUrl: undefined,
    brandImage: undefined,
  }),
});
