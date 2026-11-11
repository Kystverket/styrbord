import { useCallback, useId, useMemo, useState } from "react";
import { Icon, Radio, Search, SearchInput, Switch } from "@kystverket/styrbord";
import { useMapLayers } from "~/hooks/useMapLayers";
import type { LayerLegend } from "~/utility/layers.types";
import type { LayerMenuItem, LayerToggleProps } from "./LayerToggle.types";
import styles from "./LayerToggle.module.css";
import { useTranslation } from "~/translations";

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
// Rows
// ---------------------------------------------------------------------------

/** One layer in the menu, from the layer contexts or `extraLayers`. */
interface MenuEntry {
  definition: LayerMenuItem;
  visible: boolean;
  /** Custom and extra layers: listed first, always expanded. */
  pinned: boolean;
  onToggle: () => void;
}

function LegendSwatch({ legend }: { legend: LayerLegend }) {
  return (
    <span
      className={styles.swatch}
      style={{ borderColor: legend.lineColor ?? legend.fillColor }}
      aria-hidden="true"
    >
      <span
        className={styles.swatchFill}
        style={{
          background: legend.fillColor,
          opacity: legend.fillOpacity ?? 1,
        }}
      />
    </span>
  );
}

/**
 * Switch, optional swatch, then the label over an optional description. The
 * text is a `<label>`, stretched over the whole row in CSS, so clicking
 * anywhere on the row toggles the layer.
 */
