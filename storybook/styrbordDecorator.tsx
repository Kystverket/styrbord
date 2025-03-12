import { PartialStoryFn } from '@storybook/types';
import 'material-symbols';

const StyrbordDecorator = (Story: PartialStoryFn) => (
  <div>
    <Story />
  </div>
);

export default StyrbordDecorator;
