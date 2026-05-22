# heroui-vue — full component parity sweep

Paste this as the first message of a Claude Code session in this repo (or run it
via `/do`) to drive a component-by-component parity sweep against HeroUI v3.

---

You are in the `heroui-vue` repo (`/Users/ankit/.superset/projects/heroui-vue`),
a Vue 3 port of HeroUI v3. Bring **every component to full parity with HeroUI v3
React** — not just resting-state visuals, but every variant, size, color, state,
sub-component and prop.

## Architecture you MUST respect
- Components are Vue TSX over `reka-ui` primitives; they emit HeroUI's real BEM
  class names + `data-slot` attributes. All visual styling comes from the
  `@heroui/styles` dependency — NEVER fork it, NEVER add design tokens.
- `src/theme.css` is ONLY a reka-ui ↔ HeroUI `data-state` bridge. Do not add
  tokens to it — `@heroui/styles/css` owns the theme.
- The data-attribute shim (`v-heroui-state`, `src/composables/use-heroui-state.ts`)
  bridges reka-ui attributes to the React-Aria ones HeroUI's CSS expects.
- The compound API must stay identical to HeroUI (`Card.Header`, `Select.Item`…).

## Sources of truth (priority order)
1. **HeroUI MCP** — `get_component_docs`, `get_css`, `get_component_source_code`,
   `get_theme_variables`. Authoritative docs + BEM CSS + OSS source.
2. **Local HeroUI v3 React source** —
   `/Users/ankit/Downloads/heroui-3/packages/react/src/components/<name>/` —
   the real implementation: variant maps, props, slot maps, sub-components.
3. **Local HeroUI CSS** — `node_modules/@heroui/styles/dist/components/<name>.css`
   — the exact BEM classes/states the Vue markup must emit.
4. **Docs** — https://www.heroui.com/docs/react/components/<slug>

## Per-component workflow
1. **Enumerate the contract.** From the React source + docs, list EVERY:
   variant, size, color/status; interactive state (hover, focus-visible,
   pressed, selected, disabled, invalid, readonly, indeterminate, loading);
   compound sub-component + its `data-slot` values; prop (named EXACTLY as
   HeroUI does) + default.
2. **Audit the Vue component** (`src/<name>/`): every variant/prop exposed?
   every BEM class + `data-slot` emitted? `v-model` covers controlled state?
3. **Audit the demo.** `playground/src/demos/vue/<name>.tsx` must mirror
   `react/<name>.tsx` AND exercise the full variant/size/state matrix so
   divergence is visible side-by-side. If the React demo is thin, expand BOTH.
4. **Fix** the Vue component until it matches.
5. **Verify.** Run the playground on a dedicated IPv4 port:
   `cd playground && npm run dev -- --host 127.0.0.1 --port 5199 --strictPort`,
   then `PG_BASE=http://127.0.0.1:5199 node playground/shot.mjs <name>` and
   compare panes. Also run `node playground/render-audit.mjs`. Light AND dark.
   If a reference behaviour looks off, check HeroUI's own docs site directly —
   the playground's React pane can have React-Aria init quirks.
6. **Record.** Update `PARITY.md` and `playground/src/parity.ts`.
7. **Commit** per component or tight batch. Conventional commit message.
   NEVER add a `Co-Authored-By` / Claude credit line.

## Definition of done (per component)
- Every HeroUI variant/size/color renders pixel-identical to the reference.
- Every interactive state matches (open overlays, tab through, toggle).
- Every sub-component + prop from upstream is present and identically named.
- `node scripts/audit-parity.mjs` and `render-audit.mjs` show no divergence.
- The demo exercises the full matrix; `PARITY.md` + `parity.ts` updated.
- `npm run type-check` and the playground build pass.

## Priority order
1. **Remaining known gaps** (see `PARITY.md`): tooltip (crash) → calendar →
   accordion, breadcrumb → range-calendar, slider → date-field / date-picker /
   date-range-picker / time-field (shared placeholder fix) → toolbar.
   *Already done: theme, tabs.*
2. Then sweep every remaining component for variant/prop/state completeness.
3. **Coverage gaps** — components in the reference list with no Vue demo.
   Confirm each exists in `src/`; if missing, port it + add a side-by-side demo.
   Reconcile naming to HeroUI: autocomplete (vs combo-box), tag-group (vs
   tags-input), color-area / color-field / color-slider / color-swatch /
   color-swatch-picker (vs color-picker), disclosure / disclosure-group (vs
   collapsible), search-field, error-message / field-error / fieldset (vs
   field), progress-bar (vs progress), scroll-shadow (vs scroll-area),
   breadcrumbs (vs breadcrumb), toast (vs sonner).

## Component reference
Index: https://www.heroui.com/docs/react/components
Per component: https://www.heroui.com/docs/react/components/<slug>

Slugs: button, button-group, close-button, toggle-button, toggle-button-group,
dropdown, list-box, tag-group, color-area, color-field, color-picker,
color-slider, color-swatch, color-swatch-picker, slider, switch, badge, chip,
table, calendar, date-field, date-picker, date-range-picker, range-calendar,
time-field, alert, meter, progress-bar, progress-circle, skeleton, spinner,
checkbox, checkbox-group, description, error-message, field-error, fieldset,
form, input, input-group, input-otp, label, number-field, radio-group,
search-field, text-area, text-field, card, separator, surface, toolbar, avatar,
accordion, breadcrumbs, disclosure, disclosure-group, link, pagination, tabs,
alert-dialog, drawer, modal, popover, toast, tooltip, autocomplete, combo-box,
select, kbd, typography, scroll-shadow

## Environment notes
- The playground Vite server must run on IPv4 (`--host 127.0.0.1`) or
  Chrome/Playwright can't reach it; port 5173 collides with another local app,
  so use 5199.
- After a batch, report: components done, gaps found, and any HeroUI behaviour
  you couldn't reproduce with reka-ui.

## Once components are green
Move to patterns: https://heroui.com/react/llms-patterns.txt
