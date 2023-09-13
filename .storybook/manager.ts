// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import kyvTheme from './kyv-theme';

addons.setConfig({
  theme: kyvTheme,
});