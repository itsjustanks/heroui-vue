/**
 * ListBoxSection — re-export folder mirroring upstream
 * `@heroui/react/components/list-box-section`. Implementation lives in
 * `src/list-box/`.
 *
 * @see https://www.heroui.com/docs/react/components/list-box
 */
import { ListBoxSection as ListBoxSectionRoot } from '../list-box'

/** Compound — `ListBoxSection.Root` (HeroUI v3 API). */
export const ListBoxSection = Object.assign(ListBoxSectionRoot, {
  Root: ListBoxSectionRoot,
})

export { ListBoxSectionRoot }
export { listboxSectionVariants } from '@heroui/styles'
export type { ListBoxSectionVariants } from '@heroui/styles'
