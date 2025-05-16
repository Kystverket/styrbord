import type { Meta, StoryFn } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import Icon from '~/components/kystverket/Icon/icon';
import { iconIdList } from './icon.types';

const meta = {
  title: 'Helpers/Icon',
  component: Icon,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

export const IconShowcase: StoryFn = () => {
  return (
    <table>
      {iconIdList.map((iconId) => (
        <tr key={iconId}>
          <td style={{ padding: '0.5rem' }}>
            <Icon material={iconId} />
          </td>
          <td style={{ padding: '0.5rem' }}>{iconId}</td>
        </tr>
      ))}
    </table>
  );
};
