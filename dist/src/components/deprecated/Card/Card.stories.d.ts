import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ title, icon, link, children, titleLevel, ...props }: import("./Card").CardProps): React.JSX.Element;
        Block: React.ForwardRefExoticComponent<{
            asChild?: boolean;
        } & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {
        variant: {
            options: string[];
            control: {
                type: "radio";
            };
        };
        title: {
            options: string[];
            control: {
                type: "radio";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Tinted: Story;
export declare const CardWithTitleAndIcon: Story;
export declare const CardWithTitle: Story;
export declare const CardWithLinkInTitle: Story;
export declare const CardAsLink: Story;
export declare const CardAsButton: Story;
export declare const Media: Story;
export declare const Video: Story;
