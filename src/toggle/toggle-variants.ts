import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * `toggleVariants` — HeroUI v3 `toggle-button` BEM variant map.
 *
 * Emits HeroUI BEM class names from `toggle-button.styles.js` and
 * `toggle-button.css`. Base is `toggle-button`; size and variant modifier
 * classes are appended. `isIconOnly` adds `toggle-button--icon-only`.
 */
export const toggleVariants = cva('toggle-button', {
  variants: {
    variant: {
      default: 'toggle-button--default',
      ghost: 'toggle-button--ghost'
    },
    size: {
      default: 'toggle-button--md',
      sm: 'toggle-button--sm',
      lg: 'toggle-button--lg'
    },
    isIconOnly: {
      true: 'toggle-button--icon-only',
      false: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    isIconOnly: false
  }
})

export type TToggleVariants = VariantProps<typeof toggleVariants>
