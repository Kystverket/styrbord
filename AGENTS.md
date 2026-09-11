# AGENTS.md

This file provides guidance to any AI agent when working with code in this repository.

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

**Color tokens**: import color names and types from `@kystverket/styrbord-tokens/colors` — `styrbordSemanticColors`, `styrbordPaletteColors`, `colors` (resolved hex), and the matching `StyrbordSemanticColor` / `StyrbordPaletteColor` types. Never hand-write a color union. See `Text.tsx`, `icon.tsx`, `Dropdown.stories.tsx`.

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
- **Naming**: directories and files are PascalCase (`Box/Box.tsx`). Some older components use lowercase filenames (`Box/box.tsx`) — that is legacy. All new files are PascalCase; do not add lowercase ones, and do not rename existing ones as drive-by cleanup.
- **Where stories go** — depends on whether Styrbord wraps the component:
  - Styrbord has a wrapper component in `src/` → story is co-located: `ComponentName/ComponentName.stories.tsx`. This is the common case (~65 stories).
  - Styrbord only re-exports the Designsystemet component (no `.tsx` in `src/`, at most a `.override.scss`) → story lives in `base/storybook/stories/designsystemet/ComponentName/` (~20 stories).
- Storybook configuration, static pages and the decorator live in `storybook/` (not `src/`).
- Shared CSS for map pickers: `components/shared/MapPicker.module.css`.

### Build output

Both packages export from `dist/style.js` (types at `dist/src/main.d.ts`, CSS at `dist/style.css`). All peer dependencies are externalized during build — they are never bundled.

## Commit conventions

This project uses **conventional commits**. Every commit message must follow the format:

```text
<type>(<scope>): <description>
```

**Scope is required** and must be either `base` or `kart`. This is enforced on PR titles by `amannn/action-semantic-pull-request` in `.github/workflows/lint.yml`.

Examples:

```text
feat(base): add NumberInput component
fix(kart): correct marker offset on retina displays
chore(base): bump designsystemet to 1.16
refactor(kart): extract useTerraDraw into shared hook
```

Common types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`.

A `feat` commit triggers a minor version bump; `fix` triggers a patch bump; a breaking change (`feat!` or `BREAKING CHANGE:` in the footer) triggers a major bump. release-please reads these to determine version increments automatically.

## Versioning and releases

Releases are managed by **release-please** via `.github/workflows/release-please.yml`. The two packages are versioned independently:

- `@kystverket/styrbord` (path: `base`) — current version tracked in `.release-please-manifest.json`
- `@kystverket/styrbord-kart` (path: `kart`) — current version tracked in `.release-please-manifest.json`

Configuration is in `release-please-config.json`. When commits land on `main`, release-please opens or updates a release PR per package. Merging that PR tags the release and triggers the publish workflow.

**Do not manually bump versions in `package.json`** — release-please owns that. Do not edit `.release-please-manifest.json` by hand either.

On release, each package is published to both **GitHub Packages** (`npm.pkg.github.com`) and **npmjs.org** (via tokenless OIDC). Only the package that has a new release is published — the other is left untouched.

## Before committing

Run `npm run pretty:fix` (or `npm run pretty:fix --workspace base`) and `npm run lint:check` before every commit. Prettier failures are caught by CI, not by the build, so unformatted code lands and then needs a follow-up commit — there are several standalone `prettier fix` commits in the history for exactly this reason.

## Working rules

- **Surgical changes.** Touch only what the task requires. Don't reformat, rename, or "improve" adjacent code — this is a published library, and every diff line is a diff line someone reviews against a release.
- **Match existing conventions, even when you disagree.** Conformance beats taste inside this codebase. If a convention looks actively harmful, say so; don't fork it silently.
- **Surface conflicting patterns, don't blend them.** Where two patterns contradict (see file naming and story placement above), follow the newer one and flag the older for cleanup. Never average the two into a third variant.
- **Fail loud.** If part of a task was skipped, blocked or unverified, say which part. Don't report a change as done when only some of it landed.
