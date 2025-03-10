import type { Meta, StoryObj } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Textfield, TextfieldProps } from '~/main';

const meta = {
  title: 'Designsystemet/Textfield',
  component: Textfield,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Textfield>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: TextfieldProps = {
  label: 'Input',
  value: 'Input text',
};

export const Default: Story = {
  args: defaultProps,
};
