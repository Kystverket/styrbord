import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Icon } from '~/main';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/button/overview)',
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'filled',
    'aria-label': 'Lagre',
    children: <Icon material="file_save" />,
  },
};
