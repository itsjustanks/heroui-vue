/**
 * Parity status for the live dashboard.
 *
 * Source of truth: PARITY.md (repo root). Keep the two in sync — this map
 * drives the sidebar dots, the per-component banner, and the header summary.
 *
 * Last full visual sweep: 2026-05-22.
 */

export type ParityStatus = 'match' | 'minor' | 'broken' | 'crash'

export interface ParityInfo {
  status: ParityStatus
  /** One-line description of the divergence (omitted when status is 'match'). */
  note?: string
}

/** Components that diverge. Anything not listed is treated as a clean match. */
const DIVERGENT: Record<string, ParityInfo> = {
  tooltip: {
    status: 'crash',
    note: 'Demo throws: Injection Symbol(TooltipProviderContext) not found.'
  },
  calendar: {
    status: 'broken',
    note: 'Day numbers do not render — cells show as bullet dots.'
  },
  accordion: {
    status: 'broken',
    note: 'Chevron icon rendered twice and not right-aligned.'
  },
  breadcrumb: {
    status: 'broken',
    note: 'Trailing separator after the last crumb; current page not styled.'
  },
  'range-calendar': {
    status: 'broken',
    note: 'Single-letter weekday headers; no muted outside days or today highlight.'
  },
  slider: {
    status: 'broken',
    note: 'Thumb is a hollow oblong pill instead of a filled white circle.'
  },
  tabs: {
    status: 'broken',
    note: 'Pills instead of a segmented-control track; panel content not rendered.'
  },
  'date-field': {
    status: 'minor',
    note: 'Empty date-segment placeholder renders too dark.'
  },
  'date-picker': {
    status: 'minor',
    note: 'Empty date-segment placeholder renders too dark.'
  },
  'date-range-picker': {
    status: 'minor',
    note: 'Empty date-segment placeholder renders too dark.'
  },
  'time-field': {
    status: 'minor',
    note: 'Empty time-segment placeholder renders too dark.'
  },
  toolbar: {
    status: 'minor',
    note: 'Vertical separator between groups is not visible.'
  }
}

const MATCH: ParityInfo = { status: 'match' }

/** Parity info for a component id; defaults to a clean match. */
export function parityOf (id: string): ParityInfo {
  return DIVERGENT[id] ?? MATCH
}

export const PARITY_LABEL: Record<ParityStatus, string> = {
  match: 'Match',
  minor: 'Minor gap',
  broken: 'Broken',
  crash: 'Crash'
}

/** Count of each status across the given component ids. */
export function paritySummary (ids: string[]): Record<ParityStatus, number> {
  const counts: Record<ParityStatus, number> = { match: 0, minor: 0, broken: 0, crash: 0 }
  for (const id of ids) counts[parityOf(id).status]++
  return counts
}
