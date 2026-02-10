import { FC } from 'react';
import { Avatar as DsAvatar, AvatarProps as DsAvatarProps, MergeRight } from '@digdir/designsystemet-react';
import classes from './Avatar.module.scss';

type AriaLabel = {
  /**
   * The name of the person the avatar represents.
   */
  'aria-label': string;
};
type AriaHidden = Partial<AriaLabel> & {
  'aria-hidden': true | 'true';
};

export type AvatarProps = MergeRight<
  DsAvatarProps,
  (AriaLabel | AriaHidden) & {
    'data-size'?: '2xs' | '3xs' | DsAvatarProps['data-size'];
    'data-color-variant'?: 'base' | 'surface-tinted';
    border?: 'solid' | 'dashed' | 'dotted' | 'double' | 'none';
  }
>;

export const Avatar: FC<AvatarProps> = ({
  'data-size': size = 'md',
  'data-color-variant': colorVariant = 'base',
  border: borderStyle,
  className,
  ...rest
}) => {
  const classList = [className];

  if (size === '2xs') {
    classList.push(classes['size2xs']);
  } else if (size === '3xs') {
    classList.push(classes['size3xs']);
  }

  if (colorVariant === 'surface-tinted') {
    classList.push(classes.surfaceTinted);
  }

  if (borderStyle) {
    classList.push(classes[`border-${borderStyle}`]);
  }

  return <DsAvatar data-size={size} className={classList.join(' ')} {...rest} />;
};
