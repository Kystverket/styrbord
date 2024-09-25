/* eslint-disable import/extensions */
import { StoryFn } from '@storybook/react';

const StyrbordDecorator = (Story: StoryFn) => (
  <div>
    <Story />
  </div>
);

export default StyrbordDecorator;
