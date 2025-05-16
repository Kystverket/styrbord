import { PartialStoryFn } from '@storybook/types';

import '../src/css/index.scss';
import 'material-symbols';

const StyrbordDecorator = (Story: PartialStoryFn) => (
  <div>
    <Story />
  </div>
);

export default StyrbordDecorator;
