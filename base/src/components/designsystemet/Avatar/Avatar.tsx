import { FC } from 'react';
import { Avatar as DsAvatar, AvatarProps as DsAvatarProps, MergeRight, Tooltip } from '@digdir/designsystemet-react';
import BoringAvatar from 'boring-avatars';
import classes from './Avatar.module.scss';
import { autoSolidStyles, borderStyleClasses, boringColors, sizeClasses, determineAutoMode } from './Avatar.helpers';
import { DataColor, DataColorVariant } from '~/main';

export type AvatarBoringVariant =
  | 'marble'
  | 'beam'
  | 'pixel'
  | 'sunset'
  | 'ring'
  | 'bauhaus'
  | 'geometric'
  | 'abstract';

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
    'data-color'?: DataColor;
    'data-color-variant'?: DataColorVariant;
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
    auto?: true | 'solid' | AvatarBoringVariant;
  }
>;

export const Avatar: FC<AvatarProps> = ({
  'data-size': size = 'md',
  'border-style': borderStyle,
  className,
  tooltip,
  checked,
  auto,
  children,
  ...rest
}) => {
  const classList = [className, sizeClasses(size), borderStyleClasses(borderStyle)];

  const autoMode = determineAutoMode(auto, rest['aria-label']);
  const isBoring = autoMode !== 'solid';

  if (isBoring) {
    classList.push(classes.boring);
  }

  const wrapperClass = [classes.wrapper, checked ? classes.checked : undefined].filter(Boolean).join(' ');
  const wrapperStyles: Record<string, string> = autoMode === 'solid' ? autoSolidStyles(rest['aria-label']) : {};

  const props = { 'data-size': size, className: classList.join(' '), ...rest } as DsAvatarProps;
  let content = null;

  const boringAvatar = isBoring ? (
    <BoringAvatar
      variant={autoMode ?? 'marble'}
      name={rest['aria-label'] ?? ''}
      colors={boringColors}
      size="100%"
      square
    />
  ) : null;

  if (isBoring && children) {
    content = (
      <>
        <div className={classes.boringChildren}>{children}</div>
        {boringAvatar}
      </>
    );
  } else if (isBoring && !children) {
    content = boringAvatar;
  } else {
    content = children;
  }

  const avatar = (
    <span className={wrapperClass} style={wrapperStyles}>
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
