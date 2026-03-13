/**
 * Shared types for draw controls
 */

import { Feature } from 'ol';
import { Geometry } from 'ol/geom';
import { Draw } from 'ol/interaction';
import VectorSource from 'ol/source/Vector';

export type DrawType = 'LineString' | 'Polygon' | 'Point';

/** Context for managing draw state across components */
export interface DrawContext {
  /** Current active draw type */
  activeType: DrawType | null;
  /** Set active draw type */
  setActiveType: (type: DrawType | null) => void;
  /** Vector source for drawn features */
  source: VectorSource | null;
  /** Current draw interaction */
  interaction: Draw | null;
  /** Set current draw interaction */
  setInteraction: (interaction: Draw | null) => void;
  /** Cancel current drawing operation */
  cancelDraw: () => void;
}

/** Props for draw control components (toolbar only — layer concerns live on DrawLayerProps) */
export interface DrawControlsProps {
  /** Called when a feature is drawn and added */
  onFeatureAdd?: (feature: Feature<Geometry>) => void;
  /** Optional limit on number of features that can be drawn */
  drawLimit?: number;
  /** Which draw types to offer in the toolbar */
  drawTypes?: DrawType[];
}
