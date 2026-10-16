import { CSSProperties, Ref } from 'react';
import {
  EXPERIMENTAL_AvatarStack as DsAvatarStack,
  type AvatarStackProps as DsAvatarStackProps,
} from '@digdir/designsystemet-react';

/** A number is treated as pixels, a string is used as-is (e.g. `'var(--ds-size-12)'`). */
type CssLength = number | string;

export type AvatarStackProps = Omit<DsAvatarStackProps, 'gap' | 'avatarSize' | 'overlap' | 'suffix'> & {
  /**
   * Size of the avatars.
   * @default 64
   */
  size?: CssLength;
  /**
   * Width of the gap cut out between overlapping avatars.
   * @default 2
   */
  gap?: CssLength;
  /**
   * How much each avatar overlaps the previous one.
   * @default 16
   */
  overlap?: CssLength;
  /**
   * Border radius of the avatars.
   * @default 32
   */
  radius?: CssLength;
  ref?: Ref<HTMLUListElement>;
};

const toLength = (value: CssLength | undefined) => (typeof value === 'number' ? `${value}px` : value);

export function AvatarStack({ size = 42, gap = 2, overlap = 16, radius = 32, style, ...rest }: AvatarStackProps) {
  const vars = {
    '--dsc-avatar-stack-size': toLength(size),
    '--dsc-avatar-stack-gap': toLength(gap),
    '--dsc-avatar-stack-overlap': toLength(overlap),
    '--dsc-avatar-stack-radius': toLength(radius),
  } as CSSProperties;

  return <DsAvatarStack style={{ ...vars, ...style }} {...rest} />;
}
