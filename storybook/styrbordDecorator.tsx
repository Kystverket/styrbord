import { PartialStoryFn } from '@storybook/types';

import './style.scss';
import 'material-symbols';

const StyrbordDecorator = (Story: PartialStoryFn) => (
  <div>
    <Story />
  </div>
);

export default StyrbordDecorator;
