import { ReactNode } from 'react';
export interface TypographyProps {
    className?: string;
    children?: ReactNode | undefined;
}
export type BodyTypographyProps = TypographyProps & {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    strong?: boolean;
    inline?: boolean;
};
export type AccentTypographyProps = TypographyProps & {
    size?: 'sm' | 'md';
    strong?: boolean;
};
export type LabelTypographyProps = TypographyProps & {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    strong?: boolean;
    inline?: boolean;
};
export declare const Body: ({ inline, strong, size, className, children }: BodyTypographyProps) => React.JSX.Element;
export declare const Accent: ({ strong, size, className, children }: AccentTypographyProps) => React.JSX.Element;
export declare const Typography: {
    Body: ({ inline, strong, size, className, children }: BodyTypographyProps) => React.JSX.Element;
    Accent: ({ strong, size, className, children }: AccentTypographyProps) => React.JSX.Element;
    Label: ({ strong, size, className, children, inline }: LabelTypographyProps) => React.JSX.Element;
};
