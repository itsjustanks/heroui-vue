/**
 * ListBox — faithful Vue port of HeroUI v3 `ListBox`.
 *
 * Compound API (HeroUI v3):
 *   `ListBox`                  — root (= ListBoxRoot)
 *   `ListBox.Root`             — ListBoxRoot
 *   `ListBox.Item`             — ListBoxItemRoot
 *   `ListBox.ItemIndicator`    — ListBoxItemIndicator
 *   `ListBox.Section`          — ListBoxSection
 *
 * Note: HeroUI React composes `ListBox.Item` from a separate package
 * (`list-box-item`) and `ListBox.Section` from `list-box-section`.
 * This Vue port merges them all under one directory for simplicity while
 * keeping the same public compound API.
 */
import { ListBoxRoot } from './list-box'
import { ListBoxItemRoot } from './list-box-item'
import { ListBoxItemIndicator } from './list-box-item-indicator'
import { ListBoxSection } from './list-box-section'

/** Compound component — `ListBox.Item`, `ListBox.ItemIndicator`, `ListBox.Section` (HeroUI v3 API). */
export const ListBox = Object.assign(ListBoxRoot, {
  Root:          ListBoxRoot,
  Item:          ListBoxItemRoot,
  ItemIndicator: ListBoxItemIndicator,
  Section:       ListBoxSection,
})

export { ListBoxRoot, ListBoxItemRoot, ListBoxItemIndicator, ListBoxSection }

export { listboxVariants }       from '@heroui/styles'
export { listboxItemVariants }   from '@heroui/styles'
export { listboxSectionVariants } from '@heroui/styles'

export type { ListBoxVariants }        from '@heroui/styles'
export type { ListBoxItemVariants }    from '@heroui/styles'
export type { ListBoxSectionVariants } from '@heroui/styles'
