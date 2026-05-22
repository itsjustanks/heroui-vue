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

/**
 * Components that diverge. Anything not listed is treated as a clean match.
 *
 * Every entry from the 2026-05-22 sweep has been resolved — see PARITY.md for
 * the per-component fix notes. This map is intentionally empty; add a component
 * back only when a fresh regression is found.
 */
const DIVERGENT: Record<string, ParityInfo> = {}

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
