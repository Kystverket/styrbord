import type { StoryObj } from '@storybook/react';
import { ErrorLabelProps } from './errorLabel';
declare const meta: {
    title: string;
    component: ({ ...props }: ErrorLabelProps) => React.JSX.Element;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const NoError: Story;
