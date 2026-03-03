import { ButtonProps as DsButtonProps } from '@digdir/designsystemet-react';
import { FC } from 'react';
export type ButtonProps = {
    variant?: 'filled' | 'subtle' | 'outline' | 'ghost' | 'dashed';
    color?: 'neutral' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    href?: string;
    target?: string;
} & Omit<DsButtonProps, 'variant' | 'data-color' | 'data-size'>;
export declare const Button: FC<ButtonProps>;
