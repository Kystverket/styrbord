import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Area } from './Area.tsx';

const meta: Meta<typeof Area> = {
  title: 'Components/Area',
  component: Area,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Area>;

export const NavyArea: Story = {
  args: {
    color: 'navy',
  },
  render: (args) => (
    <Area color={args.color}>
      <div style={{ padding: '20px' }}>Dette er et område som kan fylles med innhold.</div>
    </Area>
  ),
};

export const NavyWithBorderArea: Story = {
  args: {
    color: 'navy',
    border: 'rust',
  },
  render: (args) => (
    <Area color={args.color} border={args.border}>
      <div style={{ padding: '20px' }}>Dette er et område som kan fylles med innhold.</div>
    </Area>
  ),
};
