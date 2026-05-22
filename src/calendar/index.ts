/**
 * Calendar — faithful Vue port of HeroUI v3 `Calendar`.
 *
 * Compound API (HeroUI v3):
 *   `Calendar` / `Calendar.Root`
 *   `Calendar.Header`
 *   `Calendar.Heading`
 *   `Calendar.NavButton`       (slot="previous" | "next")
 *   `Calendar.Grid`
 *   `Calendar.GridHeader`
 *   `Calendar.GridBody`
 *   `Calendar.GridRow`
 *   `Calendar.HeaderCell`
 *   `Calendar.Cell`
 *   `Calendar.CellIndicator`
 *
 * Named flat exports (`CalendarRoot`, `CalendarHeader`, …) are available for
 * callers that prefer explicit imports.
 *
 * Keeps reka-ui primitives (`CalendarRoot`, `CalendarGrid`, `CalendarCell`,
 * `CalendarCellTrigger`, …) and `@internationalized/date` as the date engine.
 */
import { CalendarRoot } from './calendar'
import { CalendarHeader } from './calendar-header'
import { CalendarHeading } from './calendar-heading'
import { CalendarNavButton } from './calendar-nav-button'
import { CalendarGrid } from './calendar-grid'
import { CalendarGridHeader } from './calendar-grid-header'
import { CalendarGridBody } from './calendar-grid-body'
import { CalendarGridRow } from './calendar-grid-row'
import { CalendarHeaderCell } from './calendar-header-cell'
import { CalendarCell } from './calendar-cell'
import { CalendarCellIndicator } from './calendar-cell-indicator'

/** Compound component — `Calendar.Header`, `Calendar.NavButton`, … (HeroUI v3 API). */
export const Calendar = Object.assign(CalendarRoot, {
  Root: CalendarRoot,
  Header: CalendarHeader,
  Heading: CalendarHeading,
  NavButton: CalendarNavButton,
  Grid: CalendarGrid,
  GridHeader: CalendarGridHeader,
  GridBody: CalendarGridBody,
  GridRow: CalendarGridRow,
  HeaderCell: CalendarHeaderCell,
  Cell: CalendarCell,
  CellIndicator: CalendarCellIndicator,
})

export {
  CalendarRoot,
  CalendarHeader,
  CalendarHeading,
  CalendarNavButton,
  CalendarGrid,
  CalendarGridHeader,
  CalendarGridBody,
  CalendarGridRow,
  CalendarHeaderCell,
  CalendarCell,
  CalendarCellIndicator,
}

export { calendarVariants } from '@heroui/styles'
export type { CalendarVariants } from '@heroui/styles'
