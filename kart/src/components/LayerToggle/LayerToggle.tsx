import { useMemo, useRef, useState } from "react";
import { useMapLayers } from "~/hooks/useMapLayers";
import type { LayerEntry } from "~/hooks/useMapLayers";
import type { LayerToggleProps } from "./LayerToggle.types";
import styles from "./LayerToggle.module.css";

// ---------------------------------------------------------------------------
// Inline SVG icon — a simple "layers" stack icon (no external dependency)
// ---------------------------------------------------------------------------
function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * LayerToggle — a map overlay control that lets users turn map layers
 * on and off.
 *
 * Place this component **inside** the map container element (the same
 * `<div>` whose ref is `mapContainerRef`) so it is positioned over the
 * map. It reads all available layers from `useMapLayers` and groups
 * them by category.
 *
 * @example
 * ```tsx
 * <div ref={mapContainerRef} className={styles.mapContainer}>
 *   <LayerToggle />
 * </div>
 * ```
 */
export function LayerToggle({
  className,
  defaultOpen = false,
}: LayerToggleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const { allLayers, toggleLayer } = useMapLayers();
  const panelRef = useRef<HTMLDivElement>(null);

  // Group layers by category (uncategorised layers go under "Layers")
  const grouped = useMemo(() => {
    const map = new Map<string, LayerEntry[]>();
    for (const entry of allLayers) {
      const cat = entry.definition.category ?? "Lag";
      const list = map.get(cat);
      if (list) {
        list.push(entry);
      } else {
        map.set(cat, [entry]);
      }
    }
    return map;
  }, [allLayers]);

  const rootClassName = [styles.root, className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Skjul kartlag" : "Vis kartlag"}
        title={open ? "Skjul kartlag" : "Vis kartlag"}
      >
        <LayersIcon className={styles.toggleButtonIcon} />
        Kartlag
      </button>

      {open && (
        <div className={styles.panel} ref={panelRef} role="group">
          {allLayers.length === 0 ? (
            <div className={styles.emptyMessage}>
              Ingen kartlag tilgjengelig
            </div>
          ) : (
            Array.from(grouped.entries()).map(([category, entries]) => (
              <div key={category}>
                {grouped.size > 1 && (
                  <div className={styles.categoryHeading}>{category}</div>
                )}
                {entries.map((entry) => (
                  <label key={entry.definition.id} className={styles.layerItem}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      checked={entry.visible}
                      onChange={() => toggleLayer(entry.definition.id)}
                    />
                    {entry.definition.label}
                  </label>
                ))}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
