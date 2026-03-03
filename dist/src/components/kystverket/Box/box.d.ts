import { ReactNode } from 'react';
import { BorderRadiusProps, BorderWidthProps, Spacing, SpacingProps, BoxStyleProps } from './box.types';
import { ScreenSize } from '~/utils/types';
import { AllSizes, TypographyPrefix } from '../Typography/typography.util';
type WrapType = boolean | 'reverse';
export interface BaseBoxProps {
    className?: string;
    align?: 'normal' | 'start' | 'center' | 'end' | 'stretch';
    gap?: Spacing;
    children: ReactNode;
    wrap?: WrapType;
    grow?: boolean | number;
    shrink?: boolean | number;
    basis?: string;
    width?: 'auto' | 'fit' | 'full' | 'container' | 'form' | 'form-sidebar';
    show?: ScreenSize;
    hide?: ScreenSize;
    font?: {
        base?: TypographyPrefix;
        size?: AllSizes;
        strong?: boolean;
    };
    container?: 'size' | 'inline-size';
}
type VerticalBoxProps = BaseBoxProps & {
    horizontal?: false;
    justify?: 'start' | 'center' | 'end' | 'between' | 'stretch';
};
type HorizontalBoxProps = BaseBoxProps & {
    horizontal: true | ScreenSize;
    justify?: 'start' | 'center' | 'end' | 'between' | 'stretch';
};
export type BoxProps = (VerticalBoxProps | HorizontalBoxProps) & SpacingProps & BorderRadiusProps & BorderWidthProps & BoxStyleProps;
declare const Box: ({ className, radius, width, gap, wrap, align, grow, shrink, basis, show, hide, container, children, ...props }: BoxProps) => React.JSX.Element;
export default Box;
