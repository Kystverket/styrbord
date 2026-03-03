import type { StoryFn } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ src, className, ...props }: import("~/main").ImageProps) => React.JSX.Element;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
export declare const Showcase: StoryFn;
export declare const Big: StoryFn;
export declare const Small: StoryFn;
