# Maintaining heroui-vue against HeroUI upstream

`heroui-vue` is a port. Its visual layer *is* HeroUI's own
[`@heroui/styles`](https://www.npmjs.com/package/@heroui/styles) package, and
its components are styled only because they render HeroUI's exact BEM class
names. Staying faithful is therefore mostly a **tracking** problem: watch what
HeroUI ships, and make sure the port still lines up with it.

The `scripts/` directory holds three checks for that, plus a runner. They are
plain Node ESM (`.mjs`), need no dependencies, and read from `node_modules` —
so run `npm install` first.

## Quick start

```bash
npm run maintain
```

Runs all three checks and prints a combined report with a summary. It is a
diagnostic — it always exits 0 once the report is printed; read the summary to
see which checks need attention. Each check can also be run on its own:

```bash
npm run check:upstream     # is @heroui/styles behind its latest release?
npm run check:coverage     # which HeroUI components are not yet ported?
npm run check:bem-drift    # does every family still emit HeroUI's BEM classes?
```

## The checks

### `check-upstream` — version freshness

Compares the installed `@heroui/styles` version to the `latest` dist-tag on the
npm registry and reports whether an update is available. Needs network access;
if the registry is unreachable it reports a warning and skips, rather than
failing.

When it reports an update:

```bash
npm install @heroui/styles@latest
npm run maintain        # re-check coverage and BEM drift against the new CSS
```

### `check-coverage` — component coverage

Compares HeroUI's component set (the per-component directories under
`@heroui/styles/dist/components/`) to this repo's `src/` families, and reports:

- **HeroUI components not yet ported** — candidates for new families.
- **heroui-vue families with no HeroUI counterpart** — repo-specific components
  (e.g. `shimmer`) or families that reuse another component's styles
  (e.g. `menubar`, which shares HeroUI's `menu` surface).

Several HeroUI components intentionally fold into one heroui-vue family — the
`color-*` set into `color-picker`, `menu*` into `dropdown`, and so on. Those
mappings live in the `ALIASES` map in `scripts/check-coverage.mjs`; extend it
when a new HeroUI component is ported under a different name.

### `check-bem-drift` — BEM class drift

For each family, reads the BEM class names from HeroUI's
`<component>.styles.js` (`tv()` slot/variant map) and verifies each one still
appears in the family's source — its `.tsx` components and the `.ts` variant
files they compose. A class HeroUI defines but the family no longer references
is flagged: it means either HeroUI renamed it (the port must follow) or a
refactor here dropped it (a styling regression).

The check understands two ways a class can be referenced:

- a whole class literal — `cn('popover', …)`, `class="dropdown__menu"`;
- a dynamic stem — `` `button--${variant}` `` covers every `button--*` modifier.

A flagged class is not always a regression. It can also be a genuine coverage
gap: a HeroUI slot or variant the port has not implemented yet (a missing
`modal` scroll variant, a `table` column resizer). Either way it is worth a
look — treat the report as a worklist, not a pass/fail gate.

Mappings for families whose name differs from HeroUI's component name (e.g.
`toggle` → `toggle-button`) live in `FAMILY_STYLES` in
`scripts/check-bem-drift.mjs`. Families with no comparable HeroUI BEM map —
`sonner`, which wraps the `vue-sonner` package — are listed in `NO_BEM_MAP` and
skipped.

## The update workflow

1. **`npm run maintain`** — see where things stand.
2. If `check-upstream` reports a new release, `npm install @heroui/styles@latest`.
3. **`npm run maintain`** again — the new CSS may change the BEM contract.
4. For each `check-bem-drift` flag, open HeroUI's `<component>.styles.js` and the
   family's source, and reconcile: adopt a renamed class, or port a newly added
   slot/variant.
5. For each `check-coverage` gap, decide whether to port the missing component.
6. **`npm run build`** — confirm the library still builds green.
7. When porting a new component, use `@heroui/react` (installed as a
   devDependency) as the reference for its behaviour, props and compound API.

## Reference: `@heroui/react`

`@heroui/react` — HeroUI's OSS React components — is a devDependency. It is not
shipped or imported by the library; it is the behavioural reference when porting
a new component or checking how an existing one should behave. Pair it with the
matching `<component>.styles.js` in `@heroui/styles` for the class contract.
