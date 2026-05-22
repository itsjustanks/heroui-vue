# heroui-vue

A faithful **Vue 3** port of [HeroUI v3](https://heroui.com) — accessible,
composable UI components built on [reka-ui](https://reka-ui.com) (the Vue analog
of React Aria).

> **Status: early / work in progress.** This package was extracted from a
> production in-app HeroUI-for-Vue library (~60 component families, build-green).
> The next milestone — re-styling onto HeroUI's real `@heroui/styles` for 100%
> visual parity, maintained via upstream — is specced in
> [`PROJECT.md`](./PROJECT.md).

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
- Currently styled with Tailwind utilities; migrating to HeroUI's real
  `@heroui/styles` (see [`PROJECT.md`](./PROJECT.md)).

## Relationship to HeroUI

[HeroUI](https://heroui.com) is MIT-licensed. `heroui-vue` is an independent
community Vue port — it re-implements HeroUI's component behaviour over reka-ui
and follows HeroUI's design language. It is not affiliated with the HeroUI team.
The HeroUI **Pro** component set is paid and is **not** part of this package.

## License

MIT — see [LICENSE](./LICENSE).
