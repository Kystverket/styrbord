import type { ReactNode } from 'react';
import styles from './GeoJsonEditor.module.css';
import type { DrawMode } from './GeoJsonEditor.types';

// ---------------------------------------------------------------------------
// SVG Icons (inline to avoid external dependency)
// ---------------------------------------------------------------------------

const PointIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <circle cx="12" cy="12" r="5" />
  </svg>
);

const LineIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <polyline points="4,18 12,6 20,18" />
  </svg>
);

const PolygonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    fillOpacity="0.2"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
  >
    <polygon points="12,3 21,10 18,20 6,20 3,10" />
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
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <circle cx="12" cy="12" r="8" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <polygon points="12,5 14,11 12,10 10,11" fill="currentColor" />
    <polygon points="12,19 10,13 12,14 14,13" fill="currentColor" fillOpacity="0.4" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

// ---------------------------------------------------------------------------
// Icons map
// ---------------------------------------------------------------------------

const MODE_ICONS: Record<DrawMode, () => ReactNode> = {
  point: PointIcon,
  linestring: LineIcon,
  polygon: PolygonIcon,
  'directional-point': DirectionalPointIcon,
};

const MODE_LABELS: Record<DrawMode, string> = {
  point: 'Tegn punkt',
  linestring: 'Tegn linje',
  polygon: 'Tegn polygon',
  'directional-point': 'Tegn retningspunkt',
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
  return (
    <div className={styles.toolbar}>
      {modes.map((mode) => {
        const Icon = MODE_ICONS[mode];
        const isActive = activeMode === mode;
        return (
          <button
            key={mode}
            type="button"
            title={MODE_LABELS[mode]}
            aria-label={MODE_LABELS[mode]}
            aria-pressed={isActive}
            className={[styles.toolbarButton, isActive && styles.active].filter(Boolean).join(' ')}
            onClick={() => onSetMode(isActive ? 'static' : mode)}
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
            title="Velg/rediger"
            aria-label="Velg/rediger"
            aria-pressed={activeMode === 'select'}
            className={[styles.toolbarButton, activeMode === 'select' && styles.active].filter(Boolean).join(' ')}
            onClick={() => onSetMode(activeMode === 'select' ? 'static' : 'select')}
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
            title="Slett valgt"
            aria-label="Slett valgt"
            className={[styles.toolbarButton, styles.danger].join(' ')}
            onClick={onDelete}
          >
            <DeleteIcon />
          </button>
        </>
      )}
    </div>
  );
}
