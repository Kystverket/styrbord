import { ButtonProps as DsButtonProps } from '@digdir/designsystemet-react';
import { CSSProperties, FC } from 'react';
import { Button } from '../Button/Button';

export type IconButtonProps = {
  variant?: 'filled' | 'subtle' | 'outline' | 'ghost' | 'dashed';
  color?: 'primary' | 'neutral' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
} & Omit<DsButtonProps, 'variant' | 'data-color' | 'data-size' | 'disabled' | 'icon'>;

export const IconButton: FC<IconButtonProps> = ({ style, ...props }) => {
  const iconSizeStyle = { ...style, '--icon-size': 'var(--ds-size-8)' } as CSSProperties;

  return <Button {...props} icon style={iconSizeStyle} />;
};
