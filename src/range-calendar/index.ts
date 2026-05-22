/**
 * RangeCalendar — faithful Vue port of HeroUI v3 `RangeCalendar`.
 *
 * Compound API (HeroUI v3):
 *   `RangeCalendar` / `RangeCalendar.Root`
 *   `RangeCalendar.Header`
 *   `RangeCalendar.Heading`
 *   `RangeCalendar.NavButton`       (slot="previous" | "next")
 *   `RangeCalendar.Grid`
 *   `RangeCalendar.GridHeader`
 *   `RangeCalendar.GridBody`
 *   `RangeCalendar.GridRow`
 *   `RangeCalendar.HeaderCell`
 *   `RangeCalendar.Cell`
 *   `RangeCalendar.CellIndicator`
 *
 * Named flat exports (`RangeCalendarRoot`, `RangeCalendarHeader`, …) are
 * available for callers that prefer explicit imports.
 *
 * Keeps reka-ui primitives (`RangeCalendarRoot`, `RangeCalendarGrid`,
 * `RangeCalendarCell`, `RangeCalendarCellTrigger`, …) and
 * `@internationalized/date` as the date engine.
 */
import { RangeCalendarRoot } from './range-calendar'
import { RangeCalendarHeader } from './range-calendar-header'
import { RangeCalendarHeading } from './range-calendar-heading'
import { RangeCalendarNavButton } from './range-calendar-nav-button'
import { RangeCalendarGrid } from './range-calendar-grid'
import { RangeCalendarGridHeader } from './range-calendar-grid-header'
import { RangeCalendarGridBody } from './range-calendar-grid-body'
import { RangeCalendarGridRow } from './range-calendar-grid-row'
import { RangeCalendarHeaderCell } from './range-calendar-header-cell'
import { RangeCalendarCell } from './range-calendar-cell'
import { RangeCalendarCellIndicator } from './range-calendar-cell-indicator'

/** Compound component — `RangeCalendar.Header`, `RangeCalendar.NavButton`, … (HeroUI v3 API). */
export const RangeCalendar = Object.assign(RangeCalendarRoot, {
  Root: RangeCalendarRoot,
  Header: RangeCalendarHeader,
  Heading: RangeCalendarHeading,
  NavButton: RangeCalendarNavButton,
  Grid: RangeCalendarGrid,
  GridHeader: RangeCalendarGridHeader,
  GridBody: RangeCalendarGridBody,
  GridRow: RangeCalendarGridRow,
  HeaderCell: RangeCalendarHeaderCell,
  Cell: RangeCalendarCell,
  CellIndicator: RangeCalendarCellIndicator,
})

export {
  RangeCalendarRoot,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNavButton,
  RangeCalendarGrid,
  RangeCalendarGridHeader,
  RangeCalendarGridBody,
  RangeCalendarGridRow,
  RangeCalendarHeaderCell,
  RangeCalendarCell,
  RangeCalendarCellIndicator,
}

export { rangeCalendarVariants } from '@heroui/styles'
export type { RangeCalendarVariants } from '@heroui/styles'
