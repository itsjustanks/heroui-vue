# heroui-vue

A faithful **Vue 3** port of [HeroUI v3](https://heroui.com) — accessible,
composable UI components built on [reka-ui](https://reka-ui.com) (the Vue analog
of React Aria).

> **Status: work in progress.** All 61 component families render HeroUI v3's real
> BEM class names (styled by HeroUI's own `@heroui/styles`) and use the gravity-ui
> icon set. Remaining: visual QA. See [`PROJECT.md`](./PROJECT.md).

## What it is

HeroUI v3 (`@heroui/react`) ships for React only. `heroui-vue` re-creates its
component set in Vue — Button, Card, Modal, Dropdown, Select, Tabs, Table,
Calendar, Combobox, and ~50 more — authored as Vue TSX over reka-ui for
behaviour and accessibility.

## Install

```bash
npm install heroui-vue
```

`vue` (^3.5) is a peer dependency.

## Usage

Import HeroUI's stylesheet once, at your app entry:

```ts
import '@heroui/styles'
```

Then use the components:

```ts
import { Button, Card, CardHeader, CardContent } from 'heroui-vue'
```

```tsx
<Card>
  <CardHeader>…</CardHeader>
  <CardContent>…</CardContent>
</Card>
```

Stateful components use `v-model`; every component accepts a `class` prop.

## Architecture

- **reka-ui** — headless behaviour + accessibility.
- **components** — Vue TSX; `defineComponent`, thin `{...attrs}` forwarding.
- **styling** — components emit HeroUI v3 BEM class names; the visual layer is
  HeroUI's own `@heroui/styles` (a dependency). HeroUI's CSS keys off native
  pseudo-classes, which work directly over reka-ui's real DOM.
- **icons** — the gravity-ui icon set (vendored from `@gravity-ui/icons`, MIT),
  exported as `Icon*` Vue components.

## Relationship to HeroUI

[HeroUI](https://heroui.com) is MIT-licensed. `heroui-vue` is an independent
community Vue port — it re-implements HeroUI's component behaviour over reka-ui
and follows HeroUI's design language. It is not affiliated with the HeroUI team.
The HeroUI **Pro** component set is paid and is **not** part of this package.

## License

MIT — see [LICENSE](./LICENSE).
