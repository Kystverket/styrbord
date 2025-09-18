import React from 'react';
import { Avatar as DsAvatar, AvatarProps as DsAvatarProps } from '@digdir/designsystemet-react';
import classes from './Avatar.module.scss';

export type AvatarProps = DsAvatarProps & {
  'data-size'?: 'xxs' | 'xxxs' | DsAvatarProps['data-size'];
  'data-color'?: 'subtle-tinted' | DsAvatarProps['data-color'];
};

export const Avatar: React.FC<AvatarProps> = ({
  'data-size': size = 'md',
  'data-color': color = '',
  className,
  ...rest
}) => {
  const classList = [className];

  if (size === 'xxs') {
    classList.push(classes.xxs);
  } else if (size === 'xxxs') {
    classList.push(classes.xxxs);
  }

  if (color === 'subtle-tinted') {
    classList.push(classes.subtleTinted);
  }

  return <DsAvatar data-size={size} data-color={color} className={classList.join(' ')} {...rest} />;
};
