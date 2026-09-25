import { AvatarBoringVariant } from './Avatar';
import classes from './Avatar.module.scss';
import { colors } from '@kystverket/styrbord-tokens/colors';

/**
 * Kystverket's avatar palette. boring-avatars needs hex strings (some variants compute
 * contrast from them), so these are resolved token values rather than CSS variables.
 */
export const boringColors = [
  colors.light.dyphav.baseDefault,
  colors.light.hav.baseDefault,
  colors.light.himmel.baseDefault,
  colors.light.sand.baseDefault,
  colors.light.skog.baseDefault,
];

const colorBaseOptions = [
  colors.light.skog.baseDefault,
  colors.light.gress.borderDefault,
  colors.light.hav.baseDefault,
  colors.light.dyphav.borderStrong,
  colors.light.neutral.borderDefault,
  colors.light.warning.borderDefault,
  colors.light.lyng.borderDefault,
];

/**
 * Picks an item deterministically from a name, so the same person always gets the same one.
 * The name is normalized first, so casing, surrounding whitespace and Unicode form don't matter.
 */
function pickByName<T>(name: string, options: readonly T[]): T {
  const normalized = name.normalize('NFC').trim().toLowerCase();
  let hash = 0;

  // hash * 31 + char, truncated to 32 bits
  for (let i = 0; i < normalized.length; i++) {
    hash = (normalized.charCodeAt(i) + ((hash << 5) - hash)) | 0;
  }

  return options[Math.abs(hash) % options.length];
}

export const sizeClasses = (size: string) => {
  if (size === '2xs') return classes['size2xs'];
  if (size === '3xs') return classes['size3xs'];
  return '';
};

export const borderStyleClasses = (borderStyle: string | undefined) => {
  if (borderStyle) {
    return [classes[`has-border`], classes[`border-${borderStyle}`]].filter(Boolean).join(' ');
  }
};

export const autoSolidStyles = (ariaLabel?: string) => {
  const styles: Record<string, string> = {};
  if (ariaLabel) {
    styles['--ds-color-base-default'] = pickByName(ariaLabel, colorBaseOptions);
    styles['--ds-color-base-contrast-default'] = 'white';
  } else {
    styles['--ds-color-base-default'] = colors.light.neutral.surfaceTinted;
    styles['--ds-color-base-contrast-default'] = colors.light.neutral.textSubtle;
  }
  return styles;
};

export const determineAutoMode = (
  auto: true | undefined | 'solid' | AvatarBoringVariant,
  ariaLabel?: string,
): AvatarBoringVariant | 'solid' => {
  if (!ariaLabel) return 'solid';
  if (!auto) return 'solid';
  return auto === true ? 'solid' : auto;
};
