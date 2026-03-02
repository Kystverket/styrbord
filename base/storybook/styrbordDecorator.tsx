import { PartialStoryFn } from 'storybook/internal/types';

import './storybook-style.scss';

const StyrbordDecorator = (Story: PartialStoryFn) => (
  <div>
    <Story />
  </div>
);

export default StyrbordDecorator;
