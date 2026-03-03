import type { StoryObj } from '@storybook/react';
import { FileUploaderProps } from './FileUploader';
declare const meta: {
    title: string;
    component: (props: FileUploaderProps) => React.JSX.Element;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Optional: Story;
export declare const OptionalText: Story;
export declare const Required: Story;
export declare const RequiredText: Story;
export declare const WithError: Story;
