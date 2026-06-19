import { CSSProperties, FC } from 'react';
import { Button, ButtonProps } from '../Button/Button';

const iconSizeBySize: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'var(--ds-size-7)',
  md: 'var(--ds-size-8)',
  lg: 'var(--ds-size-9)',
};

export type IconButtonProps = Omit<ButtonProps, 'text' | 'icon'> & {
  'aria-label': string;
};

export const IconButton: FC<IconButtonProps> = ({ size = 'md', style, ...props }) => {
  const iconSizeStyle = {
    '--icon-size': iconSizeBySize[size],
    ...style,
  } as CSSProperties;

  return <Button {...props} size={size} icon style={iconSizeStyle} />;
};
