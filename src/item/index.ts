/**
 * HeroUI-Vue Item — faithful HeroUI v3 list-row primitive over reka-ui.
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * Compat-named exports mirror `src/components/shadcn/item` so call-site
 * migration is a mechanical import-path swap.
 */
export { default as Item } from './item'
export { default as ItemActions } from './item-actions'
export { default as ItemContent } from './item-content'
export { default as ItemDescription } from './item-description'
export { default as ItemFooter } from './item-footer'
export { default as ItemGroup } from './item-group'
export { default as ItemHeader } from './item-header'
export { default as ItemMedia } from './item-media'
export { default as ItemSeparator } from './item-separator'
export { default as ItemTitle } from './item-title'

export { itemVariants, itemMediaVariants } from './item-variants'

// Re-export the internally `T`-prefixed variant types under the shadcn-compat
// names so call-site migration is a mechanical import-path swap.
export type {
  TItemVariants as ItemVariants,
  TItemMediaVariants as ItemMediaVariants
} from './item-variants'
