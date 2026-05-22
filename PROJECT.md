# heroui-vue

A faithful **Vue 3** port of [HeroUI v3](https://heroui.com) — the accessible,
composable React component library — rebuilt for Vue on top of
[reka-ui](https://reka-ui.com) and styled by HeroUI's own published CSS.

`heroui-vue` is an independent, community project. It is not affiliated with the
HeroUI team. HeroUI is MIT-licensed; this port is too.

## 1. What it is

HeroUI v3 ships for React only (`@heroui/react`). `heroui-vue` re-creates its
open-source component set in Vue — **61 component families**, ~300 components —
authored as Vue TSX over reka-ui for behaviour and accessibility.

The defining choice: `heroui-vue` does **not** re-implement HeroUI's visual
design. It renders HeroUI's real BEM class names and depends on
[`@heroui/styles`](https://www.npmjs.com/package/@heroui/styles) — HeroUI's own
maintained, MIT-licensed stylesheet — as the actual CSS layer. The port owns
*behaviour*; HeroUI owns *appearance*. An upstream styling change reaches the
port through `npm update`, not a manual re-skin.

The paid **HeroUI Pro** component set is closed-source and is deliberately **not**
part of this package.

## 2. Architecture

`heroui-vue` is four thin layers. Each component is the middle layer; the other
three are dependencies it leans on.

| Layer | Responsibility | Owned by |
|---|---|---|
| **reka-ui** | Headless behaviour & accessibility — focus management, keyboard interaction, ARIA, floating-element positioning. The Vue analogue of React Aria. | `reka-ui` (dependency) |
| **component** | A Vue TSX component that wires a reka-ui primitive and emits HeroUI's BEM class names (`popover`, `modal__dialog`, `dropdown__popover`, …) and `data-slot` attributes, taken verbatim from HeroUI's `*.styles.js` slot maps. | this repo |
| **data-attribute shim** | One reusable directive that bridges reka-ui's attribute contract to the React-Aria one HeroUI's CSS expects. | this repo |
| **`@heroui/styles`** | The actual CSS — base resets, the default theme tokens, and one stylesheet per component. Never forked. | `@heroui/styles` (dependency) |

### 2.1 Why the styling keys off native CSS

HeroUI's CSS keys most of its interactive states off **native pseudo-classes** —
`:hover`, `:focus-visible`, `:active`, `:disabled`. Those work directly over the
real DOM that reka-ui renders, so no JavaScript state-mirroring shim is needed
for the common case. A component that renders the right BEM class names is
already styled and interactive.

### 2.2 The data-attribute shim

A few HeroUI attributes have no reka-ui equivalent — overlay enter/exit
animations especially. The shim (`src/composables/use-heroui-state.ts`, applied
as the `v-heroui-state` directive) closes that gap:

- **`data-entering` / `data-exiting`** — HeroUI animates popovers, modals,
  drawers, menus and tooltips with these. reka-ui emits `data-state="open|closed"`
  instead; the shim derives the React-Aria pair from `data-state` transitions.
- **`data-placement`** — HeroUI keys placement-aware slide-ins off this. reka-ui
  emits `data-side`; the shim mirrors it across.
- **`data-disabled`** — HeroUI expects the valued form `data-disabled="true"`;
  reka-ui emits a bare attribute, which the shim normalises.

The shim also honours reka-ui's presence model: where an overlay exits with a
CSS *transition* (drawer) or animates an always-mounted ancestor (modal), it
pins the element mounted for the exit's duration so the animation can play out.

## 3. Component coverage

All 61 families are ported and build green. Each lives in its own directory
under `src/` and is re-exported from `src/index.ts`.

- **Buttons & actions** — button, button-group, toggle, toggle-group,
  close-button, link
- **Inputs & forms** — input, input-group, input-otp, textarea, number-field,
  checkbox, checkbox-group, radio-group, switch, slider, select, combo-box,
  tags-input, color-picker, field, form, label
- **Date & time** — calendar, range-calendar, date-field, date-picker,
  date-range-picker, time-field
- **Overlays** — modal, drawer, popover, tooltip, dropdown, menubar
- **Navigation** — breadcrumb, pagination, tabs
- **Data display** — table, list-box, item, card, accordion, collapsible,
  avatar, badge, chip, kbd, separator, typography
- **Feedback & status** — alert, alert-dialog, progress, progress-circle, meter,
  spinner, skeleton, shimmer, sonner
- **Layout & utility** — scroll-area, toolbar

Icons ship as the [gravity-ui](https://github.com/gravity-ui/icons) set (the
icon family HeroUI v3 itself uses), vendored as Vue functional components under
`src/icons/`.

## 4. Project layout

```
heroui-vue/
  src/
    composables/use-heroui-state.ts   # the data-attribute shim
    <family>/                         # one directory per component family
    icons/                            # gravity-ui icon set, as Vue components
    lib/utils.ts                      # cn() class-merge helper
    index.ts                          # public barrel
  scripts/                            # upstream-tracking tooling (see MAINTENANCE.md)
  dist/                               # build output (ESM + CSS + .d.ts)
```

The build is Vite library mode → ESM, with `vue-tsc` emitting `.d.ts` files.
`vue` and the reka-ui stack stay external so the consuming app dedupes them.

## 5. Staying aligned with HeroUI

Because the visual layer *is* `@heroui/styles`, keeping the port faithful is
mostly a tracking problem rather than a re-skinning one. `scripts/` holds the
tooling for that — version checks, component-coverage diffs, and BEM-class drift
detection — run together via `npm run maintain`. See
[`MAINTENANCE.md`](./MAINTENANCE.md).

## 6. Roadmap

Done: all 61 families on HeroUI v3 BEM classes, the gravity-ui icon set, the
data-attribute shim, and the upstream-maintenance tooling. The build is green.

Next:

1. **Visual QA** — verify each family against heroui.com, with attention to the
   overlay enter/exit animations the shim drives.
2. **Test coverage** — component tests for behaviour and accessibility, and a
   regression test for the data-attribute shim.
3. **Documentation site** — a live component gallery and per-component API docs.
4. **Theming guide** — document overriding `@heroui/styles`' theme tokens (the
   `oklch` colour variables, radii, shadows) from a consuming app.
5. **Track HeroUI v3** — adopt new upstream components as they ship, using the
   `npm run maintain` reports to spot coverage gaps and BEM drift.

## 7. License

MIT. `heroui-vue` is a Vue port of MIT-licensed software; it re-implements
HeroUI's component *behaviour* over reka-ui and depends on the MIT
`@heroui/styles` package — no `@heroui/react` source is copied.
