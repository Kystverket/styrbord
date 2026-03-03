/**
 * Converts a byte value to a human-readable string using decimal units (kB/MB).
 * Values below 2_000_000 bytes are shown as kB, otherwise as MB.
 *
 * @param bytes Number of bytes to format.
 * @param decimals Number of digits after the decimal separator. Defaults to 0.
 * Invalid values are clamped to a safe non-negative integer.
 * @returns A formatted size string, e.g. "240 kB" or "3.7 MB".
 *
 * @example
 * convertBytesToReadable(240000) // "240 kB"
 *
 * @example
 * convertBytesToReadable(3700000, 1) // "3.7 MB"
 *
 * @example
 * convertBytesToReadable(-10, 2) // "0.00 kB"
 */
export function convertBytesToReadable(bytes?: number, decimals: number = 0): string | undefined {
  if (bytes === undefined) return undefined;

  const safeBytes = Number.isFinite(bytes) && bytes > 0 ? bytes : 0;
  const safeDecimals = Number.isFinite(decimals) ? Math.max(0, Math.floor(decimals)) : 0;

  const format = (value: number) => value.toFixed(safeDecimals);

  if (safeBytes < 2_000_000) {
    return `${format(safeBytes / 1_000)} kB`;
  }

  return `${format(safeBytes / 1_000_000)} MB`;
}
