import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Trykk på meg',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Trykk på meg',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Trykk på meg',
  },
};
