/**
 * Alert status type — mirrors HeroUI v3 `alertVariants` status keys.
 * BEM modifier classes: `alert--default`, `alert--accent`, `alert--success`,
 * `alert--warning`, `alert--danger`.
 */
export type TAlertStatus = 'default' | 'accent' | 'success' | 'warning' | 'danger'

// Legacy compat alias — consumers that imported TAlertVariants / AlertVariants continue to compile.
export interface TAlertVariants {
  /** @deprecated Use `status` prop on `Alert` instead */
  variant?: TAlertStatus
}

/** @deprecated Use `TAlertStatus` directly */
export type AlertVariants = TAlertVariants

/** Map a status value to its HeroUI BEM modifier class. */
export function alertStatusClass (status: TAlertStatus | undefined): string {
  switch (status) {
    case 'accent': return 'alert--accent'
    case 'success': return 'alert--success'
    case 'warning': return 'alert--warning'
    case 'danger': return 'alert--danger'
    default: return 'alert--default'
  }
}

/**
 * @deprecated — HeroUI BEM classes are now applied directly by the Alert component.
 * Kept for import compatibility; returns an empty string.
 */
export function alertVariants (_opts?: { variant?: TAlertStatus }): string {
  return ''
}
