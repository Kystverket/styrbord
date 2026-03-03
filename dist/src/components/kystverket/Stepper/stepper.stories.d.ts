import type { StoryObj } from '@storybook/react';
import { StepperProps } from './stepper';
declare const meta: {
    title: string;
    component: ({ steps, step }: StepperProps) => React.JSX.Element;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Vertical: Story;
