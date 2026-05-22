/**
 * Pagination — faithful Vue port of HeroUI v3 `Pagination`.
 *
 * Compound API (HeroUI v3): `Pagination`, `Pagination.Root`,
 * `Pagination.Content`, `Pagination.Ellipsis`, `Pagination.Item`,
 * `Pagination.Link`, `Pagination.Next`, `Pagination.NextIcon`,
 * `Pagination.Previous`, `Pagination.PreviousIcon`, `Pagination.Summary`.
 * Flat part exports use the `Pagination*` prefix.
 *
 * The `First` / `Last` parts (reka-ui extensions beyond HeroUI's API) are
 * still exported as named flat exports for callers that need them.
 */
import { PaginationRoot } from './pagination-root'
import { PaginationContent } from './pagination-list'
import { PaginationItem } from './pagination-list-item'
import { PaginationLink } from './pagination-link'
import { PaginationPrevious } from './pagination-previous'
import { PaginationPreviousIcon } from './pagination-previous-icon'
import { PaginationNext } from './pagination-next'
import { PaginationNextIcon } from './pagination-next-icon'
import { PaginationEllipsis } from './pagination-ellipsis'
import { PaginationSummary } from './pagination-summary'
import { PaginationFirst } from './pagination-first'
import { PaginationLast } from './pagination-last'

/** Compound component — `Pagination.Content`, `Pagination.Item`, … (HeroUI v3 API). */
export const Pagination = Object.assign(PaginationRoot, {
  Root:          PaginationRoot,
  Content:       PaginationContent,
  Ellipsis:      PaginationEllipsis,
  Item:          PaginationItem,
  Link:          PaginationLink,
  Next:          PaginationNext,
  NextIcon:      PaginationNextIcon,
  Previous:      PaginationPrevious,
  PreviousIcon:  PaginationPreviousIcon,
  Summary:       PaginationSummary,
})

export {
  PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationNextIcon,
  PaginationPrevious,
  PaginationPreviousIcon,
  PaginationSummary,
  /** reka-ui extension — jump to first page. */
  PaginationFirst,
  /** reka-ui extension — jump to last page. */
  PaginationLast,
}

export { paginationVariants } from '@heroui/styles'
export type { PaginationVariants } from '@heroui/styles'
