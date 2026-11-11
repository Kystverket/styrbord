import type { LayerDefinition } from "~/utility/layers.types";

/** The parts of a layer the layer menu shows. */
export type LayerMenuItem = Pick<
  LayerDefinition,
  "id" | "label" | "category" | "description" | "legend"
>;

/**
 * A row in the layer menu for a layer the parent draws itself, rather than one
 * registered through the layer contexts. The parent owns the visibility: it
 * passes `visible` and flips it in `onToggle`.
 *
 * `GeoJsonViewer` uses this to list its own `data` (see its `dataLayer` prop).
 */
export interface LayerToggleExtraLayer extends LayerMenuItem {
  /** Whether the layer is currently shown. */
  visible: boolean;
  /** Called when the user flips the layer's switch. */
  onToggle: () => void;
}

/**
 * Props for the LayerToggle map control.
 */
export interface LayerToggleProps {
  /** Additional CSS class applied to the root element. */
  className?: string;
  /**
   * Whether the panel starts open. Defaults to `false`.
   */
  defaultOpen?: boolean;
  /**
   * Layers the parent draws and shows/hides itself. They are listed with the
   * custom layers, at the top of the menu.
   */
  extraLayers?: LayerToggleExtraLayer[];
}
