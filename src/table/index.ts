/**
 * HeroUI-Vue Table — faithful HeroUI v3 table primitives.
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * Plain `<table>`-element parts ported 1:1 from `shadcn/table`, restyled to
 * HeroUI v3 taste (text-xs muted headers, hairline `border-border` dividers,
 * `bg-muted/50` hover, comfortable `px-4 py-3` cells). Export names match
 * `shadcn/table` so call-site migration is a mechanical import-path swap.
 */
export { default as Table } from './table'
export { default as TableBody } from './table-body'
export { default as TableCaption } from './table-caption'
export { default as TableCell } from './table-cell'
export { default as TableEmpty } from './table-empty'
export { default as TableFooter } from './table-footer'
export { default as TableHead } from './table-head'
export { default as TableHeader } from './table-header'
export { default as TableRow } from './table-row'
