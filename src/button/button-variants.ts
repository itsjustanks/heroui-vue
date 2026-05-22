/**
 * Button variants — HeroUI v3 `button.css` BEM classes.
 *
 * HeroUI button BEM structure:
 *   `button` — base
 *   `button--{variant}` — primary | secondary | tertiary | ghost | outline | danger | danger-soft
 *   `button--{size}` — sm | md | lg
 *   `button--icon-only` — square icon button (no label)
 *   `button--full-width` — stretches to container width
 */
export type TButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outline' | 'danger' | 'danger-soft'
export type TButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonVariants {
  variant?: TButtonVariant
  size?: TButtonSize
  isIconOnly?: boolean
  fullWidth?: boolean
}

/** Returns HeroUI BEM class string for a button. */
export function buttonVariants (opts?: ButtonVariants): string {
  const parts: string[] = ['button']

  const variant = opts?.variant ?? 'primary'
  const size = opts?.size ?? 'md'

  parts.push(`button--${variant}`)
  if (size !== 'md') parts.push(`button--${size}`)
  if (opts?.isIconOnly) parts.push('button--icon-only')
  if (opts?.fullWidth) parts.push('button--full-width')

  return parts.join(' ')
}