function LayerRow({ entry }: { entry: MenuEntry }) {
  const id = useId();
  const { label, description, legend } = entry.definition;
  return (
    <div className={styles.layerItem}>
      <Switch
        id={id}
        checked={entry.visible}
        onChange={entry.onToggle}
        aria-labelledby={`${id}-label`}
        aria-describedby={description ? `${id}-description` : undefined}
      />
      <label htmlFor={id} className={styles.rowLabel}>
        {legend && <LegendSwatch legend={legend} />}
        <span className={styles.rowText}>
          <span
            id={`${id}-label`}
            className={description ? styles.rowTitle : undefined}
          >
            {label}
          </span>
          {description && (
            <span id={`${id}-description`} className={styles.description}>
              {description}
            </span>
          )}
        </span>
      </label>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface LayerGroup {
  category: string;
  entries: MenuEntry[];
}

/**
 * LayerToggle — a map overlay control that lets users turn map layers
 * on and off.
 *
 * Place this component **inside** the map container element (the same
 * `<div>` whose ref is `mapContainerRef`) so it is positioned over the
 * map. It reads all available layers from `useMapLayers`.
 *
 * The panel lists, in order:
 * 1. Custom layers (from `CustomLayersProvider`), grouped by category and
 *    always expanded. Layers with a `legend` or `description` — such as
 *    GeoJSON layers from `createSimpleLayer` — show a colour swatch and a
 *    second line.
 * 2. Background maps, as radio buttons, when more than one is available.
 * 3. Built-in and WMS catalog layers, in collapsible groups showing how many
 *    of their layers are visible.
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
  extraLayers,
}: LayerToggleProps) {
  const { t } = useTranslation();
  const baseLayerName = useId();
  const [open, setOpen] = useState(defaultOpen);
  const [filter, setFilter] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const {
    allLayers,
    toggleLayer,
    availableBaseLayers,
    activeBaseLayerId,
    setActiveBaseLayer,
  } = useMapLayers();

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
    return availableBaseLayers.filter((bl) =>
      bl.label.toLowerCase().includes(normalizedFilter),
    );
  }, [availableBaseLayers, normalizedFilter]);

  // Group layers by category, applying filter. Pinned layers (custom and
  // `extraLayers`) are kept apart from built-in/WMS ones: they are the
  // application's own data and are listed first, always expanded.
  const { pinnedGroups, otherGroups } = useMemo(() => {
    const menuEntries: MenuEntry[] = [
      ...(extraLayers ?? []).map(
        ({ visible, onToggle, ...definition }): MenuEntry => ({
          definition,
          visible,
          pinned: true,
          onToggle,
        }),
      ),
      ...allLayers.map(
        (entry): MenuEntry => ({
          definition: entry.definition,
          visible: entry.visible,
          pinned: entry.origin === "custom",
          onToggle: () => toggleLayer(entry.definition.id),
        }),
      ),
    ];
    const matchesFilter = ({ label, description }: LayerMenuItem) =>
      !normalizedFilter ||
      label.toLowerCase().includes(normalizedFilter) ||
      !!description?.toLowerCase().includes(normalizedFilter);

    const pinned = new Map<string, MenuEntry[]>();
    const other = new Map<string, MenuEntry[]>();
    for (const entry of menuEntries) {
      if (!matchesFilter(entry.definition)) continue;
      const target = entry.pinned ? pinned : other;
      const category = entry.definition.category ?? t("layers.defaultCategory");
      target.set(category, [...(target.get(category) ?? []), entry]);
    }
    const toGroups = (groups: Map<string, MenuEntry[]>): LayerGroup[] =>
      Array.from(groups, ([category, entries]) => ({ category, entries }));
    return { pinnedGroups: toGroups(pinned), otherGroups: toGroups(other) };
  }, [allLayers, extraLayers, normalizedFilter, t, toggleLayer]);

  // When a filter is active, expand all groups so results are visible
  const isGroupExpanded = (group: string) =>
    normalizedFilter !== "" || expandedGroups.has(group);

  const rootClassName = [styles.root, className].filter(Boolean).join(" ");

  const showBaseGroup = showBaseLayerGroup && filteredBaseLayers.length > 0;
  const sectionCount =
    pinnedGroups.length + otherGroups.length + (showBaseGroup ? 1 : 0);
  // A lone group of layers needs no heading — there is nothing to tell apart.
  const showHeadings = sectionCount > 1;

  if (allLayers.length === 0 && !extraLayers?.length && !showBaseLayerGroup) {
    return null;
  }

  return (
    <div className={rootClassName}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? t("layers.hide") : t("layers.show")}
        title={open ? t("layers.hide") : t("layers.show")}
      >
        <LayersIcon className={styles.toggleButtonIcon} />
        {t("layers.toggleButtonLabel")}
      </button>

      {open && (
        <div className={styles.panel} role="group" data-size="sm">
          <div className={styles.filterWrapper}>
            <Search>
              <SearchInput
                aria-label={t("layers.filterAriaLabel")}
                placeholder={t("layers.searchPlaceholder")}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </Search>
          </div>

          {sectionCount === 0 ? (
            <div className={styles.emptyMessage}>
              {normalizedFilter
                ? t("layers.noResults")
                : t("layers.noLayersAvailable")}
            </div>
          ) : (
            <>
              {pinnedGroups.map(({ category, entries }) => (
                <section key={`pinned-${category}`} className={styles.section}>
                  {showHeadings && (
                    <div className={styles.sectionHeading}>{category}</div>
                  )}
                  {entries.map((entry) => (
                    <LayerRow key={entry.definition.id} entry={entry} />
                  ))}
                </section>
              ))}

              {showBaseGroup && (
                <section className={styles.section}>
                  <div className={styles.sectionHeading}>
                    {t("layers.backgroundMaps")}
                  </div>
                  {filteredBaseLayers.map((bl) => (
                    <div key={bl.id} className={styles.layerItem}>
                      <Radio
                        label={bl.label}
                        name={baseLayerName}
                        value={bl.id}
                        checked={bl.id === activeBaseLayerId}
                        onChange={() => setActiveBaseLayer(bl.id)}
                      />
                    </div>
                  ))}
                </section>
              )}

              {otherGroups.map(({ category, entries }) => {
                const expanded = !showHeadings || isGroupExpanded(category);
                return (
                  <section key={`other-${category}`} className={styles.section}>
                    {showHeadings && (
                      <button
                        type="button"
                        className={`${styles.sectionHeading} ${styles.groupToggle}`}
                        onClick={() => toggleGroup(category)}
                        aria-expanded={expanded}
                      >
                        <span
                          className={styles.chevron}
                          data-expanded={expanded}
                        >
                          <Icon material="keyboard_arrow_down" size="sm" />
                        </span>
                        <span className={styles.groupName}>{category}</span>
                        {/* Counts of filtered lists would mislead. */}
                        {!normalizedFilter && (
                          <span className={styles.groupCount}>
                            {entries.filter((e) => e.visible).length}/
                            {entries.length}
                          </span>
                        )}
                      </button>
                    )}
                    {expanded &&
                      entries.map((entry) => (
                        <LayerRow key={entry.definition.id} entry={entry} />
                      ))}
                  </section>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
}
