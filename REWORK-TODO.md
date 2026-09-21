# Rework TODO: open issues by component

Working checklist derived from [REWORK-FINDINGS.md](REWORK-FINDINGS.md). Section references
(§1.2, §2.4, …) point back to the analysis there.

**Done already:** step 1 (dead token names, hardcoded hex, `Icon` variable collision, `tokens:check`
CI) and step 6 (kart colour extraction into `mapColors.ts`). Step 5 is a settled decision —
`Button.variant` keeps `filled | outline | ghost | subtle | dashed`, permanently.

**Still open:** step 2 (convert component CSS to the `data-color` cascade — non-breaking), step 3
(unify the colour API — breaking), step 4 (unify size/width/variant — breaking).

Counts below are family-hardcoded `--ds-color-{family}-*` references, i.e. the size of the step 2
conversion for that file.

---

## base — `designsystemet/`

### Tag — [Tag.module.css](base/src/components/designsystemet/Tag/Tag.module.css), [Tag.tsx](base/src/components/designsystemet/Tag/Tag.tsx)

- [x] Seven `[data-color='…']` rules set a single border colour. One
      `--tag-border-color: var(--ds-color-border-subtle)` covers all 20 families (§1.2)
- [x] 9 family-hardcoded tokens (§1.2)
- [x] `bordered` / `rounded` / `plainBackground` — three booleans, eight combinations, only a few
      handled; `plainBackground` silently implies `bordered`. Collapse to one `variant` (§2.5)
- [x] `bordered` duplicates Designsystemet 1.21's own `variant?: 'default' | 'outline'`, and the two
      can be set contradictorily (§2.4)

### Chip — [Chip.colors.override.scss](base/src/components/designsystemet/Chip/Chip.colors.override.scss)

- [x] Delete the `[data-color='primary/subtle']` and `[data-color='neutral/subtle']` rules. The
      slash syntax does not exist in Designsystemet and breaks every other `--ds-color-*` in the
      subtree (§1.4)
