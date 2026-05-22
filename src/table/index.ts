/**
 * Table — faithful Vue port of HeroUI v3 `Table`.
 *
 * Compound API (HeroUI v3):
 *   `Table`                   — root (= TableRoot)
 *   `Table.Root`              — TableRoot
 *   `Table.ScrollContainer`   — TableScrollContainer
 *   `Table.Content`           — TableContent
 *   `Table.Header`            — TableHeader
 *   `Table.Column`            — TableColumn
 *   `Table.Body`              — TableBody
 *   `Table.Row`               — TableRow
 *   `Table.Cell`              — TableCell
 *   `Table.Footer`            — TableFooter
 *
 * Omitted vs. HeroUI React (require RAC primitives not available in Vue):
 *   Table.Collection, Table.ColumnResizer, Table.LoadMore,
 *   Table.LoadMoreContent, Table.ResizableContainer
 *
 * Removed (breaking change from v0): TableHead, TableCaption, TableEmpty.
 */
import { TableRoot } from './table'
import { TableScrollContainer } from './table-scroll-container'
import { TableContent } from './table-content'
import { TableHeader } from './table-header'
import { TableColumn } from './table-column'
import { TableBody } from './table-body'
import { TableRow } from './table-row'
import { TableCell } from './table-cell'
import { TableFooter } from './table-footer'

/** Compound component — `Table.ScrollContainer`, `Table.Content`, … (HeroUI v3 API). */
export const Table = Object.assign(TableRoot, {
  Root:            TableRoot,
  ScrollContainer: TableScrollContainer,
  Content:         TableContent,
  Header:          TableHeader,
  Column:          TableColumn,
  Body:            TableBody,
  Row:             TableRow,
  Cell:            TableCell,
  Footer:          TableFooter,
})

export {
  TableRoot,
  TableScrollContainer,
  TableContent,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
}

export { tableVariants } from '@heroui/styles'
export type { TableVariants } from '@heroui/styles'
