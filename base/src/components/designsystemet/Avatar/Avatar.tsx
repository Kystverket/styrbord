import { FC } from 'react';
import { Avatar as DsAvatar, AvatarProps as DsAvatarProps, MergeRight, Tooltip } from '@digdir/designsystemet-react';
import BoringAvatar from 'boring-avatars';
import classes from './Avatar.module.scss';

export type AvatarBoringVariant =
  | 'marble'
  | 'beam'
  | 'pixel'
  | 'sunset'
  | 'ring'
  | 'bauhaus'
  | 'geometric'
  | 'abstract';

/**
 * Kystverket's avatar palette. boring-avatars needs hex strings (some variants compute
 * contrast from them), and `base` has no runtime dependency on `@kystverket/styrbord-tokens`,
 * so the values are copied here. Keep them in sync with the named tokens.
 */
const boringColors = [
  '#001955', // dyphav base-default
  '#0596CB', // hav base-default
  '#A9E5FB', // himmel base-default
  '#F7EFE5', // sand base-default
  '#3BA460', // skog base-default
];

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
    /**
     * Renders a generated [boring avatar](https://boringavatars.com) in Kystverket's colors,
     * seeded from `aria-label`. Ignored when `children` is set.
     */
    boring?: AvatarBoringVariant;
  }
>;

export const Avatar: FC<AvatarProps> = ({
  'data-size': size = 'md',
  'border-style': borderStyle,
  className,
  tooltip,
  checked,
  boring,
  children,
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

  if (boring) {
    classList.push(classes.boring);
  }

  const wrapperClass = [classes.wrapper, checked ? classes.checked : undefined].filter(Boolean).join(' ');

  const props = { 'data-size': size, className: classList.join(' '), ...rest } as DsAvatarProps;
  let content = null;

  const boringAvatar = boring ? (
    <BoringAvatar variant={boring} name={rest['aria-label'] ?? ''} colors={boringColors} size="100%" square />
  ) : null;

  if (boring && children) {
    content = (
      <>
        <div className={classes.boringChildren}>{children}</div>
        {boringAvatar}
      </>
    );
  } else if (boring && !children) {
    content = boringAvatar;
  } else {
    content = children;
  }

  const avatar = (
    <span className={wrapperClass}>
      <DsAvatar {...props}>{content}</DsAvatar>
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
