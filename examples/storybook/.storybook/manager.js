import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Acme Design Tokens',
    brandUrl: undefined,
    brandImage: undefined,
  }),
});
