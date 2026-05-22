# PRP — `heroui-vue`: an open-source, `@heroui/styles`-backed Vue port of HeroUI v3

**Status:** Scaffolded. 61 OSS component families extracted from `unfold-app`'s
in-app `heroui/` library, packaged (Vite lib build, MIT), git-initialised.
**Supersedes:** the styling approach of the current in-repo `heroui/` +
`heroui-pro/` (hand-written Tailwind utilities) and `src/components/heroui/theme.css`.

## 0. Current status & next steps

Done: copy + flatten imports + package scaffold + `npm install` + green build +
**all 61 families converted to HeroUI BEM classes**, styled by `@heroui/styles`.
`npm run build` green (`dist/heroui-vue.js` 186 KB + `.css` + 388 `.d.ts`).

Next, in this repo:
1. lucide → gravity-ui icon swap (§3.2).
2. Visual QA against heroui.com; wire popover `data-entering`/`data-placement`
   where animations need it.
3. GitHub repo creation + `npm publish` are user-triggered when ready.

The in-app `unfold-app/src/components/heroui/` copy is untouched and still
working — `unfold-app` switches to consume this package at rollout step 6.

## 1. Goal

Two outcomes:
- **`heroui-vue`** — a standalone open-source GitHub repo + npm package: a faithful
  Vue 3 port of **HeroUI OSS** (`@heroui/react`), styled by HeroUI's *real*
  maintained CSS, so it stays aligned with upstream via `npm update`.
- **`heroui-pro/`** — stays vendored in `unfold-app` (HeroUI Pro is paid; a port of
  it cannot be open-sourced). Same architecture, Pro CSS vendored in-repo.

`unfold-app` then consumes `heroui-vue` as a dependency.

## 2. Why a separate project (the key finding)

`@heroui/styles@3.0.5` (MIT) is **a full Tailwind v4 styling foundation**, not a
drop-in stylesheet:
- `dist/index.css` bundles `@import "tailwindcss"` + `tw-animate-css`, base resets,
  a `themes/default` token layer, and `@layer theme, base, components, utilities`.
- `dist/components/*.css` — ~50 per-component stylesheets.
- The CSS keys off **~24 React-Aria data-attributes**: `data-slot` (×177),
  `data-selected`, `data-placement`, `data-focus-visible`, `data-hovered`,
  `data-disabled`, `data-pressed`, `data-invalid`, `data-entering`/`-exiting`,
  `data-orientation`, `data-focus-within`, `data-outside-month`, `data-focused`,
  `data-indeterminate`, `data-open`, `data-selection-start`/`-end`, `data-focus`,
  `data-expanded`, `data-dragging`, `data-placeholder`, `data-pending`,
  `data-empty`, `data-allows-sorting`.

Retrofitting that into `unfold-app` means merging two Tailwind-v4 foundations
(collisions in layer order, preflight, theme). A greenfield package where
`@heroui/styles` *is* the foundation avoids all of it.

## 3. Architecture — "A done right"

| Layer | What |
|---|---|
| **reka-ui** | headless behaviour / a11y (Vue analog of React Aria) |
| **component** | renders HeroUI's **BEM class names** + `data-slot` per part (names taken verbatim from HeroUI's `*.styles.ts`) |
| **data-attr shim** | one reusable composable/directive — re-emits the React-Aria data-attribute contract from reka-ui state |
| **`@heroui/styles`** | the actual CSS — an npm dependency, **never forked**. Upstream update → `npm update`. |

The shim is the *only* thing the port maintains. Everything visual is HeroUI's.

### 3.1 The data-attribute shim contract

Map reka-ui → the React-Aria contract HeroUI's CSS expects:
- **Native pass-through** (reka already emits): `data-disabled`, `data-orientation`,
  `data-placeholder`, `data-indeterminate` (`data-state=indeterminate`).
- **Derived from reka `data-state` / `data-highlighted` / `data-side`+`data-align`:**
  `data-open`/`data-expanded` ← `data-state=open`; `data-selected` ←
  `data-state=checked|on|active` / reka `data-selected`; `data-focus-visible` ←
  `data-highlighted`; `data-placement` ← `data-side` + `data-align`;
  `data-entering`/`data-exiting` ← `data-state` open/closed.
