/* eslint-disable import/extensions */
import { StoryFn } from '@storybook/react';
import 'material-symbols';

const StyrbordDecorator = (Story: StoryFn) => (
  <div>
    <Story />
  </div>
);

export default StyrbordDecorator;
