import { useCallback, useMemo, useRef, useState } from 'react';
import { useMapLayers } from '~/hooks/useMapLayers';
import type { LayerEntry } from '~/hooks/useMapLayers';
import type { LayerToggleProps } from './LayerToggle.types';
import styles from './LayerToggle.module.css';

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
// Chevron icon for collapsible groups
// ---------------------------------------------------------------------------
function ChevronIcon({ expanded, className }: { expanded: boolean; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: expanded ? 'rotate(90deg)' : undefined, transition: 'transform 150ms ease' }}
    >
      <polyline points="6 4 10 8 6 12" />
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
export function LayerToggle({ className, defaultOpen = false }: LayerToggleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [filter, setFilter] = useState('');
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const { allLayers, toggleLayer, availableBaseLayers, activeBaseLayerId, setActiveBaseLayer } = useMapLayers();
  const panelRef = useRef<HTMLDivElement>(null);

  const showBaseLayerGroup = availableBaseLayers.length > 1;

  const toggleGroup = useCallback((group: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(group)) {
        next.delete(group);
      } else {
        next.add(group);
      }
      return next;
    });
  }, []);

  const normalizedFilter = filter.trim().toLowerCase();

  // Filter base layers
  const filteredBaseLayers = useMemo(() => {
    if (!normalizedFilter) return availableBaseLayers;
    return availableBaseLayers.filter((bl) => bl.label.toLowerCase().includes(normalizedFilter));
  }, [availableBaseLayers, normalizedFilter]);

  // Group layers by category, applying filter
  const grouped = useMemo(() => {
    const map = new Map<string, LayerEntry[]>();
    for (const entry of allLayers) {
      if (normalizedFilter && !entry.definition.label.toLowerCase().includes(normalizedFilter)) {
        continue;
      }
      const cat = entry.definition.category ?? 'Lag';
      const list = map.get(cat);
      if (list) {
        list.push(entry);
      } else {
        map.set(cat, [entry]);
      }
    }
    return map;
  }, [allLayers, normalizedFilter]);

  // When a filter is active, expand all groups so results are visible
  const isGroupExpanded = useCallback(
    (group: string) => {
      if (normalizedFilter) return true;
      return expandedGroups.has(group);
    },
    [normalizedFilter, expandedGroups],
  );

  const rootClassName = [styles.root, className].filter(Boolean).join(' ');

  const showBaseGroup = showBaseLayerGroup && filteredBaseLayers.length > 0;
  const hasContent = grouped.size > 0 || showBaseGroup;

  return (
    <div className={rootClassName}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? 'Skjul kartlag' : 'Vis kartlag'}
        title={open ? 'Skjul kartlag' : 'Vis kartlag'}
      >
        <LayersIcon className={styles.toggleButtonIcon} />
        Kartlag
      </button>

      {open && (
        <div className={styles.panel} ref={panelRef} role="group">
          <div className={styles.filterWrapper}>
            <input
              type="text"
              className={styles.filterInput}
              placeholder="Søk etter lag…"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Filtrer kartlag"
            />
          </div>

          {!hasContent ? (
            <div className={styles.emptyMessage}>
              {normalizedFilter ? 'Ingen lag samsvarer med søket' : 'Ingen kartlag tilgjengelig'}
            </div>
          ) : (
            <>
              {showBaseGroup && (
                <div>
                  <button
                    type="button"
                    className={styles.categoryHeading}
                    onClick={() => toggleGroup('__base__')}
                    aria-expanded={isGroupExpanded('__base__')}
                  >
                    <ChevronIcon expanded={isGroupExpanded('__base__')} className={styles.chevron} />
                    Bakgrunnskart
                  </button>
                  {isGroupExpanded('__base__') &&
                    filteredBaseLayers.map((bl) => (
                      <label key={bl.id} className={styles.layerItem}>
                        <input
                          type="radio"
                          className={styles.radio}
                          name="base-layer"
                          checked={bl.id === activeBaseLayerId}
                          onChange={() => setActiveBaseLayer(bl.id)}
                        />
                        {bl.label}
                      </label>
                    ))}
                </div>
              )}
              {Array.from(grouped.entries()).map(([category, entries]) => {
                const showHeading = grouped.size > 1 || showBaseGroup;
                const expanded = isGroupExpanded(category);
                return (
                  <div key={category}>
                    {showHeading ? (
                      <button
                        type="button"
                        className={styles.categoryHeading}
                        onClick={() => toggleGroup(category)}
                        aria-expanded={expanded}
                      >
                        <ChevronIcon expanded={expanded} className={styles.chevron} />
                        {category}
                      </button>
                    ) : null}
                    {(!showHeading || expanded) &&
                      entries.map((entry) => (
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
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
}
