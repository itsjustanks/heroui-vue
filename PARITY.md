# Parity tracker

Per-component parity status of **heroui-vue** against **HeroUI v3 React**
(`@heroui/react` 3.0.5). This is the source-of-truth checklist; the README
carries a summary and the playground surfaces these statuses live.

**Last full sweep:** 2026-05-22. **Fixed since:** tabs; then tooltip, calendar,
range-calendar, accordion, breadcrumb, toolbar, slider, and the date/time
placeholder colour.

## How parity is measured

| Check | Tool | Current result |
|---|---|---|
| Compound API — component + sub-part names match HeroUI source | `node scripts/audit-parity.mjs` | ✅ 0 divergent (except the legacy `compat` shim) |
| Demo structure — Vue & React demos use the same JSX tags | `node scripts/audit-parity.mjs` | ✅ 0 divergent |
| Variant props — Vue props expose every upstream style variant key | `npm run check:variant-props` | ✅ all exposed |
| Rendered DOM — Vue pane vs React pane `data-slot` sequence | `node playground/render-audit.mjs` | run per change |
| **Visual** — side-by-side screenshot comparison | `node playground/shot.mjs` + review | **see below** |

The API and structural checks pass cleanly. Every visual item from the
2026-05-22 sweep is now resolved.

## Summary

| | Count |
|---|---|
| ✅ Pixel-match | 63 |
| 🟡 Minor polish | 0 |
| 🔴 Broken | 0 |
| 💥 Crash | 0 |
| **Total demoed** | **63** |

## Example coverage

The playground now tracks upstream docs examples as first-class parity targets.
The inventory is generated from:

- React source components:
  `/Users/ankit/Downloads/heroui-3/packages/react/src/components`
- React component docs:
  `/Users/ankit/Downloads/heroui-3/apps/docs/content/docs/react/components`
- React docs demo registry:
  `/Users/ankit/Downloads/heroui-3/apps/docs/src/demos/index.ts`

Current generated inventory:

| | Count |
|---|---:|
| Standalone docs components | 71 |
| Registered docs examples | 594 |
| Ported playground examples | 255 |

The first ported example batch covers every registered docs example for:
accordion, avatar, badge, breadcrumbs, button, and card. The highest-traffic
flat demos for form controls and navigation are now slug-aware, so their
variant/size/disabled/full-width examples apply the selected options in both
the Vue and React panes. Remaining examples stay unported until they have a
specific or slug-aware demo instead of a generic fallback.

## Status legend

- ✅ **Match** — visually faithful to HeroUI v3 in its resting state.
- 🟡 **Minor** — small, low-impact divergence (colour, spacing, a missing rule).
- 🔴 **Broken** — clearly wrong; needs a real fix.
- 💥 **Crash** — the component or its demo errors at runtime.

