# Rework findings: color and prop alignment

Survey of `@kystverket/styrbord` (base) and `@kystverket/styrbord-kart` (kart) against
[@digdir/designsystemet-react](https://storybook.designsystemet.no/) **1.21.1**, covering how
components express color and how their props relate to Designsystemet's conventions.

Scope: 18 wrapper components in [base/src/components/designsystemet/](base/src/components/designsystemet/),
29 in [base/src/components/kystverket/](base/src/components/kystverket/), 4 deprecated, 68 CSS/SCSS files,
plus the kart package. Everything below was verified against the source in this repo and the installed
Designsystemet 1.21.1 / `@kystverket/styrbord-tokens` 1.0.0 packages.

> **Status:** steps 1 and 6 have been applied — see [What has been fixed](#what-has-been-fixed) for
> exactly what changed and where the implementation deviated from the original proposal. Steps 2–5
> are still open. Sections 1.6, 1.7, 1.8 and the relevant parts of 1.5 and 2.7 describe the state
> *before* those fixes and are kept as the record of what was wrong.

---

## Part 1 — Color

### 1.1 The token layer is in good shape; the components are the problem

`@kystverket/styrbord-tokens` exposes a complete, correct Designsystemet v1 token set: 10 semantic
colors (`primary`, `accent`, `neutral`, `extra1`, `extra2`, `success`, `danger`, `info`, `warning`,
`focus`), 10 Kystverket palette colors (`lyng`, `hav`, `stein`, `gress`, `sol`, `himmel`, `sand`,
`fyr`, `dyphav`, `skog`), each with the standard 16 slots (`background-*`, `surface-*`, `border-*`,
`text-*`, `base-*`), in both light and dark schemes. The TypeScript mirror
(`@kystverket/styrbord-tokens/colors`) is generated and typed.

Almost none of that reach is available through the components. The problems are all one layer up.

### 1.2 Components hardcode the color family instead of using the `data-color` cascade

This is the single biggest issue. Designsystemet's model is that a component's CSS references
*family-less* variables — `--ds-color-surface-tinted`, `--ds-color-text-default`,
`--ds-color-base-default` — and the `data-color` attribute on the element or any ancestor decides
which family those resolve to. That is what makes `<div data-color="danger">` recolor an entire
subtree.

In this repo, the ratio is inverted:

| Token style | Occurrences in `base/src` + `kart/src` CSS |
|---|---|
| Family-hardcoded (`--ds-color-neutral-*`, `--ds-color-primary-*`, …) | **360** |
| Cascade-respecting (`--ds-color-surface-*`, `--ds-color-text-*`, …) | **39** |

Breakdown of the hardcoded ones: `neutral` 186, `primary` 63, `danger` 32, `accent` 22, `warning` 17,
`info` 17, `success` 16, `extra1` 4, `extra2` 3.

The practical consequence: setting `data-color` on a Styrbord component — or on a wrapper around one —
mostly does nothing. Where components *do* accept a color, they usually implement it by switching
CSS classes per family, which is why those APIs support only 2–8 colors instead of all 20.

[Button.module.scss](base/src/components/designsystemet/Button/Button.module.scss) is the one place
that does it right — `.outline`, `.subtle`, `.ghost` and `.dashed` all use family-less variables and
inherit whatever `data-color` is in scope. It should be the template for the rest.

Counter-example, same package:
[Tag.module.css](base/src/components/designsystemet/Tag/Tag.module.css#L7-L33) writes out seven
`[data-color='…']` rules to set one border color, where a single
`--tag-border-color: var(--ds-color-border-subtle)` would cover all 20 families and stay correct as
the theme grows.

### 1.3 Seven different shapes for "what color is this component?"

Every component that exposes color invented its own API:

| Component | Prop | Accepted values | Notes |
|---|---|---|---|
| [Text](base/src/components/designsystemet/Text/Text.tsx#L14) | `data-color` | all 20 token colors | The only complete one; see 1.5 |
| [Button](base/src/components/designsystemet/Button/Button.tsx#L19) | `color` | `primary \| neutral \| danger` | Plain prop, remapped to `data-color` internally |
| [Box](base/src/components/kystverket/Box/box.types.ts#L20-L35) | `color` | `primary \| neutral \| danger \| success \| warning \| info \| navy \| white`, optionally `family/variant` | Slash syntax; `navy` and `white` are not token colors |
| [ClickableCard](base/src/components/kystverket/ClickableCard/ClickableCard.types.ts#L3) | `color` | `neutral \| main` | `main` is remapped to `primary` |
| [Icon](base/src/components/kystverket/Icon/icon.tsx#L14) | `background` | all 20 token colors | Correctly typed from the token package, but the prop also sets text color |
| [SvgImage](base/src/components/kystverket/Image/svgImage.tsx#L57) | `data-color` | `primary \| info \| accent \| sand \| neutral \| white` | `white` is not a token color |
| [Stepper](base/src/components/kystverket/Stepper/stepper.tsx#L5) | `data-color` per step | `auto \| primary \| accent \| neutral \| success \| danger \| error \| info` | Ships both `danger` and `error` as separate values |
| [Alert](base/src/components/kystverket/Alert/alert.tsx#L9) | `level` **and** `data-color` | `info \| success \| warning \| error` / any | Two props for one concept; see 2.7 |

Four of these are named `data-color` (attribute-style) and three are named `color`/`background`
(prop-style), with no rule distinguishing them. Designsystemet itself only ever uses `data-color`.

Invented color names that do not exist in the token set: `navy`, `white`, `main`, `error`.
Each needs a translation step in the component, and none of them can be reached from
`styrbordSemanticColors` / `styrbordPaletteColors`, which AGENTS.md already mandates as the source
of truth for color unions.

### 1.4 `data-color` values that aren't colors

[Chip.colors.override.scss](base/src/components/designsystemet/Chip/Chip.colors.override.scss)
targets `[data-color='primary/subtle']` and `[data-color='neutral/subtle']` — a composite
`family/variant` value packed into the `data-color` attribute. Designsystemet has no such syntax; a
consumer writing `data-color="primary/subtle"` gets a value the rest of the cascade cannot resolve,
so every *other* `--ds-color-*` variable in that subtree falls back or breaks.

[Box](base/src/components/kystverket/Box/box.tsx#L145-L156) uses the same `family/variant` idea, but
as a prop value that is split and turned into a class name — so the two places that invented this
syntax don't even agree on where it lives.

### 1.5 `Text` and `Paragraph` bypass the cascade in ways that will surprise people

[Text.tsx](base/src/components/designsystemet/Text/Text.tsx#L38-L46) accepts all 20 colors, but
implements them by computing `var(--ds-color-${color}-text-${variant})` into an inline
`--sb-text-color` custom property. It never sets the `data-color` attribute. Two consequences:

- Only the `text-default` and `text-subtle` slots are reachable. `surface`, `border`, `base` are not.
- The color does not cascade to descendants, which is the whole point of `data-color` in Designsystemet.

[Paragraph.module.css](base/src/components/designsystemet/Paragraph/Paragraph.module.css#L14-L16)
hardcodes the subtle variant to neutral:

```css
:global(:where(.ds-paragraph))[data-color-subtle] {
  color: var(--ds-color-neutral-text-subtle);
}
```

So `<Paragraph data-color="danger" data-color-subtle>` renders grey, not subdued red. It should read
`var(--ds-color-text-subtle)` and let `data-color` decide the family.

There is also a specificity tie worth designing away rather than relying on: `.color` in
[Text.module.css](base/src/components/designsystemet/Text/Text.module.css) and
`:where(.ds-paragraph)[data-color-subtle]` in Paragraph both weigh (0,1,0) and sit in the same
`styrbord-modules` layer, so which one wins when `Text` is given both `data-color` and
`data-color-subtle` depends on bundle order.

Note that neither `data-color-subtle` nor `data-color-variant` exists in Designsystemet 1.21.1 —
both are Styrbord inventions. AGENTS.md already records the intent to migrate `data-color-subtle` →
`data-color-variant`; that migration is currently unstarted in `Paragraph` and `Text`.

### 1.6 Eleven token names that don't exist, across 17 reference sites

Sixteen of the 17 sites are in `base`, one in `kart`. These resolve to nothing. Where a fallback
is supplied the hardcoded fallback always wins, which is worse than an obvious break because it
silently ignores the theme, including dark mode.

| Token referenced | Location | Should be |
|---|---|---|
| `--ds-color-grey-70` | [stepper.module.css:32](base/src/components/kystverket/Stepper/stepper.module.css#L32) | `--ds-color-neutral-text-subtle` |
| `--ds-color-primary-12` | [summary.module.css:93](base/src/components/kystverket/Summary/summary.module.css#L93) | a `text-*` slot (v0 numeric scale) |
| `--ds-color-primary-11` | [summary.module.css:102](base/src/components/kystverket/Summary/summary.module.css#L102) | a `text-*` slot (v0 numeric scale) |
| `--ds-color-primary-border-hover` | [Footer.module.css:113](base/src/components/kystverket/Footer/Footer.module.css#L113) | no `border-hover` slot exists |
| `--ds-color-neutral-surface` | [SaksbehandlingShell.module.css:44](base/src/components/kystverket/SaksbehandlingShell/SaksbehandlingShell.module.css#L44) | `--ds-color-neutral-surface-default` |
| `--ds-color-neutral-background-subtle` | [richTextArea.module.css:33](base/src/components/kystverket/RichTextArea/richTextArea.module.css#L33), [Details.override.scss:7](base/src/components/designsystemet/Details/Details.override.scss#L7), [GeoJsonEditor.module.css:39](kart/src/components/GeoJsonEditor/GeoJsonEditor.module.css#L39) | `--ds-color-neutral-background-tinted` |
| `--ds-color-warning-text` | [linkEditor.module.css:50](base/src/components/kystverket/RichTextArea/components/LinkEditor/linkEditor.module.css#L50) | `--ds-color-warning-text-default` |
| `--ds-border-radius-small` / `-medium` / `-none` | [box.module.css:133-141](base/src/components/kystverket/Box/box.module.css#L133-L141), [Header.module.css:43](base/src/components/kystverket/Header/Header.module.css#L43) | `--ds-border-radius-sm` / `-md` / `0` |
| `--ds-font-size-sm` | [ClickableCard.module.css:96](base/src/components/kystverket/ClickableCard/ClickableCard.module.css#L96), [linkEditor.module.css](base/src/components/kystverket/RichTextArea/components/LinkEditor/linkEditor.module.css#L10) | `--ds-font-size-2` (or set `data-size`) |

Most of these look like leftovers from Designsystemet v0 naming. A CI check that greps `--ds-*`
references against the generated token CSS would prevent the class of bug entirely and is cheap to
add.

### 1.7 Hardcoded hex values, and what they do in dark mode

Dark mode is fully defined in the token layer and already used in a few places
(`[data-color-scheme='dark']` rules in Button and Chip, the `data-color-scheme="dark"` on the
FilePreviewer dialog, the Storybook decorator). Hardcoded colors defeat it:

- [ClickableCard.module.css:49-50](base/src/components/kystverket/ClickableCard/ClickableCard.module.css#L49-L50) — `--_bg: #fff`, `--_bg-hover: #f5fcff`
- [ExistingFilesDialog.module.css:34,81](base/src/components/kystverket/FileUploader/existingFilesDialog/ExistingFilesDialog.module.css#L34) — `#f5fcff`
- [FileRenderer.module.css:30-31](base/src/components/kystverket/FilePreviewer/renderer/FileRenderer.module.css#L30-L31) — `#1e1e1e` / `#d4d4d4`
- [SideSheet.module.css:128](base/src/components/kystverket/SideSheet/SideSheet.module.css#L128) and [FilePreviewer-thumbnail.module.css:26](base/src/components/kystverket/FilePreviewer/thumbnail/FilePreviewer-thumbnail.module.css#L26) — `rgba(0,0,0,…)` scrims
- [Avatar.module.scss:45](base/src/components/designsystemet/Avatar/Avatar.module.scss#L45) — `rgba(255,255,255,0.9)`

The scrims are arguably legitimate (a backdrop is a backdrop in both schemes); `#fff`, `#f5fcff` and
`#1e1e1e` are not.

Separately, [Icon](base/src/components/kystverket/Icon/icon.tsx#L36-L38) writes the *same*
`--icon-color` variable into both `color` and `background-color`:

```ts
style['color'] = `var(--icon-color, var(--ds-color-${background}-text-default))`;
style['background-color'] = `var(--icon-color, var(--ds-color-${background}-surface-tinted))`;
```

`--icon-color` is never defined anywhere in the repo, so today the fallbacks always win and it works.
The moment a consumer sets `--icon-color` to theme an icon, foreground and background become the same
color and the glyph disappears. These need to be two variables.

### 1.8 kart is outside the token system

`kart` has 68 hardcoded hex literals in TypeScript. The bulk is unavoidable — MapLibre paint
properties and terra-draw styling take hex strings, not CSS variables — but they are currently
scattered as inline literals across
[useTerraDraw.ts](kart/src/components/GeoJsonEditor/useTerraDraw.ts#L176-L290),
[GeoJsonEditor.tsx](kart/src/components/GeoJsonEditor/GeoJsonEditor.tsx#L490-L595),
[GeoJsonViewer.utils.ts](kart/src/components/GeoJsonViewer/GeoJsonViewer.utils.ts#L12-L59),
[compassMarker.ts](kart/src/utility/compassMarker.ts#L15-L30) and
[useMaplibreMap.ts](kart/src/hooks/useMaplibreMap.ts#L470-L504).

Several of them *are* brand colors (`#ff451f` = `accent.baseDefault`, `#000667` = `primary.baseDefault`,
`#df3c1b` = `accent.borderDefault`, `#ff7559` = `accent.baseHover`) — they were copied from the palette
by hand and will drift when the theme changes. `@kystverket/styrbord-tokens/colors` exports resolved
hex values (`colors.light.accent.baseDefault`) precisely for this case; kart should import from there
instead. Others (`#8B4513`, `#E8466A` in `useMaplibreMap.ts`) are off-palette entirely.

`SELECTED_COLOR = "#0062ba"` and the `#0062ba` in
[useDirectionalPoints.ts:73](kart/src/components/GeoJsonEditor/useDirectionalPoints.ts#L73) are the
same value duplicated in two files.

kart's CSS is in better shape — it uses `--ds-color-*` throughout — but always with a hex fallback
(`var(--ds-color-neutral-background-default, #fff)`), which silently masks the missing-token problems
from 1.6 and breaks dark mode when a token name is wrong.

---

## Part 2 — Prop alignment with Designsystemet

### 2.1 `data-*` attributes vs plain props: no rule

Designsystemet's contract is narrow and consistent: **`data-size`**, **`data-color`**, `variant`,
`width`. Styrbord uses both spellings with no discernible rule:

| Uses `data-size` | Uses `size` |
|---|---|
| Alert, Stepper, Avatar | Button, Paragraph, TextInput, TextArea, NumberInput, Dialog, SlotDialog, SideSheet, CardTitle, Icon, KyvSpinner, SvgImage, Typography, Box(`font.size`) |

`data-size` is the one that works, because it cascades: `<div data-size="sm">` shrinks every
Designsystemet descendant. A `size` prop consumed into a class name does not, so mixed trees end up
half-sized.

Same split on color, documented in 1.3.

### 2.2 `Button` renames every Designsystemet variant

[Button.tsx](base/src/components/designsystemet/Button/Button.tsx#L40-L61):

| Styrbord `variant` | Designsystemet `variant` |
|---|---|
| `filled` | `primary` |
| `outline` | `secondary` |
| `ghost` | `tertiary` |
| `subtle` | `primary` + class |
| `dashed` | `secondary` + class |

Arguments both ways: the Designsystemet names are genuinely confusing next to `data-color="primary"`,
and Styrbord adds two variants Designsystemet doesn't have. But the cost is that every Designsystemet
example, Storybook page and piece of documentation has to be mentally translated, and the wrapper has
to `Omit<DsButtonProps, 'variant' | 'data-color' | 'data-size' | 'disabled'>` — closing off the
escape hatch. Worth an explicit decision rather than leaving it as an accident.

`color` is also capped at `primary | neutral | danger` out of 20 available families, for no reason
visible in the CSS — [Button.module.scss](base/src/components/designsystemet/Button/Button.module.scss)
is written with family-less variables and would work with any of them.

### 2.3 `size` means three different things

1. **Designsystemet's `data-size` scale** — Avatar, Alert, Stepper, Icon, CardTitle.
2. **A `max-width` in pixels** — `TextInput`, `TextArea`, `NumberInput` via
   [InputSize](base/src/utils/input/input.ts): `2xs`=75px, `xs`=130px, `sm`=185px, `md`=350px,
   `lg`=31.25rem, plus `fit` and `full`. Designsystemet already has a `width?: 'full' | 'auto'` prop
   for exactly this, and `data-size` for the actual control size — so Styrbord's inputs currently
   have *no* way to express "small input", only "narrow input".
3. **A `max-width` in rem** — [Dialog](base/src/components/designsystemet/Dialog/Dialog.tsx#L12-L16):
   `sm`=25rem, `md`=40rem, `lg`=50rem, written to `--dsc-dialog-max-width`.

Three unrelated meanings behind one prop name, all typed `'sm' | 'md' | 'lg'`.

### 2.4 `border` means six different things

| Component | Type | Meaning |
|---|---|---|
| [Box](base/src/components/kystverket/Box/box.types.ts#L16) | `'sm' \| 'md' \| 'lg'` | border **width** |
| [Avatar](base/src/components/designsystemet/Avatar/Avatar.tsx#L20) | `'solid' \| 'dashed' \| 'dotted' \| 'double' \| 'none'` | border **style** |
| [PageHeading](base/src/components/kystverket/PageHeading/PageHeading.tsx#L13) | `boolean` | on/off |
| [Alert](base/src/components/kystverket/Alert/alert.tsx#L18) — `bordered` | `boolean` | on/off, defaults `true` |
| [Tag](base/src/components/designsystemet/Tag/Tag.tsx#L7) — `bordered` | `boolean` | on/off |
| [ClickableCard](base/src/components/kystverket/ClickableCard/ClickableCard.types.ts#L17) — `showBorder` | `boolean` | on/off |

Three different names (`border`, `bordered`, `showBorder`) for the boolean case alone.

Note that Designsystemet 1.21 already gives `Tag` a `variant?: 'default' | 'outline'` — Styrbord's
`bordered` boolean duplicates a prop that exists upstream, and the two can be set contradictorily.

### 2.5 Boolean flags where Designsystemet uses `variant`

[Tag](base/src/components/designsystemet/Tag/Tag.tsx#L17-L34) has `bordered`, `rounded` and
`plainBackground` — three booleans, eight combinations, of which the code only meaningfully handles a
few (`plainBackground` silently implies `bordered`). Designsystemet's answer is a single `variant`
enum. `Alert` has the same shape (`bordered`, `rounded`).

### 2.6 Props that shadow reserved names

- [StepItem.style](base/src/components/kystverket/Stepper/stepper.tsx#L13) — `'auto' | 'filled' |
  'subtle' | 'outline'`. It's a data field rather than a DOM prop so it doesn't break today, but
  `style` reads as CSS everywhere else in React. This is `variant`.
- [Box.color](base/src/components/kystverket/Box/box.types.ts#L35) — sets `background`, `color` *and*
  `--border-color`. Named after one of the three things it does.
- [Icon.background](base/src/components/kystverket/Icon/icon.tsx#L14) — sets both background and
  foreground.
- [Text](base/src/components/designsystemet/Text/Text.tsx#L13) has to
  `Omit<HTMLAttributes<HTMLSpanElement>, 'color'>` to make room for its own typing.

### 2.7 Duplicate props for one concept

- [Alert](base/src/components/kystverket/Alert/alert.tsx#L33): `level` (`info | success | warning |
  error`) and `data-color` both feed the same attribute, with `data-color` winning and `error`
  silently remapped to `danger`. Designsystemet's `Alert` is `data-color`-only.
- [Paragraph](base/src/components/designsystemet/Paragraph/Paragraph.tsx#L7-L9): `strong` (deprecated)
  and `weight`. Deprecation is already noted, but the deprecation text says
  `Use \`fontWeight="medium"\``, naming a prop that doesn't exist — the prop is `weight`.
  The same wrong hint appears in
  [typography.tsx](base/src/components/kystverket/Typography/typography.tsx) and
  [typography.util.ts](base/src/components/kystverket/Typography/typography.util.ts).
- `TypographyColor = 'accent' | 'neutral'` in
  [typography.util.ts:8](base/src/components/kystverket/Typography/typography.util.ts#L7) is declared,
  accepted by `BuildTypographyProps`, and then never read by `buildTypographyClasses` — dead API
  surface.

---

## Proposed target conventions

A short rule set, so the rework has something to converge on:

| Concept | Convention | Rationale |
|---|---|---|
| Color family | `data-color`, typed from `styrbordSemanticColors` + `styrbordPaletteColors` | Matches Designsystemet, cascades, already mandated by AGENTS.md |
| Color emphasis | `data-color-variant` (`default \| tinted \| subtle \| strong`) | Replaces `data-color-subtle`, `plainBackground`, the `family/variant` slash syntax, and `Box`'s `color="x/y"` |
| Component CSS | family-less `--ds-color-{slot}-{modifier}` only | One rule works for all 20 families; dark mode comes free |
| Size | `data-size` | Cascades; `sm \| md \| lg` per Designsystemet |
| Width | `width` | Designsystemet already defines `'full' \| 'auto'` on `Select`; extend for the input set |
| Shape variant | `variant`, one enum | Replaces stacked booleans (`bordered`, `rounded`, `showBorder`, `plainBackground`) |
| Raw hex | only in kart's map paint layers, imported from `@kystverket/styrbord-tokens/colors` | Never inline in CSS |

---

## Suggested sequencing

The value is front-loaded: steps 1–2 are non-breaking and fix real bugs.

**1. Non-breaking fixes** — no API change, no major version. **Done — see
[What has been fixed](#what-has-been-fixed).**

**2. Convert component CSS to the cascade** — mostly non-breaking, and the enabler for everything else.
Rewrite family-hardcoded rules to family-less ones, starting with the ones that already have a color
API (`Tag`, `Box`, `ClickableCard`, `Stepper`, `Alert`). Widening `data-color` support from 2–8
families to all 20 is additive. Delete the `[data-color='primary/subtle']` rules (1.4).

**3. Unify the color API** — breaking.
One `data-color` + `data-color-variant` pair everywhere. Retire `navy`, `white`, `main`, `error`.
Make `Text` set the attribute rather than an inline custom property.

**4. Unify size/width/variant** — breaking.
`size` → `data-size`; the input `size` prop → `width`; stacked booleans → `variant`;
`StepItem.style` → `StepItem.variant`.

**5. Decide on `Button`** — breaking if changed.
Either adopt Designsystemet's `primary | secondary | tertiary` and keep `subtle`/`dashed` as
additions, or keep the renaming and document it as a deliberate, permanent divergence. Do not leave
it undecided.

**6. kart color extraction** — non-breaking. **Done — see
[What has been fixed](#what-has-been-fixed).**

Steps 3–5 are all breaking. Since release-please versions `base` and `kart` independently and a
`feat!` / `BREAKING CHANGE:` footer triggers a major bump, they are best landed as one coordinated
2.0 for `base` with a codemod or migration table, rather than as a sequence of majors.

---

## What has been fixed

### Step 1 — non-breaking fixes

No public prop was added, removed or renamed, so this is `fix:` territory rather than
a major bump. Several of these *do* change rendering — that is the point: the declarations they
replace were invalid and being dropped silently by the browser.

#### Dead token references — all 17 sites corrected

| Was | Now | Where |
|---|---|---|
| `--ds-color-grey-70` | `--ds-color-neutral-text-subtle` | Stepper |
| `--ds-color-primary-12` / `-11` | `--ds-color-primary-text-default` / `-text-subtle` | Summary edit button + hover |
| `--ds-color-primary-border-hover` | `--ds-color-primary-base-contrast-default` | Footer select hover |
| `--ds-color-neutral-surface` | `--ds-color-neutral-surface-default` | SaksbehandlingShell |
| `--ds-color-neutral-background-subtle` | `--ds-color-neutral-background-tinted` | RichTextArea, Details, GeoJsonEditor |
| `--ds-color-warning-text` | `--ds-color-warning-text-default` | LinkEditor |
| `--ds-border-radius-small` / `-medium` / `-none` | `--ds-border-radius-sm` / `-md` / `0` | Box, Header |
| `--ds-font-size-sm` | `--ds-font-size-2` | ClickableCard, LinkEditor |

Visible consequences worth reviewing in Storybook: `Box` `radius="sm"` and `radius="md"` previously
did nothing at all (`lg`/`xl` worked, because only those two used correct names) and now round their
corners. The `Stepper` step label and the `Summary` edit button previously inherited their color and
now take the intended one.

#### Hardcoded hex replaced

- `ClickableCard`, `primary` + `default` — the only one of the four colour/variant blocks not using
  tokens. Now `--ds-color-primary-surface-default` / `--ds-color-primary-background-tinted`. The
  background is byte-identical (`#fff`); the hover shifts slightly, `#f5fcff` → `#e6f9ff`, to match
  what the neutral block beside it already does.
- `ExistingFilesDialog` — both `#f5fcff` (selected card, hovered card) → `--ds-color-primary-background-tinted`.
- `Avatar` checked overlay — `rgba(255,255,255,0.9)` →
  `color-mix(in srgb, var(--ds-color-neutral-surface-default) 90%, transparent)`. Identical in light
  mode, follows the scheme in dark. Designsystemet's own CSS already ships `color-mix`, so this adds
  no new browser requirement.
- `SideSheet` and `KyvSpinner` — dropped their dead hex fallbacks. `base` always loads its own token
  CSS from `main.ts`, so the fallbacks could never apply; the `KyvSpinner` one claimed `#005b99` for
  `--ds-color-accent-base-default`, which is actually `#FF451F`.

#### Two deviations from the plan as written

**`Paragraph`'s subtle rule was not simply swapped to `--ds-color-text-subtle`.** That variable is
defined on `:root` as **primary**, not neutral, so the swap this document originally proposed would
have turned every plain `<Paragraph data-color-subtle>` from grey to navy. The general rule stays on
neutral and a second, more specific rule follows `data-color` when one is set on the element:

```css
:global(:where(.ds-paragraph))[data-color-subtle] {
  color: var(--ds-color-neutral-text-subtle);
}
:global(:where(.ds-paragraph))[data-color][data-color-subtle] {
  color: var(--ds-color-text-subtle);
}
```

This fixes the reported case — `<Paragraph data-color="danger" data-color-subtle>` is now subdued
red — without touching the default. It still does not follow an *ancestor's* `data-color`; that
needs the cascade work in step 2.

**`FileRenderer`'s `#1e1e1e` / `#d4d4d4` were left alone.** This document listed them as hex that
should become tokens. On inspection they are a deliberate fixed-appearance code viewer (monospace
stack, VS Code's background colour), and `FileRenderer` is rendered both inside the
`data-color-scheme="dark"` dialog *and* in the thumbnail outside it — so tokenising would make the
same component light in one place and dark in the other. Treated as a scrim-style exception.
Reclassify it if the team disagrees.

#### Other

- `Icon` — the background now reads `--icon-background-color` instead of sharing `--icon-color` with
  the foreground. No behaviour change today (neither variable is set anywhere); it removes the trap.
- `Paragraph` — the `@deprecated` hint on `strong` now names `weight="medium"`, the prop that exists.
- `TypographyColor` removed, along with `color` and `margin` on `BuildTypographyProps`. All three
  were declared and never read, and none was exported from `main.ts`.
- **New:** `scripts/check-design-tokens.mjs`, wired up as `npm run tokens:check` and as a step in
  `.github/workflows/lint.yml`. It resolves every `var(--ds-*)` in `base/src` and `kart/src` against
  the generated token CSS and fails with `file:line` for anything unknown. Template-literal names
  (`var(--ds-color-${family}-text-default)`) are skipped as unresolvable. Currently: 490 tokens
  defined, zero bad references.

Not done at the time, deliberately: the hex fallbacks in kart's CSS (`var(--ds-color-…, #c9c9c9)`).
Removing them was step 6, and they are gone now — see below.

### Step 6 — kart colour extraction

Non-breaking in the API sense: no export was added, removed or renamed in `main.ts`, and every
documented default keeps its current value bar one (see *Visible changes* below). `fix(kart):`.

**New module: [`kart/src/utility/mapColors.ts`](kart/src/utility/mapColors.ts).** Every colour kart
paints onto a map now lives there, grouped by what it is for — drawing, viewing, labels, compass
markers — with an explicitly marked off-palette section at the bottom. Map colours can't ride the
`--ds-color-*` cascade (MapLibre paint properties and terra-draw styles take colour strings, not CSS
variables), so the brand ones are read from `@kystverket/styrbord-tokens/colors`, light scheme. Map
tiles are light whatever colour scheme surrounds them, so the geometry drawn on top follows the
tiles, not the page.

Ten hand-copied brand colours now resolve from tokens, and all of them resolve to exactly the value
they replaced:

| Was | Now |
|---|---|
| `#ff451f` (22 sites) | `accent.baseDefault` → `DRAW_COLOR` |
| `#000667` (16) | `primary.baseDefault` → `VIEW_LINE_COLOR`, `COMPASS_BORDER_COLOR` |
| `#ffffff` / `white` (15) | `neutral.backgroundDefault` → `DRAW_CONTRAST_COLOR`, `LABEL_HALO_COLOR`, `COMPASS_FACE_COLOR` |
| `#df3c1b` (8) | `accent.borderDefault` → `VIEW_POINT_COLOR`, `DRAW_SELECTION_POINT_COLOR`, `COMPASS_NEEDLE_COLOR` |
| `#ff7559` | `accent.baseHover` → `DRAW_MIDPOINT_COLOR` |
| `rgba(0, 6, 103, 0.2)` | `withAlpha(primary.baseDefault, 0.2)` → `VIEW_FILL_COLOR` |

**`SELECTED_COLOR` deduplicated.** The `#0062ba` that was written out in both
`GeoJsonViewer.utils.ts` and `useDirectionalPoints.ts` is now one constant, and the two `rgba()`
strings derived from it (`HOVER_COLOR` at 0.4, `SELECTED_GLOW_COLOR` at 0.5, plus the `box-shadow`
in `useDirectionalPoints`) are computed from it via `withAlpha` rather than hand-written. Change the
blue in one place and all four follow.

**All 48 hex fallbacks removed from kart's CSS** (`var(--ds-color-neutral-background-default, #fff)`
→ `var(--ds-color-neutral-background-default)`), across `GeoJsonEditor`, `GeoJsonViewerHoverPopup`,
`LayerToggle`, `MapCenterAction` and `MapPicker`. They were dead — `@kystverket/styrbord` always
loads the token CSS — and they were actively harmful, because a fallback hides a wrong token name
instead of letting it break visibly. `npm run tokens:check` already guarantees the names are valid.

**Visible change, one:** map feature labels drew in `#1a1a1a` and now draw in
`neutral.textDefault` = `#2a2b35`. Both are near-black; nothing else moved.

**No new runtime dependency.** kart's vite config lists `@kystverket/styrbord-tokens` as external,
but that exact-string match doesn't cover the `/colors` subpath, so rollup inlines the resolved hex
values into `dist/style.js` at build time. Verified: the built bundle contains no import of the
tokens package.

#### Left alone, deliberately

- **The easter-egg triangles** in [useMaplibreMap.ts](kart/src/hooks/useMaplibreMap.ts#L470) —
  `#8B4513`/`#5C2D0A` and `#E8466A`/`#A1203E`. 1.8 lists them as off-palette, which they are, but
  they are decorations with specific intended colours, not theme colours, and pulling them into a
  "map colours" module would misrepresent what they are. Same treatment as `FileRenderer` in step 1.
- **The off-palette selection blue `#0062ba`.** Centralised and documented, but not retargeted.
  The nearest token is `info.baseDefault` (`#0a71c0`); switching would visibly change every hover
  and selection highlight, which is a design decision, not a refactor. Likewise `#ff0000`
  (terra-draw selected-vertex outline), `#b0b0b0` (muted compass half) and `#088` (vector-tile
  fallback).
- **Story files.** The `#f5f5f5` container backgrounds and the illustrative per-feature colours in
  `GeoJsonViewer.stories.tsx` are demo fixtures, not library output.

`npm run lint:check`, `npm run pretty:check`, `npm run tokens:check` and `npm run build` all pass
(both workspaces).

---

## Open questions for the team

1. **Button variants** — adopt Designsystemet's names, or formalise the divergence? (2.2)
2. **Palette colors in components** — should `data-color="lyng"` work on `Button`, `Tag`, `Box`, or
   are the 10 palette colors intended for illustration and data visualisation only? This decides how
   wide the unions get.
3. **Dark mode** — is it a supported target or an accident of the token layer? The answer changes how
   much of 1.7 matters.
4. **Input `size`** — is anyone depending on the pixel widths (`2xs`=75px etc.), or can the inputs move
   to `width` + `data-size` cleanly?
5. **Deprecation window** — does Styrbord keep old props working alongside new ones for a release, or
   is a clean 2.0 with a migration guide acceptable? Consumer count decides this.
