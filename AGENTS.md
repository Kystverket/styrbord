# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Styrbord is a monorepo containing two npm workspace packages:

- **`base`** (`@kystverket/styrbord`) — React component library wrapping [@digdir/designsystemet-react](https://storybook.designsystemet.no/) with Kystverket branding. Also re-exports all Designsystemet components explicitly.
- **`kart`** (`@kystverket/styrbord-kart`) — Map and GeoJSON component library built on MapLibre GL and terra-draw. Depends on `@kystverket/styrbord`.

Both are library packages (not apps): they build to `dist/` and export from `src/main.ts`.

## Commands

All commands can be run from the repo root or from a workspace directory:

```bash
# Build all workspaces
npm run build

# Dev mode (both workspaces in parallel)
npm run dev

# Storybook (base, port 6006)
npm run storybook:base

# Lint and format
npm run lint:check        # check all workspaces
npm run lint:fix          # auto-fix all workspaces
npm run pretty:check      # check formatting
npm run pretty:fix        # auto-fix formatting

# Build only one workspace
npm run build --workspace base
npm run build --workspace kart
```

From within a workspace directory (e.g. `cd kart`):

```bash
npm run build             # tsc + vite build
npm run storybook         # start Storybook dev server
npm run lint:check        # eslint
npm run pretty:fix        # prettier --write
```

There are no meaningful tests in either workspace (`test` scripts are no-ops).

## Architecture

### `base` — Design System Components

**Component categories** (`base/src/components/`):

- `kystverket/` — Kystverket-specific components (marked ⚓ in Storybook): `Alert`, `Box`, `Button`, `Datepicker`, `FileUploader`, `Footer`, `Header`, `Icon`, `Logo`, `PageHeading`, `RichTextArea`, `Stepper`, `Summary`, `Tabs`, etc.
- `designsystemet/` — Extended/overridden Designsystemet components (marked 🌈+⚓): `Button`, `TextInput`, `NumberInput`, `Select`, `Tabs`, `Tag`, etc.
- `deprecated/` — Components being phased out, exported with a `Deprecated` prefix.

**Internationalisation** (`base/src/i18n/`): Translation JSON files for `nb-NO`, `nn-NO`, `en-US`. Translations are loaded via `@kystverket/sprak-react` using the `useStyrbordTranslation` hook (imported from `~/translations`). Applications must wrap with both `<SprakProvider>` (for language selection) and `<StyrbordTranslations>` (for the Styrbord namespace).

**Path aliases**: `~` → `src/`, `@assets` → `assets/`

### `kart` — Map Components

**Components** (`kart/src/components/`):

- `GeoJsonEditor` — Core drawing/editing component using terra-draw. Supports `point`, `linestring`, `polygon` draw modes, hover, select, and `singleFeature` mode.
- `GeoJsonViewer` — Read-only GeoJSON map display.
- `GeoJsonAnnotater` — GeoJSON with annotation capability.
- `CoordinateField` — Selects a single coordinate via map click or numeric inputs. Internally delegates to `GeoJsonEditor` in single-feature point mode.
- `CoordinateDirectionField` — Like `CoordinateField` but also captures a direction angle.
- `LayerToggle` — UI for toggling overlay layers on/off.
- `shared/MapCenterAction` — Shared action button for centering the map.

**Key hooks** (`kart/src/hooks/`):

- `useMaplibreMap` — Creates and manages a MapLibre GL map instance. Reads all layer contexts and `ViewBoundsContext`.
- `useMapLayers` — Manages overlay layer visibility.
- `useCompassMarker`, `usePointMarker` — Add marker overlays to a map.
- `useWmsFeatureInfo` — WMS GetFeatureInfo click integration.
- Internal: `GeoJsonEditor/useTerraDraw` — Wraps terra-draw lifecycle (init, mode switching, change callbacks, single-feature enforcement).

**Layer system** (`kart/src/utility/`):
Four React contexts control which map layers are loaded by `useMaplibreMap`:

- `BaseLayersContext` / `BaseLayersProvider` — Mutually exclusive background layers (one active at a time).
- `BuiltInLayersContext` / `BuiltInLayersProvider` — Pre-defined overlay layers (see `layers.builtIn.ts`). Filterable via `include`/`exclude` config.
- `CustomLayersContext` / `CustomLayersProvider` — Application-defined overlay layers.
- `WmsCatalogLayersContext` / `WmsCatalogLayersProvider` — WMS catalog layers.
- `ViewBoundsContext` / `ViewBoundsProvider` — Shared map bounds and default center/zoom for all maps in a subtree.

Use `createSimpleLayer()` from `layers.helpers.ts` to create `LayerDefinition` objects from simple GeoJSON, WMS, or vector-tile configs.

**Path alias**: `~` → `src/`

### Component/file conventions

- Each component lives in its own directory: `ComponentName/ComponentName.tsx`, `ComponentName.types.ts`, optional `.module.css`.
- Storybook stories are co-located: `ComponentName/ComponentName.stories.tsx`.
- Storybook configuration and static pages in `storybook/` (not `src/`).
- Shared CSS for map pickers: `components/shared/MapPicker.module.css`.

### Build output

Both packages export from `dist/style.js` (types at `dist/src/main.d.ts`, CSS at `dist/style.css`). All peer dependencies are externalized during build — they are never bundled.