- **JS-tracked (composable adds pointer/focus listeners):** `data-hovered`,
  `data-pressed`, `data-focused`, `data-focus`, `data-focus-within`.
- **Static:** `data-slot="<part>"` on every part — verbatim from `*.styles.ts`.
- **Component-specific:** calendar (`data-outside-month`, `data-selection-*`),
  form (`data-invalid`, `data-pending`), table (`data-allows-sorting`), DnD
  (`data-dragging`), `data-empty` — wired per component.

### 3.2 Icons — gravity-ui, not lucide

HeroUI v3 uses the **gravity-ui icon set** (`@gravity-ui/icons`,
<https://github.com/gravity-ui/icons>) throughout its components and docs. The
current port uses `lucide-vue-next` — a fidelity gap. Swap it:
- **Vue delivery:** `@iconify/vue` with Iconify's gravity-ui collection
  (`gravity-ui:<name>`), or `@gravity-ui/icons` directly if it ships
  Vue-consumable SVG components. Decide in step 0.
- Replace every `import { X as IconX } from 'lucide-vue-next'` with the
  gravity-ui equivalent — needs a lucide→gravity-ui name map (not 1:1).
- Done in the same per-component pass as the BEM conversion (every file is
  already being touched). Applies to `heroui/` **and** `heroui-pro/`.

## 4. `heroui-vue` repo structure

```
heroui-vue/
  package.json        # deps: vue, reka-ui, @heroui/styles ; peerDep: vue
  src/
    composables/use-heroui-state.ts   # the data-attr shim
    components/<name>/                # one dir per component (the ported set)
    styles.ts                         # re-exports / styling entry
    index.ts                          # master barrel
  README.md  LICENSE (MIT)  tsconfig  build (vite lib mode)
  playground/ or histoire/            # isolated dev + visual verification
```

- Build: Vite library mode → ESM + types. Consumers import components + once
  `@import "@heroui/styles"` (or the package re-exports it).
- Dev/verify in isolation (Histoire/Storybook) — `@heroui/styles` is the clean
  foundation there, no host-app Tailwind collision.

## 5. OSS / Pro split + licensing

- `heroui-vue` (OSS) → depends on MIT `@heroui/styles`; the port itself MIT.
  Legitimate — a Vue port of MIT software. (Confirm `@heroui/react` component
  *source* isn't copied; only behaviour is re-implemented over reka-ui.)
- `heroui-pro/` → HeroUI Pro CSS is paid/closed. Stays vendored in `unfold-app`
  (licensed use by a Pro customer in their own private app). **Never published.**

## 6. Rollout

1. **Shim** — build + unit-test `use-heroui-state` against every reka primitive family.
2. **Pilot `dropdown`** — BEM classes + `data-slot` + shim + `@heroui/styles`;
   verify hover/focus/open match HeroUI pixel-for-pixel. Locks the recipe.
3. **Fan out** — convert all OSS components (agent batches) using the proven
   recipe; in the same pass, **swap `lucide-vue-next` → the gravity-ui icon set**
   (§3.2).
4. **Verify** — visual pass per component against heroui.com.
5. **Extract** — move `heroui/` into the `heroui-vue` repo; package + build + README
   + LICENSE; publish-ready. (GitHub repo creation + `npm publish` are user-triggered.)
6. **Consume** — `unfold-app` depends on `heroui-vue`; delete the in-repo `heroui/`
   + `theme.css`.
7. **`heroui-pro/`** — same re-architecture, applied in-repo, vendoring Pro CSS.
8. **Cleanup** — drop legacy `radix-vue` + shadcn-vue config (`reka-ui` stays).

## 7. Open decisions (before step 5)

- `heroui-vue` consumption: published npm package vs. local linked package
  (workspace / `file:` / git dependency) during development.
- Final package name + npm scope/org; GitHub org for the public repo.
- Whether `heroui-vue` re-exports `@heroui/styles` or documents the `@import`.

## 8. References

- Real CSS source of truth: `@heroui/styles` (MIT, npm) — `dist/components/*.css`,
  `dist/themes/default/`, and `src/components/<name>/<name>.styles.ts` (BEM slot map).
- HeroUI Pro CSS: `unfold-next/node_modules/@heroui-pro/react/dist/css/components/*.css`.
- Current in-repo port + program ledger: `.planning/prps/heroui-vue-library.md`.
