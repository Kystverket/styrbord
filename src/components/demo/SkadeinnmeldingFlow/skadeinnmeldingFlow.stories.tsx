import type { Meta, StoryObj } from '@storybook/react';
import { SkadeinnmeldingFlow } from './skadeinnmeldingFlow';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Demo/SkadeinnmeldingFlow',
  component: SkadeinnmeldingFlow,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
} satisfies Meta<typeof SkadeinnmeldingFlow>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {};

export const Default: Story = {
  args: defaultProps,
};
