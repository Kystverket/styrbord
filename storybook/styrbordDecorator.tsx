import { PartialStoryFn } from '@storybook/types';

import './storybook-style.scss';
import 'material-symbols';

const StyrbordDecorator = (Story: PartialStoryFn) => (
  <div style={{ backgroundColor: '#f0f0f0' }}>
    <Story />
  </div>
);

export default StyrbordDecorator;
