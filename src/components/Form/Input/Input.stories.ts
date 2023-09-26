import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input.tsx';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    key: 'primary',
    label: 'Toggle me',
  },
};
