import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
    args: {
        label: "Toggle me",
    },
};

