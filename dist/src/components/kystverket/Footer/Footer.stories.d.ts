import type { StoryObj } from '@storybook/react';
import { Footer } from '~/components/kystverket/Footer/Footer';
declare const meta: {
    title: string;
    component: typeof Footer;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Selvbetjening: Story;
export declare const MaritimSikring: Story;
export declare const Hais: Story;
export declare const Saksbehandling: Story;
export declare const Kystdatahuset: Story;
export declare const Fyr: Story;
