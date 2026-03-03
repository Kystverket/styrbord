declare const sizes: readonly ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"];
type Size = (typeof sizes)[number];
export declare const smaller: (size: Size) => Size;
export declare const larger: (size: Size) => Size;
export {};