- [x] Update the three call sites: [Chip.stories.tsx:17](base/src/components/designsystemet/Chip/Chip.stories.tsx#L17)
      and [richTextArea.stories.tsx:152-153](base/src/components/kystverket/RichTextArea/richTextArea.stories.tsx#L152-L153)
- [x] 8 family-hardcoded tokens (§1.2)

### Text — [Text.tsx](base/src/components/designsystemet/Text/Text.tsx), [Text.module.css](base/src/components/designsystemet/Text/Text.module.css)

- [x] Set the `data-color` attribute instead of computing `var(--ds-color-${color}-text-${variant})`
      into an inline `--sb-text-color`. Today only the `text-default` and `text-subtle` slots are
      reachable and the colour does not cascade to descendants (§1.5)
- [x] Specificity tie: `.color` here and `:where(.ds-paragraph)[data-color-subtle]` in Paragraph both
      weigh (0,1,0) in the same `styrbord-modules` layer — the winner depends on bundle order.
      Design it away rather than relying on it (§1.5)
- [x] `data-color-subtle` → `data-color-variant` (§1.5)
- [x] Once `data-color` is a real attribute, the `Omit<HTMLAttributes<HTMLSpanElement>, 'color'>`
      should be removable (§2.6)

### Paragraph — [Paragraph.tsx](base/src/components/designsystemet/Paragraph/Paragraph.tsx), [Paragraph.module.css](base/src/components/designsystemet/Paragraph/Paragraph.module.css)

- [x] `data-color-subtle` → `data-color-variant`. Step 1 fixed only the family bug on the element
      itself; the rule still does not follow an _ancestor's_ `data-color` (§1.5)

### Button — [Button.tsx](base/src/components/designsystemet/Button/Button.tsx), [Button.module.scss](base/src/components/designsystemet/Button/Button.module.scss)

- [x] `color` is capped at `primary | neutral | danger` out of 20 families, for no reason visible in
      the CSS — the SCSS is already written with family-less variables (§2.2, second half)
- `variant` is settled. Do not align it with upstream; see _Decisions_ in the findings.

### Avatar — [Avatar.module.scss](base/src/components/designsystemet/Avatar/Avatar.module.scss), [Avatar.tsx](base/src/components/designsystemet/Avatar/Avatar.tsx)

- [x] 30 family-hardcoded tokens — the worst file in `designsystemet/` (§1.2)
- [x] `border: 'solid' | 'dashed' | 'dotted' | 'double' | 'none'` is a border _style_, while Box's
      `border` is a _width_ and four other components use booleans (§2.4)

### Dialog — [Dialog.tsx](base/src/components/designsystemet/Dialog/Dialog.tsx)

- [x] `size` is a rem `max-width` (`sm`=25rem, `md`=40rem, `lg`=50rem) written to
      `--dsc-dialog-max-width`, not a `data-size` (§2.3)

### Details, Dropdown

- [x] [Details.override.scss](base/src/components/designsystemet/Details/Details.override.scss) — 8
      family-hardcoded tokens (§1.2)
- [ ] [Dropdown.override.scss](base/src/components/designsystemet/Dropdown/Dropdown.override.scss) — 5 (§1.2)

---

## base — `kystverket/`

### Box — [box.types.ts](base/src/components/kystverket/Box/box.types.ts), [box.tsx](base/src/components/kystverket/Box/box.tsx), [box.colors.module.css](base/src/components/kystverket/Box/box.colors.module.css)

- [ ] **78 family-hardcoded tokens** — the single largest conversion site in the repo (§1.2)
- [ ] `color="family/variant"` slash syntax, split and turned into a class name. Same invention as
      Chip's, in a different place; neither agrees with the other (§1.4)
- [ ] Retire `navy` and `white` — neither is a token colour (§1.3)
- [ ] `color` sets `background`, `color` _and_ `--border-color`; it is named after one of the three (§2.6)
- [ ] `border: 'sm' | 'md' | 'lg'` is a border _width_ (§2.4)
- [ ] `font.size` is a plain prop, not `data-size` (§2.1)

### ClickableCard — [ClickableCard.types.ts](base/src/components/kystverket/ClickableCard/ClickableCard.types.ts), [ClickableCard.module.css](base/src/components/kystverket/ClickableCard/ClickableCard.module.css)

- [ ] `color: 'neutral' | 'main'` — `main` is remapped to `primary` and is not a token name (§1.3)
- [ ] 16 family-hardcoded tokens (§1.2)
- [ ] `showBorder` boolean — third spelling of the same concept (§2.4)

### Stepper — [stepper.tsx](base/src/components/kystverket/Stepper/stepper.tsx), [stepper.module.css](base/src/components/kystverket/Stepper/stepper.module.css)

- [ ] Per-step `data-color` ships both `danger` and `error` as separate values (§1.3)
- [ ] `StepItem.style: 'auto' | 'filled' | 'subtle' | 'outline'` shadows the CSS `style` prop. This
      is `variant` (§2.6)
- [ ] 4 family-hardcoded tokens (§1.2)

### Alert — [alert.tsx](base/src/components/kystverket/Alert/alert.tsx)

- [ ] `level` (`info | success | warning | error`) and `data-color` both feed the same attribute,
      `data-color` wins, `error` is silently remapped to `danger`. Designsystemet's Alert is
      `data-color`-only (§2.7)
- [ ] `bordered` (defaults `true`) and `rounded` booleans → one `variant` (§2.5)

### Icon — [icon.tsx](base/src/components/kystverket/Icon/icon.tsx)

- [ ] `background` sets both background _and_ foreground; it is named after one of the two (§2.6)
- [ ] `size` is a plain prop, not `data-size` (§2.1)

### SvgImage — [svgImage.tsx](base/src/components/kystverket/Image/svgImage.tsx), [svgImage.module.css](base/src/components/kystverket/Image/svgImage.module.css)

- [ ] `data-color` accepts only 6 values, one of which (`white`) is not a token colour (§1.3)
- [ ] 14 family-hardcoded tokens (§1.2)
- [ ] `size` is a plain prop (§2.1)

### Typography — [typography.tsx](base/src/components/kystverket/Typography/typography.tsx), [typography.util.ts](base/src/components/kystverket/Typography/typography.util.ts)

- [ ] The `@deprecated` hints still say `Use \`fontWeight="medium"\``; the prop is`weight`. Step 1
    fixed this in`Paragraph` only (§2.7)
- [ ] `size` is a plain prop (§2.1)

### PageHeading — [PageHeading.tsx](base/src/components/kystverket/PageHeading/PageHeading.tsx)

- [ ] `border: boolean` — fourth spelling of the border concept (§2.4)

### SideSheet — [SideSheet.module.css](base/src/components/kystverket/SideSheet/SideSheet.module.css)

- [ ] 5 family-hardcoded tokens (§1.2)
- [ ] `size` is a plain prop (§2.1)
- The `rgba(0,0,0,…)` scrim stays — a backdrop is a backdrop in both schemes (§1.7)

### Cascade conversion only (§1.2)

- [ ] [summary.module.css](base/src/components/kystverket/Summary/summary.module.css) — 20
- [ ] [Footer.module.css](base/src/components/kystverket/Footer/Footer.module.css) — 12
- [ ] [richTextArea.module.css](base/src/components/kystverket/RichTextArea/richTextArea.module.css) — 12,
      plus [toolbar.module.css](base/src/components/kystverket/RichTextArea/components/Toolbar/toolbar.module.css) — 6
      and [linkEditor.module.css](base/src/components/kystverket/RichTextArea/components/LinkEditor/linkEditor.module.css) — 5
- [ ] FileUploader — [ExistingFilesDialog.module.css](base/src/components/kystverket/FileUploader/existingFilesDialog/ExistingFilesDialog.module.css) — 8,
      [FileUploaderItem.module.css](base/src/components/kystverket/FileUploader/item/FileUploaderItem.module.css) — 7,
      [FileUploadActions.module.css](base/src/components/kystverket/FileUploader/fileUploadActions/FileUploadActions.module.css) — 7
- [ ] [SaksbehandlingShell.module.css](base/src/components/kystverket/SaksbehandlingShell/SaksbehandlingShell.module.css) — 5
- [ ] [PickerInput.module.css](base/src/components/kystverket/DateAndTimePickers/PickerInput.module.css) — 5
- [ ] [FilePreviewer-thumbnail.module.css](base/src/components/kystverket/FilePreviewer/thumbnail/FilePreviewer-thumbnail.module.css) — 5

---

## base — `utils/`

### Input sizing — [utils/input/input.ts](base/src/utils/input/input.ts), TextInput, TextArea, NumberInput

- [ ] `InputSize` is a pixel `max-width` (`2xs`=75px, `xs`=130px, `sm`=185px, `md`=350px,
      `lg`=31.25rem, plus `fit` and `full`), so the inputs currently have **no way to express
      "small input"** — only "narrow input". Move to `width` (Designsystemet already defines
      `'full' | 'auto'` on `Select`) plus `data-size` for the control size (§2.3)
- [ ] All three use a plain `size` prop (§2.1)
- Blocked on open question 3 below.

---

## kart

Colour extraction is done (`mapColors.ts`) and the CSS fallbacks are gone. What remains is the same
§1.2 cascade conversion:

- [ ] [LayerToggle.module.css](kart/src/components/LayerToggle/LayerToggle.module.css) — 18
- [ ] [GeoJsonEditor.module.css](kart/src/components/GeoJsonEditor/GeoJsonEditor.module.css) — 13
- [ ] [GeoJsonViewerHoverPopup.module.css](kart/src/components/GeoJsonViewer/GeoJsonViewerHoverPopup.module.css) — 5
- [ ] [MapCenterAction.module.css](kart/src/components/shared/MapCenterAction.module.css) — 4

Deliberately closed, do not reopen without a design decision: the easter-egg triangle colours in
`useMaplibreMap.ts`, the off-palette selection blue `#0062ba`, and the story-file demo fixtures.

---

## Cross-cutting

- [ ] **`size` → `data-size`.** Only Alert, Stepper and Avatar use the cascading attribute. Fourteen
      components consume `size` into a class name, so mixed trees end up half-sized (§2.1)
- [ ] **Retire the non-token colour names:** `navy` and `white` (Box, SvgImage), `main`
      (ClickableCard), `error` (Alert, Stepper). None can be reached from `styrbordSemanticColors` /
      `styrbordPaletteColors`, which AGENTS.md already mandates as the source of truth (§1.3)
- [ ] **Settle on `data-color` over `color`/`background` as the prop spelling** — four components use
      the attribute, three use a plain prop, with no rule distinguishing them. Designsystemet only
      ever uses `data-color` (§1.3, §2.1)

---

## Open questions that gate this work

1. **Palette colours in components** — should `data-color="lyng"` work on `Button`, `Tag`, `Box`, or
   are the 10 palette colours for illustration and data visualisation only? Decides how wide every
   colour union gets, so it blocks most of step 3.
2. **Dark mode** — supported target, or an accident of the token layer? Decides how much of §1.7 matters.
3. **Input `size`** — is anyone depending on the pixel widths? Blocks the `width` + `data-size` move.
4. **Deprecation window** — old props kept working alongside new ones for a release, or a clean 2.0
   with a migration guide? Consumer count decides this.

Steps 3 and 4 are both breaking. release-please versions `base` and `kart` independently, so they are
best landed as one coordinated 2.0 for `base` rather than as a sequence of majors.
