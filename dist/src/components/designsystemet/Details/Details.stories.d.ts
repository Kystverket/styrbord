import type { StoryObj } from '@storybook/react';
import { DetailsProps } from '@digdir/designsystemet-react';
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<DetailsProps & React.RefAttributes<HTMLDetailsElement>> & {
        Summary: typeof import("@digdir/designsystemet-react").DetailsSummary;
        Content: typeof import("@digdir/designsystemet-react").DetailsContent;
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const InCard: Story;
