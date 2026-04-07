/**
 * Shared coordinate math utilities.
 */

/** Clamp latitude to the valid WGS-84 range. */
export function clampLatitude(lat: number): number {
  return Math.max(-90, Math.min(90, lat));
}

/** Clamp longitude to the valid WGS-84 range. */
export function clampLongitude(lon: number): number {
  return Math.max(-180, Math.min(180, lon));
}

/** Round a number to the specified number of decimal places. */
export function roundToDecimals(num: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(num * factor) / factor;
}
