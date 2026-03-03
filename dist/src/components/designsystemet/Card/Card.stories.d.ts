import type { StoryObj } from '@storybook/react';
import { CardBlock } from '@digdir/designsystemet-react';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<Omit<import("@digdir/designsystemet-react/dist/types/types").DefaultProps & React.HTMLAttributes<HTMLDivElement>, "children" | "asChild" | "variant"> & {
        variant?: "default" | "tinted";
        asChild?: boolean;
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>> & {
        Block: typeof CardBlock;
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const ColorVariants: Story['render'];
export declare const Colors: Story;
export declare const CardWithTitleAndIcon: Story;
export declare const CardWithTitle: Story;
export declare const CardWithLinkInTitle: Story;
export declare const CardAsLink: Story;
export declare const CardAsButton: Story;
