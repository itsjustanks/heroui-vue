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
 *   `Table.ColumnResizer`     — TableColumnResizer (Vue anatomy shim)
 *   `Table.Body`              — TableBody
 *   `Table.Row`               — TableRow
 *   `Table.Cell`              — TableCell
 *   `Table.Footer`            — TableFooter
 *   `Table.Collection`        — TableCollection (fragment shim)
 *   `Table.LoadMore`          — TableLoadMoreItem
 *   `Table.LoadMoreContent`   — TableLoadMoreContent
 *   `Table.ResizableContainer`— TableResizableContainer (Vue anatomy shim)
 *
 * Removed (breaking change from v0): TableHead, TableCaption, TableEmpty.
 *
 * @see https://www.heroui.com/docs/react/components/table
 */
import { TableRoot } from './table'
import { TableScrollContainer } from './table-scroll-container'
import { TableContent } from './table-content'
import { TableHeader } from './table-header'
import { TableColumn } from './table-column'
import { TableColumnResizer } from './table-column-resizer'
import { TableBody } from './table-body'
import { TableRow } from './table-row'
import { TableCell } from './table-cell'
import { TableFooter } from './table-footer'
import { TableCollection } from './table-collection'
import { TableLoadMoreItem } from './table-load-more-item'
import { TableLoadMoreContent } from './table-load-more-content'
import { TableResizableContainer } from './table-resizable-container'

/** Compound component — `Table.ScrollContainer`, `Table.Content`, … (HeroUI v3 API). */
export const Table = Object.assign(TableRoot, {
  Root:            TableRoot,
  ScrollContainer: TableScrollContainer,
  Content:         TableContent,
  Header:          TableHeader,
  Column:          TableColumn,
  ColumnResizer:   TableColumnResizer,
  Body:            TableBody,
  Row:             TableRow,
  Cell:            TableCell,
  Footer:          TableFooter,
  Collection:      TableCollection,
  LoadMore:        TableLoadMoreItem,
  LoadMoreContent: TableLoadMoreContent,
  ResizableContainer: TableResizableContainer,
})

export {
  TableRoot,
  TableScrollContainer,
  TableContent,
  TableHeader,
  TableColumn,
  TableColumnResizer,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableCollection,
  TableLoadMoreItem,
  TableLoadMoreContent,
  TableResizableContainer,
}

export { tableVariants } from '@heroui/styles'
export type { TableVariants } from '@heroui/styles'
