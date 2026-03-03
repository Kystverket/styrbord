import type { StoryObj } from '@storybook/react';
import { DetailsProps } from './Details';
declare const meta: {
    title: string;
    component: ({ summary, children, ...props }: DetailsProps) => React.JSX.Element;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
