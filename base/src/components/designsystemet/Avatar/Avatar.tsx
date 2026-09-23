import { FC } from 'react';
import { Avatar as DsAvatar, AvatarProps as DsAvatarProps, MergeRight, Tooltip } from '@digdir/designsystemet-react';
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
    'border-style'?: 'solid' | 'dashed' | 'dotted' | 'double' | 'none';
    /**
     * Tooltip text to display on hover.
     */
    tooltip?: string;
    /**
     * When true, overlays a checkmark on the avatar with a subtle dimming effect.
     */
    checked?: boolean;
  }
>;

export const Avatar: FC<AvatarProps> = ({
  'data-size': size = 'md',
  'border-style': borderStyle,
  className,
  tooltip,
  checked,
  ...rest
}) => {
  const classList = [className];

  if (size === '2xs') {
    classList.push(classes['size2xs']);
  } else if (size === '3xs') {
    classList.push(classes['size3xs']);
  }

  if (borderStyle) {
    classList.push(classes[`has-border`], classes[`border-${borderStyle}`]);
  }

  const wrapperClass = [classes.wrapper, checked ? classes.checked : undefined].filter(Boolean).join(' ');

  const props = { 'data-size': size, className: classList.join(' '), ...rest } as DsAvatarProps;
  const avatar = (
    <span className={wrapperClass}>
      <DsAvatar {...props} />
      <span
        className={classes.checkOverlay}
        data-variant={(rest as unknown as { 'data-variant'?: string })['data-variant']}
        aria-hidden="true"
      />
    </span>
  );

  if (tooltip) {
    return <Tooltip content={tooltip}>{avatar}</Tooltip>;
  }

  return avatar;
};
