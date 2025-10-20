import { FC } from 'react';
import { Avatar as DsAvatar, AvatarProps as DsAvatarProps } from '@digdir/designsystemet-react';
import classes from './Avatar.module.scss';

export type AvatarProps = Omit<DsAvatarProps, 'data-size' | 'data-color'> & {
  'data-size'?: 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';
  'data-color'?: 'main' | 'support' | 'neutral' | 'warning' | 'danger' | 'brand2';
  hover?: boolean;
};

export const Avatar: FC<AvatarProps> = ({
  hover,
  'data-size': size = 'md',
  'data-color': color = 'primary',
  className,
  ...rest
}) => {
  const classList = [className];

  if (size === 'xxs') {
    classList.push(classes.xxs);
  } else if (size === 'xxxs') {
    classList.push(classes.xxxs);
  }

  // if (color === 'subtle-tinted') classList.push(classes.subtleTinted);
  // if (color === 'main') classList.push(classes.main);
  classList.push(classes[color]);

  return (
    <DsAvatar
      data-size={size}
      data-color={color}
      className={classList.join(' ') + ` ${hover ? classes.hover : ''}`}
      {...rest}
    />
  );
};