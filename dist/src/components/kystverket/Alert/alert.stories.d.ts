import type { StoryObj } from '@storybook/react';
import { AlertProps } from './alert';
declare const meta: {
    title: string;
    component: ({ level, size, width, title, text, className, ...props }: AlertProps) => React.JSX.Element;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Small: Story;
export declare const DefaultKort: Story;
export declare const LargeWithDismiss: Story;
export declare const ClassNameCustomWidth: Story;
export declare const WithErrorDismiss: Story;
