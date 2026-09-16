/**
 * Every colour that kart paints *onto* a map, in one place.
 *
 * MapLibre paint properties and terra-draw styles take plain colour strings,
 * not CSS custom properties, so map colours cannot ride the `--ds-color-*`
 * cascade the way component CSS does. Resolving them from
 * `@kystverket/styrbord-tokens/colors` is the next best thing: the values stay
 * owned by the theme instead of being copied into each layer definition by
 * hand, where they drift as soon as the palette moves.
 *
 * Values come from the **light** scheme. The base map tiles are light whatever
 * colour scheme surrounds them, so the geometry drawn on top follows the tiles
 * rather than the page.
 */

import { colors } from "@kystverket/styrbord-tokens/colors";

const token = colors.light;

/**
 * A `#rrggbb` colour. terra-draw's style props require this narrower form, and
 * the token package types every slot as a plain `string`.
 */
export type HexColor = `#${string}`;

/** Narrow a token value to {@link HexColor}. All `--ds-color-*` slots are hex. */
const hex = (value: string) => value as HexColor;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Turn a `#rrggbb` token value into an `rgba()` string.
 *
 * MapLibre accepts a separate `*-opacity` paint property for most layers, but
 * not for every colour slot (halos, shadows, `box-shadow` on marker DOM), so a
 * pre-multiplied string is needed in places.
 */
export function withAlpha(color: HexColor, alpha: number): string {
  const value = color.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ---------------------------------------------------------------------------
// Drawing — geometry the user is creating or editing (GeoJsonEditor)
// ---------------------------------------------------------------------------

/** Fill, outline and vertex colour for geometry being drawn. */
export const DRAW_COLOR = hex(token.accent.baseDefault);
/** Halo around drawn vertices, so they stay visible over dark tiles. */
export const DRAW_CONTRAST_COLOR = hex(token.neutral.backgroundDefault);
/** Fill opacity for polygons under the draw and select modes. */
export const DRAW_FILL_OPACITY = 0.2;
/** Selection handles sitting on an existing vertex. */
export const DRAW_SELECTION_POINT_COLOR = hex(token.accent.borderDefault);
/** Midpoint handles, which insert a new vertex when dragged. */
export const DRAW_MIDPOINT_COLOR = hex(token.accent.baseHover);

// ---------------------------------------------------------------------------
// Viewing — read-only geometry (GeoJsonViewer, createSimpleLayer)
// ---------------------------------------------------------------------------

/** Outline colour for polygons and the line colour for LineStrings. */
export const VIEW_LINE_COLOR = hex(token.primary.baseDefault);
/** Polygon fill — the line colour at {@link DRAW_FILL_OPACITY}. */
export const VIEW_FILL_COLOR = withAlpha(VIEW_LINE_COLOR, DRAW_FILL_OPACITY);
/** Point circle colour. */
export const VIEW_POINT_COLOR = hex(token.accent.borderDefault);
/** Point circle stroke, matching the line colour. */
export const VIEW_POINT_STROKE_COLOR = hex(token.primary.baseDefault);

// ---------------------------------------------------------------------------
// Feature labels
// ---------------------------------------------------------------------------

/** Label text drawn on the map by `getLabel()`. */
export const LABEL_TEXT_COLOR = hex(token.neutral.textDefault);
/** Halo behind label text. */
export const LABEL_HALO_COLOR = hex(token.neutral.backgroundDefault);

// ---------------------------------------------------------------------------
// Compass markers (CoordinateDirectionField, directional-point mode)
// ---------------------------------------------------------------------------

/** The north half of the compass needle and its hub. */
export const COMPASS_NEEDLE_COLOR = hex(token.accent.borderDefault);
/** The ring around the compass and the arrows on the rotation handle. */
export const COMPASS_BORDER_COLOR = hex(token.primary.baseDefault);
/** Face of the compass and the rotation handle. */
export const COMPASS_FACE_COLOR = hex(token.neutral.backgroundDefault);

// ---------------------------------------------------------------------------
// Off-palette
//
// Nothing in @kystverket/styrbord-tokens matches these. They are declared here
// so that they are at least in one place and easy to find; moving them onto
// token colours changes what the map looks like and wants a design decision
// first (see REWORK-FINDINGS.md).
// ---------------------------------------------------------------------------

/** Hover and selection highlight blue. Closest token is `info.baseDefault` (`#0a71c0`). */
export const SELECTED_COLOR: HexColor = "#0062ba";
/** Hover highlight fill. */
export const HOVER_COLOR = withAlpha(SELECTED_COLOR, 0.4);
/** Glow behind a selected point, and the marker `box-shadow` for directional points. */
export const SELECTED_GLOW_COLOR = withAlpha(SELECTED_COLOR, 0.5);

/** Outline on a terra-draw selected vertex — a hard red that reads as "grab me". */
export const DRAW_SELECTED_OUTLINE_COLOR: HexColor = "#ff0000";

/** The south (muted) half of the compass needle. */
export const COMPASS_MUTED_COLOR: HexColor = "#b0b0b0";

/** Fallback colour for `createSimpleLayer({ type: "vector-tiles" })`. */
export const VECTOR_TILE_DEFAULT_COLOR: HexColor = "#088";
