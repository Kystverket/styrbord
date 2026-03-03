import { SupportedLanguage } from '~/utils/types';
import { ReactNode } from 'react';
interface LinkToSite {
    text: string;
    url: string;
}
export type FooterProps = {
    language: SupportedLanguage;
    additionalLogo?: ReactNode;
    text?: string;
    copyright?: string;
    contacts?: LinkToSite[];
    links?: LinkToSite[] | LinkToSite[][];
};
export declare function Footer({ language, additionalLogo, text, copyright, contacts, links, }: FooterProps): React.JSX.Element;
export {};
