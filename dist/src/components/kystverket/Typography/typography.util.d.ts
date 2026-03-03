export type TypographyPrefix = 'body' | 'accent' | 'label';
export type AllSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type TypographyColor = 'accent' | 'neutral';
type BuildTypographyProps = {
    type: TypographyPrefix;
    size?: AllSizes;
    strong?: boolean;
    inline?: boolean;
    color?: TypographyColor;
    margin?: boolean;
    className?: string;
};
export declare const buildTypographyClasses: ({ type, size, strong, inline, className, }: BuildTypographyProps) => string;
export {};
