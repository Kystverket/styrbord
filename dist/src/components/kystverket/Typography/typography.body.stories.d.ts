import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ inline, strong, size, className, children }: import("./typography").BodyTypographyProps) => React.JSX.Element;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LangTittel: Story;
