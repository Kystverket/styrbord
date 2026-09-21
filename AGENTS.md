# AGENTS.md

This file provides guidance to any AI agent when working with code in this repository.

## Overview

Styrbord is a monorepo containing three npm workspace packages:

- **`base`** (`@kystverket/styrbord`) — React component library wrapping [@digdir/designsystemet-react](https://storybook.designsystemet.no/) with Kystverket branding. Also re-exports all Designsystemet components explicitly.
- **`kart`** (`@kystverket/styrbord-kart`) — Map and GeoJSON component library built on MapLibre GL and terra-draw. Depends on `@kystverket/styrbord`.
- **`consent`** (`@kystverket/styrbord-consent`) — Cookie-consent banner, preferences dialog and the consent store behind them, built on [c15t](https://c15t.com) in offline mode. Deliberately standalone: it does **not** depend on `@kystverket/styrbord`, only on `@kystverket/styrbord-tokens`, and supports React 18.2+.

All are library packages (not apps): they build to `dist/` and export from `src/main.ts`.

## Commands

All commands can be run from the repo root or from a workspace directory:

```bash
# Build all workspaces
npm run build

# Dev mode (both workspaces in parallel)
npm run dev

# Storybook (base, port 6006)
npm run storybook:base

# Storybook (consent, port 6007)
npm run storybook --workspace consent

# Lint and format
npm run lint:check        # check all workspaces
npm run lint:fix          # auto-fix all workspaces
npm run pretty:check      # check formatting
npm run pretty:fix        # auto-fix formatting

# Build only one workspace
npm run build --workspace base
npm run build --workspace kart
npm run build --workspace consent
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

### `consent` — Cookie Consent

**Components** (`consent/src/components/`):

- `ConsentProvider` — Creates the consent store and provides it. Everything else must live inside it.
- `CookieConsent` — Banner, preferences dialog and settings button in one. What apps normally mount.
- `ConsentBanner` / `ConsentPreferencesDialog` / `ConsentSettingsButton` — The individual surfaces, exported
  for apps that want to place them themselves.
- `ManageConsentLink` — Text-link alternative to the floating settings button.

**State** lives in `utility/consentStore.ts` (c15t, offline mode) and is read through `hooks/useConsent.ts`.
Translations for nb-NO, nn-NO and en-US ship with the package in `src/i18n/`.

**No Styrbord dependency — on purpose.** Some applications cannot take on the whole design system,
and a consent banner is exactly the thing they still need. So consent depends only on
`@kystverket/styrbord-tokens`, and the handful of controls it needs live in
`components/shared/` (`Button`, `Switch`); the dialog is a native `<dialog>` with `showModal()`,
the settings icon is an inline SVG, and `ManageConsentLink` is a `<button>` styled as a link.
Do not reach for `@kystverket/styrbord` here, and do not add a component to `shared/` that the
consent surfaces don't actually use — it is not a second design system.

Consequences worth knowing:

- **Every colour, space and font size comes from a `--ds-*` token**, and `npm run tokens:check`
  validates `consent/src` against the tokens package *alone* — a token that only exists in
  `@digdir/designsystemet-css` would be undefined for a consumer of this package.
- **The surfaces set their own `data-color`** (`primary` on banner and dialog, `neutral` on the
  settings button), because `--ds-color-base-*` has no value without a `[data-color]` ancestor and
  a standalone package cannot assume the app provides one. `shared/Button` relies on this.
- **The token CSS is bundled into `dist/style.css`** via an `@import` in `src/css/index.css`, so
  `import '@kystverket/styrbord-consent/style.css'` is the whole setup. In a Styrbord app that
  means the tokens load twice — same values, so it costs bytes, not correctness.
- **`ConsentPreferencesDialog` must be mounted wherever `ConsentBanner` or
  `ConsentSettingsButton` is.** Both hide themselves when they set `activeUI` to `dialog`, so
  without the dialog the surface vanishes with nothing to replace it and the user can neither
  give nor withdraw consent. `utility/dialogRegistry.ts` counts mounted dialogs and warns on the
  console when a visible surface has none — the check is deferred one tick because sibling
  effects run in order and the dialog registers after the banner above it.
- **React 18.2 is supported**, so no React 19-only APIs. Exported components carry an explicit
  `ReactElement` return type: an inferred return type emits `React.JSX.Element`, which does not
  exist in `@types/react` 18.2 and breaks consumers on that version.

**Storybook** runs on port 6007 and deploys to `/consent` alongside base and kart. Three things it
does differently from the other workspaces: it has no `SprakProvider` (the texts follow the
library, not the app's i18n setup), it imports no Styrbord components or CSS at all — which is what
keeps the deployed Storybook honest about the package standing alone — and the stories run against
*inert* copies of the real services — `storybook/ConsentDemo.tsx` strips `src`/`textContent` and sets `callbackOnly`, so a
published demo never actually loads Hotjar or PostHog when you press "Godta alle". The same file
owns the reset button; without it a story could only be played once per browser, since the answer
is persisted in a cookie.

Things that are easy to get wrong here, all of them learned the hard way:

- **Config comes in as props — never read env inside the package.** Next.js and Vite inline env vars at
  build time, so a value read inside the library would be frozen to whatever the build machine had.
- **c15t's `setScripts` appends, it does not replace** (`[...state.scripts, ...scripts]`) despite the name.
  Services are registered once via `createConsentManagerStore`'s `scripts` option. Calling `setScripts`
  as well registers everything twice — visible as a duplicate-React-key warning and double script loads.
- **The consent surfaces wait for `mounted`.** Consent lives in a client-read cookie, so the server cannot
  know whether to show the banner. `useSyncExternalStore`'s `getServerSnapshot` is also used during
  hydration, so returning live client state there throws the whole React tree away with a hydration
  mismatch. `useStoreValue` caches its server snapshot for the same reason.
- **Use `storageConfig.defaultDomain`, not c15t's `crossSubdomain: true`.** The latter derives the domain
  from the last two labels of the hostname, which is right in production but too broad when test
  environments are nested deeper (`app.test.example.cloud` → `.example.cloud`).
- **Cookie metadata is hand-maintained** in `utility/services.ts`. Adding a vendor means adding its cookies
  there, or the dialog silently under-reports. An empty `cookies: []` renders "sets no cookies"; omitting
  the field renders nothing — keep that distinction.
- **A service can only sit in one category the dialog can show.** c15t accepts composite
  conditions (`{ and: ['measurement', 'experience'] }`), but `getSelectableCategories` and the
  dialog's per-category listing both drop non-string categories, so such a service renders
  nowhere and the user never sees it. `postHogService` is the worked example: it is gated on
  `measurement` and turns session replay on and off at runtime from the `experience` consent via
  c15t's `onLoad`/`onConsentChange`. Heatmaps cannot be toggled that way — they are an init
  option, so they only take effect on the next page load.
- **Categories are c15t's fixed vocabulary** (`necessary | functionality | experience | measurement |
  marketing`) and cannot be extended. Labels are ours, so this is invisible to users.

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

**Map colors** (`kart/src/utility/mapColors.ts`): every color painted onto a map lives here. MapLibre paint properties and terra-draw styles take color strings, not CSS variables, so these cannot use the `--ds-color-*` cascade — instead they are resolved from `@kystverket/styrbord-tokens/colors` (light scheme; map tiles are light regardless of the page's color scheme). Never write a hex literal into a layer definition, a terra-draw style or a marker SVG; add a named constant to `mapColors.ts` instead. Colors with no matching token sit in the file's clearly marked off-palette section.

kart's **CSS** uses bare `var(--ds-color-*)` with no hex fallback. `@kystverket/styrbord` always loads the token CSS, so a fallback is dead code that hides a wrong token name. Don't reintroduce them; `npm run tokens:check` catches bad names.

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

**Scope is required** and must be `base`, `kart` or `consent` (`ci` for workflow-only changes). This is enforced on PR titles by `amannn/action-semantic-pull-request` in `.github/workflows/lint.yml`.

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

Releases are managed by **release-please** via `.github/workflows/release-please.yml`. The packages are versioned independently:

- `@kystverket/styrbord` (path: `base`) — current version tracked in `.release-please-manifest.json`
- `@kystverket/styrbord-kart` (path: `kart`) — current version tracked in `.release-please-manifest.json`
- `@kystverket/styrbord-consent` (path: `consent`) — current version tracked in `.release-please-manifest.json`

Configuration is in `release-please-config.json`. When commits land on `main`, release-please opens or updates a release PR per package. Merging that PR tags the release and triggers the publish workflow.

**Do not manually bump versions in `package.json`** — release-please owns that. Do not edit `.release-please-manifest.json` by hand either.

On release, each package is published to both **GitHub Packages** (`npm.pkg.github.com`) and **npmjs.org** (via tokenless OIDC). Only the packages that have a new release are published — the others are left untouched.

## Before committing

Run `npm run pretty:fix` (or `npm run pretty:fix --workspace base`) and `npm run lint:check` before every commit. Prettier failures are caught by CI, not by the build, so unformatted code lands and then needs a follow-up commit — there are several standalone `prettier fix` commits in the history for exactly this reason.

## Working rules

- **Surgical changes.** Touch only what the task requires. Don't reformat, rename, or "improve" adjacent code — this is a published library, and every diff line is a diff line someone reviews against a release. If a change waterfalls into a dependent component (e.g. migrating `data-color-subtle` to `data-color-variant` on `Paragraph` also requires updating `Text`, which consumes it), flag that and fix it too — don't leave the dependent component half-migrated.
- **Match existing conventions, even when you disagree.** Conformance beats taste inside this codebase. If a convention looks actively harmful, say so; don't fork it silently.
- **Surface conflicting patterns, don't blend them.** Where two patterns contradict (see file naming and story placement above), follow the newer one and flag the older for cleanup. Never average the two into a third variant.
- **Fail loud.** If part of a task was skipped, blocked or unverified, say which part. Don't report a change as done when only some of it landed.
- **`Button.variant` diverges from Designsystemet — permanently.** Styrbord uses
  `filled | outline | ghost | subtle | dashed`; Designsystemet uses `primary | secondary | tertiary`.
  This is a settled decision, not drift: upstream's names read as emphasis levels and collide with
  `data-color="primary"`, which is a colour family, and Styrbord's list has room for `subtle` and
  `dashed`, which upstream lacks. Do not "align" it, and do not forward the upstream `variant`
  through the wrapper. The mapping table lives in the `ButtonProps.variant` JSDoc and in the
  Storybook docs page; keep all three in sync. Note this is about `variant` only — `color` being
  capped at `primary | neutral | danger` is a separate, still-open issue.
- **Prop naming.** Match existing prop conventions instead of inventing new ones — color picks use `data-color`, style variants (e.g. `subtle`, `tinted`) use `data-color-variant`. Keep prop names short: drop redundant prefixes (`weight` not `fontWeight` on `Text` — `font` adds nothing).
