import { List } from '~/main';
import type { StoryFn } from '@storybook/react';
type Story = StoryFn<typeof List.Unordered>;
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<{
        asChild?: boolean;
    } & import("@digdir/designsystemet-react/dist/types/types").DefaultProps & Omit<React.HTMLAttributes<HTMLUListElement>, "size"> & React.RefAttributes<HTMLUListElement>>;
};
export default _default;
export declare const Preview: Story;
export declare const Sortert: StoryFn<typeof List.Ordered>;
export declare const Usortert: Story;
export declare const Innrykk: Story;
export declare const ListeMedLenker: Story;
export declare const ListeMedOverskrift: Story;
