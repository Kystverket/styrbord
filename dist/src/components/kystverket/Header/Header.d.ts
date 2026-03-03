import { LogoVariant, SupportedLanguage } from '~/main';
import { ReactNode } from 'react';
import { IconId } from '../Icon/icon.types';
export type HeaderLinkComponentProps = {
    className?: string;
    href?: string;
    children: ReactNode;
    onClick?: () => void;
};
export interface HeaderProps {
    /**
     * Utvidelse for å legge til ekstra innhold i headeren.
     * @default undefined
     */
    children?: ReactNode;
    /**
     * Spesifiserer språk for headeren.
     */
    language: SupportedLanguage;
    /**
     * Spesifiserer logovarianten som brukes (standard: Kystverket) med en eventuell ekstra undertittel og navigeringslenke ved klikk
     */
    logo: {
        /**
         * Undertittel for logoen.
         * @default undefined
         */
        title?: string;
        /**
         * URL for logoen.
         */
        url: string;
        /**
         * Logovariant.
         * @default 'blue-horizontal'
         */
        variant?: LogoVariant;
    };
    /**
     * links - En kolleksjon av lenker
     * @default undefined
     */
    links?: {
        /**
         * icon - Typed til IconId
         */
        icon: IconId;
        /**
         * label
         */
        label: string;
        /**
         * url
         */
        url: string;
    }[];
    profile?: {
        /**
         * name
         */
        name: string;
        /**
         * department
         */
        department: string;
        /**
         * initials. Keep it to `2` characters
         */
        initials: string;
        /**
         * logoutHandler
         */
        links?: {
            /**
             * icon - Typed til IconId
             */
            icon: IconId;
            /**
             * label
             */
            label: string;
            /**
             * url
             */
            url: string;
        }[];
        /**
         * logoutHandler
         */
        logoutHandler: () => void;
    };
    linkComponent?: React.FC<HeaderLinkComponentProps>;
}
export declare function Header({ children, language, logo: { title, variant, url }, links, profile, linkComponent: LinkComponent, }: HeaderProps): React.JSX.Element;
