import type { StoryObj } from '@storybook/react';
import { Header } from './Header';
import { SupportedLanguage } from '~/main';
declare const meta: {
    title: string;
    component: typeof Header;
    decorators: ((Story: import("@storybook/types").PartialStoryFn) => React.JSX.Element)[];
    tags: string[];
    argTypes: {
        children: {
            control: {
                type: "object";
            };
        };
        language: {
            control: {
                type: "select";
                options: SupportedLanguage[];
            };
        };
        logo: {
            control: {
                type: "object";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Kystverket: Story;
export declare const MedUndertittel: Story;
export declare const Datakatalog: Story;
export declare const Fyr: Story;
export declare const Hais: Story;
export declare const Pfsa: Story;
export declare const Saksbehandling: Story;
export declare const Selvbetjening: Story;
export declare const medProfilOgMenyItems: Story;
export declare const medMenyItems: Story;
export declare const medProfil: Story;
export declare const medProfilLenker: Story;
