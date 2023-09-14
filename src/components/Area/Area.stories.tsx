import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Area } from './Area';

const meta: Meta<typeof Area> = {
  title: "Components/Area",
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
    <Area {...args}>
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
    <Area {...args}>
      <div style={{ padding: '20px' }}>Dette er et område som kan fylles med innhold.</div>
    </Area>
  ),
};
