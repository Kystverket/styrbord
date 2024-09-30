import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../../../../src/components/Button/button';
import StyrbordDecorator from '../../../styrbordDecorator';

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
  design: 'filled',
  color: 'accent',
  size: 'md',
  icon: undefined,
  loading: false,
  children: 'Button',
};

export const Default: Story = {
  args: defaultProps,
};

export const Small: Story = {
  args: { ...defaultProps, size: 'sm' },
};

export const Large: Story = {
  args: { ...defaultProps, size: 'lg' },
};

export const Neutral: Story = {
  args: { ...defaultProps, color: 'neutral' },
};

export const Danger: Story = {
  args: { ...defaultProps, color: 'danger' },
};

export const Outlined: Story = {
  args: { ...defaultProps, design: 'outlined' },
};

export const Ghost: Story = {
  args: { ...defaultProps, design: 'ghost' },
};

export const Dashed: Story = {
  args: { ...defaultProps, design: 'dashed' },
};
