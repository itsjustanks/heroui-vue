/**
 * Avatar variants — HeroUI v3 `avatar.css` BEM classes.
 *
 * Size: `avatar--sm` | `avatar--md` | `avatar--lg`
 * Color (fallback): `avatar__fallback--{color}`
 * Variant: `avatar--soft`
 */
export type TAvatarSize = 'sm' | 'md' | 'lg'
export type TAvatarColor = 'default' | 'accent' | 'success' | 'warning' | 'danger'
export type TAvatarVariantName = 'default' | 'soft'

export interface TAvatarVariants {
  size?: TAvatarSize
  color?: TAvatarColor
  variant?: TAvatarVariantName
  /** @deprecated Use `size` with HeroUI values (sm/md/lg). Kept for back-compat. */
  shape?: 'circle' | 'square'
}

/** Returns HeroUI BEM class for avatar size. */
export function avatarSizeClass (size: TAvatarSize | undefined): string {
  switch (size) {
    case 'sm': return 'avatar--sm'
    case 'lg': return 'avatar--lg'
    default: return 'avatar--md'
  }
}

/** Returns HeroUI BEM class for avatar fallback color. */
export function avatarFallbackColorClass (color: TAvatarColor | undefined): string {
  switch (color) {
    case 'accent': return 'avatar__fallback--accent'
    case 'success': return 'avatar__fallback--success'
    case 'warning': return 'avatar__fallback--warning'
    case 'danger': return 'avatar__fallback--danger'
    default: return 'avatar__fallback--default'
  }
}

/**
 * @deprecated — HeroUI BEM classes are now applied directly by Avatar components.
 * Kept for import compatibility.
 */
export function avatarVariant (_opts?: TAvatarVariants): string {
  return 'avatar'
}
