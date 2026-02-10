import { PartialStoryFn } from '@storybook/types';

import './storybook-style.scss';

const StyrbordDecorator = (Story: PartialStoryFn) => (
  <div>
    <Story />
  </div>
);

export default StyrbordDecorator;
