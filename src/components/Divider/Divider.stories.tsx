import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const NavyToRustDivider: Story = {
  args: {
    from: 'navy',
    to: 'rust',
  },
  render: (args) => (
    <Divider {...args} />
  ),
};

export const LargeSandDivider: Story = {
  args: {
    from: 'white',
    to: 'sand',
    size: "large",
  },
  render: (args) => (
    <Divider {...args} />
  ),
};

export const SmallStrokeDivider: Story = {
  args: {
    from: 'white',
    to: 'navy',
    size: "small",
    type: 'stroke',
  },
  render: (args) => (
    <Divider {...args} />
  ),
};
