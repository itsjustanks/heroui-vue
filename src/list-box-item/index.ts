/**
 * ListBoxItem — re-export folder mirroring upstream
 * `@heroui/react/components/list-box-item`. Implementation lives in
 * `src/list-box/`.
 *
 * @see https://www.heroui.com/docs/react/components/list-box
 */
import { ListBoxItemRoot, ListBoxItemIndicator } from '../list-box'

/** Compound — `ListBoxItem.Root`, `ListBoxItem.Indicator` (HeroUI v3 API). */
export const ListBoxItem = Object.assign(ListBoxItemRoot, {
  Root: ListBoxItemRoot,
  Indicator: ListBoxItemIndicator,
})

export { ListBoxItemRoot, ListBoxItemIndicator }
export { listboxItemVariants } from '@heroui/styles'
export type { ListBoxItemVariants } from '@heroui/styles'
