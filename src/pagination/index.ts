/**
 * HeroUI-Vue Pagination — faithful HeroUI v3 pagination primitive.
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * Page navigation built over reka-ui's `Pagination*` family (page math, edges,
 * sibling count, `v-model:page`). Compound API mirrors HeroUI v3 — `Pagination`
 * (= `PaginationRoot`) with dot-notation parts; `First`/`Last` are the
 * sanctioned reka-ui composition surface beyond HeroUI's named parts.
 */
import { PaginationRoot } from './pagination-root'
import { PaginationList } from './pagination-list'
import { PaginationListItem } from './pagination-list-item'
import { PaginationFirst } from './pagination-first'
import { PaginationPrevious } from './pagination-previous'
import { PaginationNext } from './pagination-next'
import { PaginationLast } from './pagination-last'
import { PaginationEllipsis } from './pagination-ellipsis'
import { PaginationSummary } from './pagination-summary'

/** Compound component — `Pagination` is `PaginationRoot` with parts attached. */
export const Pagination = Object.assign(PaginationRoot, {
  Root: PaginationRoot,
  List: PaginationList,
  ListItem: PaginationListItem,
  First: PaginationFirst,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Last: PaginationLast,
  Ellipsis: PaginationEllipsis,
  Summary: PaginationSummary
})

export {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationFirst,
  PaginationPrevious,
  PaginationNext,
  PaginationLast,
  PaginationEllipsis,
  PaginationSummary
}

export {
  paginationLinkVariants,
  paginationEllipsisVariants
} from './pagination-variants'
export type {
  TPaginationSize,
  TPaginationLinkVariants
} from './pagination-variants'

export default Pagination
