import type { StoryObj } from '@storybook/react';
import { SelectProps } from './Select';
declare const meta: {
    title: string;
    component: ({ ...props }: SelectProps) => React.JSX.Element;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithValue: Story;
export declare const Optional: Story;
export declare const OptionalText: Story;
export declare const Required: Story;
