import { FC, useContext } from 'react';
import { Avatar as DsAvatar, AvatarProps as DsAvatarProps, MergeRight, Tooltip } from '@digdir/designsystemet-react';
import BoringAvatar from 'boring-avatars';
import classes from './Avatar.module.scss';
import { autoSolidStyles, borderStyleClasses, boringColors, sizeClasses, determineAutoMode } from './Avatar.helpers';
import { AvatarContext } from './Avatar.context';
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

export type AvatarAuto = boolean | 'solid' | AvatarBoringVariant;

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
     *
     * Defaults to the `auto` of the nearest `AvatarProvider`. Set to `false` to opt this avatar
     * out of a provider's default and render it without generated colors.
     */
    auto?: AvatarAuto;
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

  const context = useContext(AvatarContext);
  const autoMode = determineAutoMode(auto ?? context.auto, rest['aria-label']);
  const isBoring = autoMode !== undefined && autoMode !== 'solid';

  if (isBoring) {
    classList.push(classes.boring);
  }

  const wrapperClass = [classes.wrapper, checked ? classes.checked : undefined].filter(Boolean).join(' ');
  // A data-color on the avatar itself sets --ds-color-base-default, so it wins over the solid colors
  const solidStyles: Record<string, string> =
    autoMode === 'solid' && !rest['data-color'] ? autoSolidStyles(rest['aria-label']) : {};

  const props = {
    'data-size': size,
    className: classList.join(' '),
    ...rest,
    style: { ...solidStyles, ...rest.style },
  } as DsAvatarProps;
  let content = null;

  const boringAvatar = isBoring ? (
    <BoringAvatar variant={autoMode} name={rest['aria-label'] ?? ''} colors={boringColors} size="100%" square />
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

  // Only wrap when the check overlay is used, so .ds-avatar stays a direct child of e.g. AvatarStack's <li>
  const avatar =
    checked === undefined ? (
      <DsAvatar {...props}>{content}</DsAvatar>
    ) : (
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
