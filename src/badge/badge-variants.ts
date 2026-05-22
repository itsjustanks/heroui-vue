/**
 * Badge variants — HeroUI v3 `badge.css` BEM classes.
 *
 * HeroUI badge BEM structure:
 *   `badge` — base element
 *   `badge--{color}` — color modifier (accent/default/success/warning/danger)
 *   `badge--{variant}` — variant modifier (primary/secondary/soft)
 *   `badge--{size}` — size modifier (sm/md/lg)
 *   `badge--{placement}` — placement modifier (top-right/top-left/bottom-right/bottom-left)
 *   `badge-anchor` — wrapper when badge is positioned relative to another element
 *   `badge__label` — inner text label element
 */

export type TBadgeColor = 'default' | 'accent' | 'success' | 'warning' | 'danger'
export type TBadgeVariantName = 'primary' | 'secondary' | 'soft'
export type TBadgeSize = 'sm' | 'md' | 'lg'
export type TBadgePlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface TBadgeVariants {
  color?: TBadgeColor
  variant?: TBadgeVariantName
  size?: TBadgeSize
  placement?: TBadgePlacement
}

/** Returns all HeroUI BEM classes for a badge. */
export function badgeVariants (opts?: TBadgeVariants): string {
  const parts: string[] = ['badge']

  const color = opts?.color ?? 'default'
  const variant = opts?.variant ?? 'primary'
  const size = opts?.size ?? 'md'

  parts.push(`badge--${color}`)
  parts.push(`badge--${variant}`)
  if (size !== 'md') parts.push(`badge--${size}`)
  if (opts?.placement) parts.push(`badge--${opts.placement}`)

  return parts.join(' ')
}

/**
 * @deprecated — dot indicator colors are now handled purely by design tokens
 * in @heroui/styles. Kept for import compatibility.
 */
export const badgeDotColors: Record<string, string> = {}
