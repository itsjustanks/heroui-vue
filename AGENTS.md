# AGENTS.md

## Purpose

This repository is `heroui-vue`: a Vue 3 port of HeroUI v3. The goal is
markup-level and visual parity with `@heroui/react`, while using Vue and
`reka-ui` underneath for behaviour and accessibility.

Treat this file as the canonical agent guidance for the repo. `CLAUDE.md` is
only an alias that points back here.

## Install And Setup

For this repo and parity work, keep the upstream HeroUI packages installed:

```bash
npm i @heroui/styles @heroui/react
```

HeroUI v3 expects:

- React 19+ when checking upstream React examples.
- Tailwind CSS v4.
- `@import "tailwindcss";` before HeroUI styles in CSS entry files.
- `@import "@heroui/styles";` or `@import "@heroui/styles/css";` after Tailwind.

For Vue consumers, translate imports to the Vue package:

```ts
import { Button, Card } from 'heroui-vue'
```

The package style source remains HeroUI's own `@heroui/styles`; do not fork,
rewrite, or approximate the visual system unless a parity bug requires a tiny
bridge for Vue/reka state attributes.

## Documentation Source

Use the HeroUI React docs as the source of truth:

- LLM index: `https://heroui.com/react/llms.txt`
- Quick start: `https://www.heroui.com/docs/react/getting-started/quick-start`
- Composition: `https://www.heroui.com/docs/react/getting-started/composition`
- Animation: `https://www.heroui.com/docs/react/getting-started/animation`
- Component docs: `https://www.heroui.com/docs/react/components/{component}`
- Official skill installer:

```bash
curl -fsSL https://heroui.com/install | bash -s heroui-react
```

Maintain our Vue guidance as a clone of the HeroUI React skill, but port every
example and rule to `heroui-vue`. Keep the upstream API concepts intact and only
change what Vue requires.

## Porting Rules

- Preserve HeroUI v3 compound component shape wherever Vue can express it:
  `Card`, `Card.Header`, `Card.Content`, `Modal.Content`, etc.
- Preserve data attributes, `data-slot` values, BEM classes, variant names, and
  exported variant helpers from `@heroui/styles`.
- Use `reka-ui` primitives for behaviour and accessibility instead of inventing
  custom interaction logic.
- Prefer small compatibility adapters for React-style props (`className`,
  `isDisabled`, `onPress`) when that keeps docs snippets portable.
- Vue-specific state should use idiomatic Vue APIs such as `v-model`, emits, and
  slots, but the rendered DOM should match HeroUI React as closely as possible.
- Do not add a provider requirement; HeroUI v3 does not need one.
- Do not use HeroUI v2 patterns such as `@heroui/theme` or `@heroui/system`.

## Composition And Motion

- Use `@heroui/styles` variant functions directly for framework-agnostic styling.
  BEM classes are also valid when only the visual treatment is needed.
- Preserve HeroUI's three composition styles where possible: main compound
  component, explicit `.Root`, and named part exports.
- When HeroUI React docs use Framer Motion or `motion/react`, port the idea with
  `motion-v` for Vue.
- Respect HeroUI's state attributes for CSS animation, including
  `data-hovered`, `data-pressed`, `data-entering`, `data-exiting`, and
  `data-reduce-motion`.

## Workflow

Before implementing or changing a component:

1. Read the relevant HeroUI React docs and source shape.
2. Check local parity helpers and manifests.
3. Port the public API, compound parts, data slots, and style slots first.
4. Add only the reka/Vue bridge code needed for behaviour.
5. Run focused verification.

Useful commands:

```bash
npm run type-check
npm run check:parity
npm run check:bem-drift
npm run maintain
```

Use `node scripts/port-react-component.mjs <component>` for source-driven
starter ports when adding a component.

## Quick Example

React docs may show:

```tsx
import { Button } from '@heroui/react'

export function App() {
  return <Button>My Button</Button>
}
```

For Vue, keep the same component intent:

```vue
<script setup lang="ts">
import { Button } from 'heroui-vue'
</script>

<template>
  <Button>My Button</Button>
</template>
```

## Extras Beyond Canonical HeroUI Surface

The folders below are not on HeroUI React's component list. Keep them, but
treat them as extensions — don't try to keep them in parity with upstream.

| Folder | Why it exists |
| --- | --- |
| `compat/` | shadcn/reka-ui aliases (`Breadcrumb`, `ScrollArea`, `ToggleGroup`, `TagsInput`, `Progress`, `Textarea`) for apps migrating from local `@/components/*` wrappers. |
| `composables/` | shared Vue composables (`vHerouiState`, etc.). |
| `empty-state/` | matches upstream `@heroui/styles` `empty-state` folder; not yet in the canonical docs list. |
| `header/` | matches upstream `@heroui/styles` `header` folder; not yet in the canonical docs list. |
| `menubar/` | horizontal menubar surface (Pro-style). The Vue `Menu`/`MenuItem`/`MenuSection` canonical re-exports point here. |
| `item/` | shared list-item primitive shared by ListBox/Menu rows. |
| `shimmer/` | shimmer animation primitive used by `Skeleton`. |
| `switch-group/` | grouping container for related `Switch` components. |
| `calendar-year-picker/` | year-picker sub-surface shared by `Calendar` and `RangeCalendar`. |
| `date-input-group/` | shared segmented date input used by `DateField`/`DatePicker`. |
| `icons/` | bundled icon set (HeroUI gravity icons). |
| `lib/` | internal helpers (`cn`, etc.). |

## Naming Conventions

- Folder names mirror `@heroui/styles` package dirs, not the docs URL slugs.
  e.g., `src/textarea/` (not `text-area`) and `src/textfield/` (not `text-field`).
- Public component names always match HeroUI React (`TextArea`, `TextField`,
  `ProgressBar`, `Disclosure`, `Autocomplete`, …).
- For canonical components that share an implementation folder (e.g.
  `color-area`, `color-field`, `color-input-group`, `radio`, `list-box-item`,
  `list-box-section`, `menu`, `menu-item`, `menu-section`, `field-error`,
  `fieldset`, `error-message`, `autocomplete`, `disclosure-group`), thin
  re-export folders mirror the upstream layout so imports work the React way.

## Guardrails

- Parity beats novelty. Do not redesign components.
- Keep package docs honest: this is an independent Vue port, not an official
  HeroUI package.
- If upstream HeroUI changes, update the Vue port and parity checks rather than
  documenting around drift.
- Keep `CLAUDE.md` as an alias only; update this file for durable guidance.
- Every public `src/<component>/index.ts` should carry a JSDoc `@see` link to
  `https://www.heroui.com/docs/react/components/<slug>` so the canonical doc
  is one hover away. Run `node scripts/add-doc-urls.mjs` to top up missing ones.
