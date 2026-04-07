import { useRef, type ReactNode } from "react";
import type { FeatureCollection } from "geojson";
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

const ImportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 -960 960 960"
    width="20px"
    fill="currentColor"
  >
    <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
  </svg>
);

// ---------------------------------------------------------------------------
// Icons map
// ---------------------------------------------------------------------------

const MODE_ICONS: Record<DrawMode, () => ReactNode> = {
  point: PointIcon,
  linestring: LineIcon,
  polygon: PolygonIcon,
};

const MODE_LABEL_KEYS: Record<DrawMode, string> = {
  point: "drawMode.point",
  linestring: "drawMode.linestring",
  polygon: "drawMode.polygon",
};

// ---------------------------------------------------------------------------
// GeoJSON file import helper
// ---------------------------------------------------------------------------

export type ImportErrorReason =
  | "invalid-json"
  | "not-geojson"
  | "empty-collection";

type ParseResult =
  | { ok: true; data: FeatureCollection }
  | { ok: false; reason: ImportErrorReason; detail: string };

function parseGeoJsonFile(text: string): ParseResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    return {
      ok: false,
      reason: "invalid-json",
      detail: e instanceof Error ? e.message : String(e),
    };
  }

  if (typeof parsed !== "object" || parsed === null) {
    return {
      ok: false,
      reason: "not-geojson",
      detail: `Expected a JSON object but got ${parsed === null ? "null" : typeof parsed}`,
    };
  }

  const obj = parsed as Record<string, unknown>;

  if (obj.type === "FeatureCollection" && Array.isArray(obj.features)) {
    const fc = obj as unknown as FeatureCollection;
    if (fc.features.length === 0) {
      return {
        ok: false,
        reason: "empty-collection",
        detail: "FeatureCollection contains no features",
      };
    }
    return { ok: true, data: fc };
  }

  if (obj.type === "Feature" && obj.geometry) {
    return {
      ok: true,
      data: {
        type: "FeatureCollection",
        features: [obj as unknown as FeatureCollection["features"][number]],
      },
    };
  }

  // Bare Geometry object — wrap it
  if (
    typeof obj.type === "string" &&
    (obj.coordinates || obj.geometries) &&
    !obj.features
  ) {
    return {
      ok: true,
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry:
              obj as unknown as FeatureCollection["features"][number]["geometry"],
          },
        ],
      },
    };
  }

  return {
    ok: false,
    reason: "not-geojson",
    detail: `Unrecognised GeoJSON type: ${typeof obj.type === "string" ? obj.type : "(missing)"}`,
  };
}

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
  onImport: (data: FeatureCollection) => void;
  onImportError?: (reason: ImportErrorReason, detail: string) => void;
}

export function GeoJsonEditorToolbar({
  modes,
  activeMode,
  hasSelection,
  deletable,
  editable,
  onSetMode,
  onDelete,
  onImport,
  onImportError,
}: GeoJsonEditorToolbarProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
      if (typeof text !== "string") return;

      const result = parseGeoJsonFile(text);
      if (result.ok) {
        onImport(result.data);
      } else {
        console.warn(
          `GeoJsonEditor: import failed (${result.reason}) — ${result.detail}`,
        );
        onImportError?.(result.reason, result.detail);
      }
    };
    reader.onerror = () => {
      const detail = reader.error?.message ?? "Unknown read error";
      console.warn(`GeoJsonEditor: failed to read file — ${detail}`);
      onImportError?.("invalid-json", detail);
    };
    reader.readAsText(file);

    // Reset so re-selecting the same file triggers onChange again
    e.target.value = "";
  };

  return (
    <div className={styles.toolbar}>
      <input
        ref={fileInputRef}
        type="file"
        accept=".geojson,.json,application/geo+json,application/json"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

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

      <div className={styles.toolbarDivider} />
      <button
        type="button"
        title={t("toolbar.import")}
        aria-label={t("toolbar.import")}
        className={styles.toolbarButton}
        onClick={() => fileInputRef.current?.click()}
      >
        <ImportIcon />
      </button>

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
