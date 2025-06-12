import type { Meta, StoryObj } from '@storybook/react';
import { SkadeinnmeldingFlow } from './skadeinnmeldingFlow';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Demo/SkadeinnmeldingFlow',
  component: SkadeinnmeldingFlow,
  decorators: [
    StyrbordDecorator,
    (Story) => {
      return (
        <div style={{ backgroundColor: '#f0f0f0' }}>
          <Story />
        </div>
      );
    },
  ],
  tags: ['autodocs', 'kyv'],
} satisfies Meta<typeof SkadeinnmeldingFlow>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {};

export const Default: Story = {
  args: defaultProps,
};
