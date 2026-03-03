export type LogoVariant = 'blue-horizontal' | 'datakatalog' | 'fyr' | 'hais' | 'pfsa' | 'saksbehandling' | 'selvbetjening' | 'white-horizontal' | 'white-vertical';
export interface LogoProps {
    className?: string;
    variant?: LogoVariant;
    alt?: string;
    height?: number;
    width?: number;
}
export declare function Logo({ className, variant, alt, height, width }: LogoProps): React.JSX.Element;
