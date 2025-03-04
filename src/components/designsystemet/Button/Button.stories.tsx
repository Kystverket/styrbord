import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Designsystemet/Button',
  component: Button,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ButtonProps = {
  variant: 'filled',
  color: 'accent',
  icon: undefined,
  loading: false,
  children: 'Button',
};

export const Default: Story = {
  args: defaultProps,
};

export const Neutral: Story = {
  args: { ...defaultProps, color: 'neutral' },
};

export const Danger: Story = {
  args: { ...defaultProps, color: 'danger' },
};

export const Outlined: Story = {
  args: { ...defaultProps, variant: 'outlined' },
};

export const Ghost: Story = {
  args: { ...defaultProps, variant: 'ghost' },
};

export const Dashed: Story = {
  args: { ...defaultProps, variant: 'dashed' },
};
