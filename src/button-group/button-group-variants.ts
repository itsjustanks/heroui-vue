/**
 * ButtonGroup variants — HeroUI v3 `button-group.css` BEM classes.
 *
 * HeroUI button-group BEM structure:
 *   `button-group` — base
 *   `button-group--horizontal` — horizontal layout (default)
 *   `button-group--vertical` — vertical layout
 *   `button-group--full-width` — stretches to container width
 *   `button-group__separator` — divider element between buttons
 */
export type TButtonGroupOrientation = 'horizontal' | 'vertical'

export interface ButtonGroupVariants {
  orientation?: TButtonGroupOrientation
  fullWidth?: boolean
}

/** Returns HeroUI BEM class string for a button-group. */
export function buttonGroupVariants (opts?: ButtonGroupVariants): string {
  const parts: string[] = ['button-group']

  const orientation = opts?.orientation ?? 'horizontal'
  parts.push(`button-group--${orientation}`)
  if (opts?.fullWidth) parts.push('button-group--full-width')

  return parts.join(' ')
}
