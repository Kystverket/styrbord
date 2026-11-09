import { AvatarAuto, AvatarBoringVariant } from './Avatar';
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
 * The color held back for an `AvatarProvider`'s `auto-reserved-seed`: that seed always gets it,
 * and no other seed does. It is in both palettes above.
 */
export const reservedColor = colors.light.hav.baseDefault;

const boringColorsWithoutReserved = boringColors.filter((color) => color !== reservedColor);
const colorBaseOptionsWithoutReserved = colorBaseOptions.filter((color) => color !== reservedColor);

/** Casing, surrounding whitespace and Unicode form don't make two seeds different. */
const normalizeSeed = (seed: string) => seed.normalize('NFC').trim().toLowerCase();

/**
 * `undefined` when there is no reservation, otherwise whether `seed` is the reserved one.
 */
export const matchReservedSeed = (seed: string | undefined, reservedSeed: string | undefined) => {
  if (!reservedSeed?.trim()) return undefined;
  return !!seed && normalizeSeed(seed) === normalizeSeed(reservedSeed);
};

/**
 * The palette for a generated pattern. With a reservation, only the reserved seed may use the
 * reserved color.
 */
export const boringColorsFor = (isReserved: boolean | undefined) =>
  isReserved === false ? boringColorsWithoutReserved : boringColors;

/**
 * Picks an item deterministically from a name, so the same person always gets the same one.
 * The name is normalized first, so casing, surrounding whitespace and Unicode form don't matter.
 */
function pickByName<T>(name: string, options: readonly T[]): T {
  const normalized = normalizeSeed(name);
  let hash = 0;

  // hash * 31 + char, truncated to 32 bits
  for (let i = 0; i < normalized.length; i++) {
    hash = (normalized.charCodeAt(i) + ((hash << 5) - hash)) | 0;
  }

  return options[Math.abs(hash) % options.length];
}

export const sizeClasses = (size: string) => {
  return classes['size' + size];
};

export const borderStyleClasses = (borderStyle: string | undefined) => {
  if (borderStyle) {
    return [classes[`has-border`], classes[`border-${borderStyle}`]].filter(Boolean).join(' ');
  }
};

/**
 * @param isReserved From `matchReservedSeed`: `true` gets the reserved color, `false` never does,
 * `undefined` (no reservation) picks from the full palette.
 */
export const autoSolidStyles = (ariaLabel?: string, isReserved?: boolean) => {
  const styles: Record<string, string> = {};
  if (ariaLabel) {
    let color = isReserved ? reservedColor : pickByName(ariaLabel, colorBaseOptions);
    // Re-pick only on a collision, so a reservation leaves every other seed's color as it was
    if (isReserved === false && color === reservedColor) {
      color = pickByName(ariaLabel, colorBaseOptionsWithoutReserved);
    }
    styles['--ds-color-base-default'] = color;
    styles['--ds-color-base-contrast-default'] = 'white';
  } else {
    styles['--ds-color-base-default'] = colors.light.neutral.surfaceTinted;
    styles['--ds-color-base-contrast-default'] = colors.light.neutral.textSubtle;
  }
  return styles;
};

/**
 * `undefined` means auto is explicitly disabled (`auto={false}`): no generated colors at all.
 */
export const determineAutoMode = (
  auto: AvatarAuto | undefined,
  ariaLabel?: string,
): AvatarBoringVariant | 'solid' | undefined => {
  if (auto === false) return undefined;
  if (!ariaLabel) return 'solid';
  if (!auto) return 'solid';
  return auto === true ? 'solid' : auto;
};
