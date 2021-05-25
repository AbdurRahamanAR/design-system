import { create } from '@storybook/theming';
import logo from './logo.png';

export default create({
  base: 'light',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: logo,
});
