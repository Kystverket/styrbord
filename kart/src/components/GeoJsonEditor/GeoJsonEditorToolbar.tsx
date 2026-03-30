import type { ReactNode } from "react";
import styles from "./GeoJsonEditor.module.css";
import type { DrawMode } from "./GeoJsonEditor.types";
import { useTranslation } from "~/translations";

// ---------------------------------------------------------------------------
// SVG Icons (inline to avoid external dependency)
// ---------------------------------------------------------------------------

const PointIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 -960 960 960"
    width="20px"
    fill="currentColor"
  >
    <path d="M480-96Q323.03-227.11 245.51-339.55 168-452 168-549q0-134 89-224.5T480-864q12 0 24 .5t24 2.31V-788q-11-2-23-3t-25-1q-103 0-171.5 69T240-549q0 71 60.5 161T480-191q119-107 179.5-197T720-549v-13.5q0-6.75-1-13.5h72q1 7 1 13.67V-549q0 97-77 209T480-96Zm51-405.21q21-21.21 21-51T530.79-603q-21.21-21-51-21T429-602.79q-21 21.21-21 51T429.21-501q21.21 21 51 21T531-501.21ZM480-552Zm240-96h72v-120h120v-72H792v-120h-72v120H600v72h120v120Z" />
  </svg>
);

const LineIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 -960 960 960"
    width="20px"
    fill="currentColor"
  >
    <path d="M119.79-240Q90-240 69-261.21t-21-51Q48-342 69.04-363t50.59-21q5.37 0 9.87.5 4.5.5 9.5 1.5l200-199.52q-2-5.48-2.5-9.48t-.5-9.37q0-29.55 21.21-50.59 21.21-21.04 51-21.04T459-650.85q21 21.15 21 50.85 0 3-3 18l104.86 105q5.14-2 9-2.5 3.85-.5 9-.5 5.14 0 9.64.5 4.5.5 9.5 1.5l152-151.66q-2-5.34-2.5-9.34t-.5-9.37q0-29.55 21.21-50.59 21.21-21.04 51-21.04T891-698.79q21 21.21 21 51T890.96-597q-21.04 21-50.59 21-5.37 0-9.87-.5-4.5-.5-9.5-1.5L669-426.34q2 5.34 2.5 9.34t.5 9.37q0 29.55-21.21 50.59-21.21 21.04-51 21.04T549-357.04q-21-21.04-21-50.59 0-5.37.5-9.87.5-4.5 1.5-9.5L426.09-531q-5.09 2-9.09 2.5t-9 .5q-5 0-19-2L189-330.48q2 5.48 2.5 9.48t.5 9.37q0 29.55-21.21 50.59-21.21 21.04-51 21.04Z" />
  </svg>
);

const PolygonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 -960 960 960"
    width="20px"
    fill="currentColor"
  >
    <path d="M306-168h349l123-356-298-205-298 205 124 356Zm-52 72L96-552l384-264 384 264L706-96H254Zm226-353Z" />
  </svg>
);

const SelectIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M5,3 L5,19 L10,15 L14,21 L16,20 L12,14 L18,14 Z" />
  </svg>
);

const DeleteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3,6 5,6 21,6" />
    <path d="M6,6 L6,20 C6,21.1 6.9,22 8,22 L16,22 C17.1,22 18,21.1 18,20 L18,6" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
    <path d="M9,6 L9,4 C9,3.4 9.4,3 10,3 L14,3 C14.6,3 15,3.4 15,4 L15,6" />
  </svg>
);

const DirectionalPointIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 -960 960 960"
    width="20px"
    fill="currentColor"
  >
    <path d="m312-312 264-72 72-264-264 72-72 264Zm168-120q-20 1-34-13.5T432-480q0-20 14-34t34-14q20 0 34 14t14 34q0 20-14 34t-34 14Zm.28 336Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.05-72Q610-168 701-259.23t91-221Q792-610 700.77-701t-221-91Q350-792 259-700.77t-91 221Q168-350 259.23-259t221 91ZM480-480Z" />
  </svg>
);

// ---------------------------------------------------------------------------
// Icons map
// ---------------------------------------------------------------------------

const MODE_ICONS: Record<DrawMode, () => ReactNode> = {
  point: PointIcon,
  linestring: LineIcon,
  polygon: PolygonIcon,
  "directional-point": DirectionalPointIcon,
};

const MODE_LABEL_KEYS: Record<DrawMode, string> = {
  point: "drawMode.point",
  linestring: "drawMode.linestring",
  polygon: "drawMode.polygon",
  "directional-point": "drawMode.directionalPoint",
};

// ---------------------------------------------------------------------------
// Toolbar
// ---------------------------------------------------------------------------

interface GeoJsonEditorToolbarProps {
  modes: DrawMode[];
  activeMode: string;
  hasSelection: boolean;
  deletable: boolean;
  editable: boolean;
  onSetMode: (mode: string) => void;
  onDelete: () => void;
}

export function GeoJsonEditorToolbar({
  modes,
  activeMode,
  hasSelection,
  deletable,
  editable,
  onSetMode,
  onDelete,
}: GeoJsonEditorToolbarProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.toolbar}>
      {modes.map((mode) => {
        const Icon = MODE_ICONS[mode];
        const isActive = activeMode === mode;
        return (
          <button
            key={mode}
            type="button"
            title={t(MODE_LABEL_KEYS[mode])}
            aria-label={t(MODE_LABEL_KEYS[mode])}
            aria-pressed={isActive}
            className={[styles.toolbarButton, isActive && styles.active]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onSetMode(isActive ? "static" : mode)}
          >
            <Icon />
          </button>
        );
      })}

      {editable && (
        <>
          <div className={styles.toolbarDivider} />
          <button
            type="button"
            title={t("toolbar.select")}
            aria-label={t("toolbar.select")}
            aria-pressed={activeMode === "select"}
            className={[
              styles.toolbarButton,
              activeMode === "select" && styles.active,
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() =>
              onSetMode(activeMode === "select" ? "static" : "select")
            }
          >
            <SelectIcon />
          </button>
        </>
      )}

      {deletable && hasSelection && (
        <>
          <div className={styles.toolbarDivider} />
          <button
            type="button"
            title={t("toolbar.delete")}
            aria-label={t("toolbar.delete")}
            className={[styles.toolbarButton, styles.danger].join(" ")}
            onClick={onDelete}
          >
            <DeleteIcon />
          </button>
        </>
      )}
    </div>
  );
}
