import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ strong, size, className, children, inline }: import("./typography").LabelTypographyProps) => React.JSX.Element;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