> Note: the sweep compares **resting states**. Interactive states (open
> overlays, hover, focus, selected) still need a dedicated pass — see
> [Open follow-ups](#open-follow-ups).

## Components

### Buttons & actions

| Component | Status | Notes |
|---|---|---|
| button | ✅ | |
| button-group | ✅ | |
| toggle-button | ✅ | |
| toggle-button-group | ✅ | |
| close-button | ✅ | |
| link | ✅ | |

### Inputs & forms

| Component | Status | Notes |
|---|---|---|
| input | ✅ | |
| textarea | ✅ | |
| textfield | ✅ | |
| number-field | ✅ | |
| checkbox | ✅ | |
| checkbox-group | ✅ | |
| radio-group | ✅ | |
| switch | ✅ | |
| switch-group | ✅ | |
| select | ✅ | |
| combo-box | ✅ | Popover width bridged to `--reka-combobox-trigger-width` so the dropdown matches the input. |
| input-group | ✅ | |
| input-otp | ✅ | |
| tag-group | ✅ | |
| color-picker | ✅ | |
| label | ✅ | |
| description | ✅ | |
| form | ✅ | |
| slider | ✅ | Thumb centring bridged in `theme.css` — reka only centres on the position axis, HeroUI's `top:50%` needs the perpendicular `translateY(-50%)`. |

### Date & time

| Component | Status | Notes |
|---|---|---|
| calendar | ✅ | Day numbers render — reka-ui's cell-trigger slot exposes the label as `dayValue`, not `formattedDate`. |
| range-calendar | ✅ | `weekdayFormat="short"` headers, `dayValue` slot fix, and `theme.css` bridges for reka's `data-today`/`data-outside-view`. |
| date-field | ✅ | Placeholder colour bridged in `theme.css` (reka emits `data-placeholder=""`; HeroUI keys off `="true"`). |
| date-picker | ✅ | Opens correctly — `DatePicker.Root` renders a real `.date-picker` element (reka's root is element-less) so the trigger's `pointer-events-auto` rule applies. Shared placeholder bridge. |
| date-range-picker | ✅ | Opens correctly — same `.date-range-picker` wrapper fix as date-picker. Shared placeholder bridge. |
| time-field | ✅ | Shared date-segment placeholder bridge. |

> The four date/time items shared one root cause — the empty date-segment
> placeholder colour — fixed once with a `theme.css` bridge rule.

### Overlays

| Component | Status | Notes |
|---|---|---|
| modal | ✅ | Resting (trigger) state matches; open-state pass pending. |
| drawer | ✅ | Resting state matches; open-state pass pending. |
| popover | ✅ | Resting state matches; open-state pass pending. |
| dropdown | ✅ | Resting state matches; open-state pass pending. |
| alert-dialog | ✅ | Resting state matches; open-state pass pending. |
| tooltip | ✅ | `TooltipRoot` auto-provides reka's `TooltipProvider` when none is in the tree, so a bare `<Tooltip>` works standalone like upstream. |

### Navigation

| Component | Status | Notes |
|---|---|---|
| pagination | ✅ | |
| tabs | ✅ | **Fixed 2026-05-22.** Now a proper segmented-control track with a visible active segment + panel content — matches HeroUI's docs. Three fixes: auto-select the first tab (reka-ui doesn't; HeroUI does), emit `data-orientation` on the list (reka-ui only emits `aria-orientation`), and reveal the per-tab indicator only under the active tab (no React-Aria `SelectionIndicator` in reka). Note: the playground's React pane shows the indicator at `opacity:0` — a React-Aria `SelectionIndicator` init quirk — so the Vue pane is the accurate reference here. |
| breadcrumbs | ✅ | `Breadcrumbs` auto-marks the last crumb current — no trailing separator, `data-current` link styling applied. |
| toolbar | ✅ | A bare `Separator` inside the toolbar flips to vertical via toolbar context, matching React-Aria. |

### Data display

| Component | Status | Notes |
|---|---|---|
| avatar | ✅ | |
| badge | ✅ | |
| card | ✅ | |
| surface | ✅ | |
| header | ✅ | |
| chip | ✅ | |
| disclosure | ✅ | |
| table | ✅ | |
| list-box | ✅ | Selected-item checkmark fixed — indicator reads reka's live `ListboxItem` context. |
| kbd | ✅ | |
| separator | ✅ | |
| scroll-shadow | ✅ | |
| typography | ✅ | |
| accordion | ✅ | Single explicit `Accordion.Indicator` (no auto-chevron); chevron rotates and the panel height animates via reka `data-state` keyframes. Icons now forward `data-*` attrs. |

### Feedback

| Component | Status | Notes |
|---|---|---|
| alert | ✅ | |
| empty-state | ✅ | |
| progress-bar | ✅ | |
| progress-circle | ✅ | |
| meter | ✅ | |
| spinner | ✅ | |
| skeleton | ✅ | |
| toast | ✅ | vue-sonner runs `unstyled` so HeroUI's `.toast` BEM controls the design; `data-type` bridged to HeroUI's status colours. |

## Fix checklist

All items below are fixed and verified against the React pane in the playground.

- [x] **tabs** — segmented-control track + active segment + render the active
  panel. *Done 2026-05-22.*
- [x] **tooltip** — auto-provide reka's `TooltipProvider`; no injection crash.
- [x] **calendar** — render day numbers (read reka's `dayValue` slot prop).
- [x] **accordion** — single, right-aligned chevron (no auto-chevron).
- [x] **breadcrumb** — drop the trailing separator; style the current page.
- [x] **range-calendar** — 3-letter weekday headers, muted outside days, today highlight.
- [x] **slider** — confirmed already pixel-identical to React (stale note).
- [x] **date-field / date-picker / date-range-picker / time-field** — muted placeholder colour (shared `theme.css` bridge).
- [x] **toolbar** — visible group separator (auto-vertical inside the toolbar).

## Open follow-ups

- **Interactive-state sweep** — this pass covered resting states only. Open
  every overlay, and check hover / focus-visible / pressed / selected /
  disabled / invalid states against HeroUI.
- **Dark mode** — re-run the full sweep with `.dark` on `<html>`.
- **Responsive** — spot-check components that reflow at narrow widths.
- **Example fidelity** — replace component-level fallback demos with dedicated
  Vue/React pairs for each registered docs example.
