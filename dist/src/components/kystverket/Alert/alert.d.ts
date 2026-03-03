import React from 'react';
import { AlertLevel, TextSize, Width } from './alert.types';
export interface AlertProps {
    level: AlertLevel;
    size?: TextSize;
    title?: string;
    text?: string;
    children?: React.ReactNode;
    width?: Width;
    className?: string;
    role?: 'status';
    onDismiss?: () => void;
}
declare const Alert: ({ level, size, width, title, text, className, ...props }: AlertProps) => React.JSX.Element;
export default Alert;
