import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<{
        level?: 1 | 2 | 3 | 4 | 5 | 6;
        'data-size'?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
        asChild?: boolean;
    } & React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LangTittel: Story;
