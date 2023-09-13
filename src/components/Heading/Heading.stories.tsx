import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
  args: {
    size: 'h1',
  },
  render: (args) => (
    <Heading {...args}>
      Dette er en overskrift
    </Heading>
  ),
};

export const Heading2: Story = {
  args: {
    size: 'h2',
  },
  render: (args) => (
    <Heading {...args}>
      Dette er en mindre overskrift
    </Heading>
  ),
};

export const Heading3: Story = {
  args: {
    size: 'h3',
  },
  render: (args) => (
    <Heading {...args}>
      Dette er en avsnittsoverskrift
    </Heading>
  ),
};

export const Heading4: Story = {
  args: {
    size: 'h4',
  },
  render: (args) => (
    <Heading {...args}>
      Dette er en avsnittsoverskrift
    </Heading>
  ),
};

