# Parity tracker

Per-component parity status of **heroui-vue** against **HeroUI v3 React**
(`@heroui/react` 3.0.5). This is the source-of-truth checklist; the README
carries a summary and the playground surfaces these statuses live.

**Last full sweep:** 2026-05-22. **Fixed since:** tabs.

## How parity is measured

| Check | Tool | Current result |
|---|---|---|
| Compound API — component + sub-part names match HeroUI source | `node scripts/audit-parity.mjs` | ✅ 0 divergent (except the legacy `compat` shim) |
| Demo structure — Vue & React demos use the same JSX tags | `node scripts/audit-parity.mjs` | ✅ 0 divergent |
| Rendered DOM — Vue pane vs React pane `data-slot` sequence | `node playground/render-audit.mjs` | run per change |
| **Visual** — side-by-side screenshot comparison | `node playground/shot.mjs` + review | **see below** |

The API and structural checks pass cleanly. The remaining work is **visual**.

## Summary

| | Count |
|---|---|
| ✅ Pixel-match | 52 |
| 🟡 Minor polish | 5 |
| 🔴 Broken | 5 |
| 💥 Crash | 1 |
| **Total demoed** | **63** |

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
| toggle | ✅ | |
| toggle-group | ✅ | |
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
| combo-box | ✅ | |
| input-group | ✅ | |
| input-otp | ✅ | |
| tags-input | ✅ | |
| color-picker | ✅ | |
| label | ✅ | |
| description | ✅ | |
| form | ✅ | |
| slider | 🔴 | Thumb renders as a hollow, oblong outlined pill — should be a filled white circle. Likely the thumb element is sized/styled wrong, or the BEM class is missing so HeroUI's `slider__thumb` rule never applies. |

### Date & time

| Component | Status | Notes |
|---|---|---|
| calendar | 🔴 | **Day numbers do not render** — cells show as bullet dots. Day cells are probably `<li>` without `list-style: none`, or the date label text is not emitted. Highest-impact bug. |
| range-calendar | 🔴 | Weekday headers are single-letter (`S M T…`) instead of three-letter (`Sun Mon…`); outside-month days are not muted; today is not highlighted. |
| date-field | 🟡 | Empty date-segment placeholder renders too dark — should be the muted `--field-placeholder` colour. |
| date-picker | 🟡 | Same placeholder-darkness issue as date-field. |
| date-range-picker | 🟡 | Same placeholder-darkness issue as date-field. |
| time-field | 🟡 | Same placeholder-darkness issue as date-field. |

> The four date/time 🟡 items share **one root cause** — the empty
> date-segment placeholder colour. Fix once, clears all four.

### Overlays

| Component | Status | Notes |
|---|---|---|
| modal | ✅ | Resting (trigger) state matches; open-state pass pending. |
| drawer | ✅ | Resting state matches; open-state pass pending. |
| popover | ✅ | Resting state matches; open-state pass pending. |
| dropdown | ✅ | Resting state matches; open-state pass pending. |
| alert-dialog | ✅ | Resting state matches; open-state pass pending. |
| tooltip | 💥 | Demo throws `Injection Symbol(TooltipProviderContext) not found — Component must be used within TooltipProvider`. The Vue Tooltip requires a `TooltipProvider` ancestor that `@heroui/react`'s API does not. Reconcile: auto-provide the context, or drop the requirement, so Tooltip works standalone like upstream. |

### Navigation

| Component | Status | Notes |
|---|---|---|
| pagination | ✅ | |
| tabs | ✅ | **Fixed 2026-05-22.** Now a proper segmented-control track with a visible active segment + panel content — matches HeroUI's docs. Three fixes: auto-select the first tab (reka-ui doesn't; HeroUI does), emit `data-orientation` on the list (reka-ui only emits `aria-orientation`), and reveal the per-tab indicator only under the active tab (no React-Aria `SelectionIndicator` in reka). Note: the playground's React pane shows the indicator at `opacity:0` — a React-Aria `SelectionIndicator` init quirk — so the Vue pane is the accurate reference here. |
| breadcrumb | 🔴 | Renders a trailing separator after the last crumb; the current page is not styled (HeroUI bolds the current page and emits no trailing separator). |
| toolbar | 🟡 | The vertical separator between groups is not visible. |

### Data display

| Component | Status | Notes |
|---|---|---|
| avatar | ✅ | |
| badge | ✅ | |
| card | ✅ | |
| surface | ✅ | |
| header | ✅ | |
| chip | ✅ | |
| collapsible | ✅ | |
| table | ✅ | |
| list-box | ✅ | |
| kbd | ✅ | |
| separator | ✅ | |
| scroll-area | ✅ | |
| typography | ✅ | |
| accordion | 🔴 | Trigger renders the chevron icon **twice** and does not right-align it. HeroUI shows a single chevron pushed to the trailing edge. |

### Feedback

| Component | Status | Notes |
|---|---|---|
| alert | ✅ | |
| empty-state | ✅ | |
| progress | ✅ | |
| progress-circle | ✅ | |
| meter | ✅ | |
| spinner | ✅ | |
| skeleton | ✅ | |
| sonner | ✅ | |

## Fix checklist

Ordered by impact. Tick as each is verified against HeroUI in the playground.

- [x] **tabs** — segmented-control track + active segment + render the active
  panel. *Done 2026-05-22.*
- [ ] **tooltip** — resolve the `TooltipProvider` injection crash.
- [ ] **calendar** — render day numbers (reset list styling / emit date label).
- [ ] **accordion** — single, right-aligned chevron.
- [ ] **breadcrumb** — drop the trailing separator; style the current page.
- [ ] **range-calendar** — 3-letter weekday headers, muted outside days, today highlight.
- [ ] **slider** — filled white circular thumb.
- [ ] **date-field / date-picker / date-range-picker / time-field** — muted placeholder colour (shared fix).
- [ ] **toolbar** — visible group separator.

## Open follow-ups

- **Interactive-state sweep** — this pass covered resting states only. Open
  every overlay, and check hover / focus-visible / pressed / selected /
  disabled / invalid states against HeroUI.
- **Dark mode** — re-run the full sweep with `.dark` on `<html>`.
- **Responsive** — spot-check components that reflow at narrow widths.
- Components without a side-by-side demo yet (in `src/` but not in the
  playground): bring the remaining `src/` families up to a demo so all 69 are
  tracked here, not just 63.
