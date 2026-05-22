/**
 * chipVariants — HeroUI v3 BEM class builder for the Chip primitive.
 *
 * Returns the BEM class names taken verbatim from `chip.styles.js`:
 *   base: "chip"  +  color modifier  +  variant modifier  +  size modifier
 * HeroUI's CSS compound rules handle color × variant combinations.
 */

export type TChipVariants = {
  color?: 'default' | 'accent' | 'success' | 'warning' | 'danger'
  variant?: 'primary' | 'secondary' | 'soft' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
}

export function chipVariants ({ color, variant, size }: TChipVariants = {}): string {
  const classes = ['chip']
  if (color) classes.push(`chip--${color}`)
  if (variant) classes.push(`chip--${variant}`)
  if (size) classes.push(`chip--${size}`)
  return classes.join(' ')
}
