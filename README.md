# heroui-vue

A faithful **Vue 3** port of [HeroUI v3](https://heroui.com) — the accessible,
composable component library — rebuilt for Vue on top of
[reka-ui](https://reka-ui.com) and styled by HeroUI's own published CSS.

```bash
npm install @itsjustanks/heroui-vue
```

**▶ Live parity playground — [heroui-vue.vercel.app](https://heroui-vue.vercel.app)**
&nbsp;·&nbsp; every component rendered side-by-side against `@heroui/react`,
with a live parity dashboard.

> **Status — work in progress** (v1.0.1). 69 component families are ported and
> build green. **51 of 63** demoed components are pixel-faithful to HeroUI v3
> React; **12 have tracked visual gaps.** See the [Parity TODO](#parity-todo)
> below and the [live playground](https://heroui-vue.vercel.app).

---

## Table of contents

- [What it is](#what-it-is)
- [Install](#install)
- [Usage](#usage)
- [Theming](#theming)
- [Architecture](#architecture)
- [Parity playground](#parity-playground)
- [Parity TODO](#parity-todo)
- [Project roadmap](#project-roadmap)
- [Maintenance tooling](#maintenance-tooling)
- [Attribution — HeroUI](#attribution--heroui)
- [License](#license)

---

## What it is

HeroUI v3 (`@heroui/react`) ships for React only. `heroui-vue` re-creates its
open-source component set in Vue — Button, Card, Modal, Dropdown, Select, Tabs,
Table, Calendar, ComboBox and ~60 more — authored as Vue TSX over reka-ui for
behaviour and accessibility.

The defining choice: **`heroui-vue` does not re-implement HeroUI's visual
design.** Each component renders HeroUI's real BEM class names and `data-slot`
attributes, and the actual CSS comes from
[`@heroui/styles`](https://www.npmjs.com/package/@heroui/styles) — HeroUI's own
maintained stylesheet — as a dependency. The port owns *behaviour*; HeroUI owns
*appearance*. An upstream styling change reaches the port through `npm update`,
not a manual re-skin.

The paid **HeroUI Pro** component set is closed-source and is deliberately
**not** part of this package.

## Install

```bash
npm install @itsjustanks/heroui-vue
```

`vue` (^3.5) is a peer dependency. `@heroui/styles` and the reka-ui stack come
in as dependencies.

## Usage

**1. Import the stylesheets once, at your app entry.** Two imports — HeroUI's
full stylesheet (the real theme + every component's CSS), then this package's
thin reka-ui ↔ HeroUI bridge:

```ts
import '@heroui/styles/css'                  // HeroUI v3 theme + component CSS
import '@itsjustanks/heroui-vue/styles.css'  // reka-ui ↔ HeroUI data-attr bridge
```

**2. Use the components.** They follow HeroUI v3's compound API:

```vue
<script setup lang="ts">
import { Card, Button } from '@itsjustanks/heroui-vue'
</script>

<template>
  <Card>
    <Card.Header>Upgrade your plan</Card.Header>
    <Card.Content>Unlock unlimited projects and priority support.</Card.Content>
    <Card.Footer>
      <Button variant="primary">Upgrade</Button>
    </Card.Footer>
  </Card>
</template>
```

Stateful components use `v-model`; every component accepts a `class` prop and
forwards unknown attributes to its root element.

## Theming

**You do not write a theme.** `@heroui/styles/css` ships HeroUI v3's complete
design-token layer — the `oklch` palette, radii, shadows, spacing and dark mode
— in its `themes/default`. Importing it *is* the theme.

To re-theme, override HeroUI's own CSS variables (`--accent`, `--surface`,
`--radius`, …) in your app's CSS, or switch `.dark` on `<html>`. Do **not**
redefine tokens under shadcn-style names (`--primary`, `--card`, `--ring`) —
HeroUI's CSS does not read them, and colliding names (`--accent`, `--muted`)
will corrupt the real theme.

This package's own `styles.css` is intentionally tiny: it only bridges the few
DOM-state attributes where reka-ui (`data-state`) and HeroUI's CSS
(`data-selected`) disagree. It defines **no** design tokens.

## Architecture

`heroui-vue` is four thin layers — the component is the middle one; the other
three are dependencies it leans on.

| Layer | Responsibility | Owned by |
|---|---|---|
| **reka-ui** | Headless behaviour & accessibility — focus, keyboard, ARIA, floating positioning. The Vue analogue of React Aria. | `reka-ui` (dep) |
| **component** | Vue TSX that wires a reka-ui primitive and emits HeroUI's BEM classes + `data-slot` attributes verbatim. | this repo |
| **data-attribute shim** | One reusable directive (`v-heroui-state`) bridging reka-ui's attribute contract to the React-Aria one HeroUI's CSS expects (`data-entering`/`data-exiting`, `data-placement`, valued `data-disabled`). | this repo |
| **`@heroui/styles`** | The actual CSS — base resets, the default theme tokens, one stylesheet per component. Never forked. | `@heroui/styles` (dep) |

HeroUI's CSS keys most interactive states off **native pseudo-classes**
(`:hover`, `:focus-visible`, `:active`, `:disabled`), which work directly over
the real DOM reka-ui renders — so a component that emits the right class names
is already styled and interactive, no JS state-mirroring needed.

Icons ship as the [gravity-ui](https://github.com/gravity-ui/icons) set (the
icon family HeroUI v3 itself uses), vendored as Vue components under `src/icons/`.

## Parity playground

**Live: <https://heroui-vue.vercel.app>** — deployed from `playground/` on
every push (Vercel).

`playground/` renders every component **twice, side by side** — the Vue port
against `@heroui/react` — so divergence is visible at a glance. It doubles as a
live parity dashboard: a header summary (`match / minor / broken / crash`), a
status dot beside every component in the sidebar, and a per-component banner.

```bash
cd playground
npm install
npm run dev          # http://localhost:5173  (?c=<component-id> deep-links)
```

Audit tooling:

```bash
node scripts/audit-parity.mjs      # static: compound API + demo-tag parity
node playground/render-audit.mjs   # headless: Vue-pane vs React-pane DOM diff
node playground/shot.mjs [ids…]    # screenshot the side-by-side preview(s)
```

## Parity TODO

Visual sweep against HeroUI v3 React, **2026-05-22**. The compound API and demo
structure are already 100% matched (`audit-parity.mjs`: 0 divergent); the items
below are **visual** gaps.

### ✅ Done

- [x] **Theme** — removed the broken shadcn token layer from `theme.css` that
  was overriding `@heroui/styles` and clobbering `--accent` (rendered the whole
  UI grey instead of HeroUI blue), `--accent-foreground` and `--muted`. The
  file is now only the reka-ui ↔ HeroUI `data-state` bridge.

### 🔴 Crash — fix first

- [ ] **tooltip** — Vue demo throws `Injection Symbol(TooltipProviderContext)
  not found`. The Tooltip requires a `TooltipProvider` ancestor that
  `@heroui/react`'s API does not; reconcile the provider model (auto-provide, or
  drop the requirement) so Tooltip works standalone like upstream.

### 🔴 Broken — clear visual divergence

- [ ] **calendar** — day numbers do not render (cells show as bullet dots).
  Likely day cells are `<li>` without `list-style: none`, or the date label is
  not emitted. Highest-impact bug.
- [ ] **accordion** — trigger renders the chevron icon **twice** and does not
  right-align it; HeroUI shows one chevron pushed to the trailing edge.
- [ ] **breadcrumb** — renders a trailing separator after the last crumb, and
  the current page is not styled (HeroUI bolds it, no trailing separator).
- [ ] **range-calendar** — weekday headers are single-letter (`S M T…`) instead
  of three-letter (`Sun Mon…`); outside-month days are not muted; today is not
  highlighted.
- [ ] **slider** — thumb renders as a hollow, oblong outlined pill instead of a
  filled white circle.
- [ ] **tabs** — renders as separate pill buttons instead of a single
  segmented-control track; the active tab panel content is not rendered.

### 🟡 Minor polish

- [ ] **date-field / date-picker / date-range-picker / time-field** — empty
  date-segment placeholders render too dark; should use the muted
  (`--field-placeholder`) colour like upstream. Single shared root cause.
- [ ] **toolbar** — the vertical separator between groups is not visible.

### Per-component status (63 demoed)

| Status | Components |
|---|---|
| ✅ Match (51) | alert, alert-dialog, avatar, badge, button, button-group, card, checkbox, checkbox-group, chip, close-button, collapsible, color-picker, combo-box, description, drawer, dropdown, empty-state, form, header, input, input-group, input-otp, kbd, label, link, list-box, meter, modal, number-field, pagination, popover, progress, progress-circle, radio-group, scroll-area, select, separator, skeleton, sonner, spinner, surface, switch, switch-group, table, tags-input, textarea, textfield, toggle, toggle-group, typography |
| 🟡 Minor (5) | date-field, date-picker, date-range-picker, time-field, toolbar |
| 🔴 Broken (6) | accordion, breadcrumb, calendar, range-calendar, slider, tabs |
| 💥 Crash (1) | tooltip |

## Project roadmap

1. **Visual parity** — close the 12 gaps above; re-run the sweep until the
   playground is all-green.
2. **Match `llms-components.txt`** — verify every component against HeroUI's
   [component reference](https://heroui.com/react/llms-components.txt) (props,
   variants, sub-components).
3. **Patterns** — once components are green, port HeroUI's
   [patterns](https://heroui.com/react/llms-patterns.txt).
4. **Test coverage** — behaviour + accessibility tests, and a regression test
   for the data-attribute shim.
5. **Docs site** — per-component API documentation alongside the playground.
6. **Theming guide** — document overriding `@heroui/styles` tokens from an app.
7. **Track HeroUI v3** — adopt new upstream components via `npm run maintain`.

## Maintenance tooling

Because the visual layer *is* `@heroui/styles`, staying faithful is a tracking
problem. `scripts/` holds the tooling — version checks, coverage diffs and
BEM-class drift detection — run together via `npm run maintain`. See
[`MAINTENANCE.md`](./MAINTENANCE.md) and [`PROJECT.md`](./PROJECT.md).

## Attribution — HeroUI

`heroui-vue` is an **independent, community Vue port** of
[HeroUI](https://heroui.com) (`@heroui/react`), created by the HeroUI team
(formerly NextUI). It is **not affiliated with, endorsed by, or maintained by
the HeroUI team.**

- **HeroUI** — © HeroUI — <https://github.com/heroui-inc/heroui> — MIT licensed.
- This port **depends on** the unmodified, MIT-licensed
  [`@heroui/styles`](https://www.npmjs.com/package/@heroui/styles) package for
  all visual styling, and re-implements HeroUI's component **behaviour** over
  [reka-ui](https://reka-ui.com). **No `@heroui/react` source code is copied.**
- Icons are the [gravity-ui](https://github.com/gravity-ui/icons) set (MIT),
  the icon family HeroUI v3 itself uses.

If you are building for **React**, use HeroUI directly — it is the original and
the source of truth: <https://heroui.com>.

## License

MIT — see [`LICENSE`](./LICENSE). `heroui-vue` is a Vue port of MIT-licensed
software; it depends on the MIT `@heroui/styles` package and copies no
`@heroui/react` source.
