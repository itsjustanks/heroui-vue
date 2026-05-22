import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * toolbarVariants — HeroUI v3 `toolbar` BEM variant map.
 *
 * Emits HeroUI BEM class names from `toolbar.styles.js` + `toolbar.css`.
 * Base is `toolbar`; orientation and attached modifier classes are appended.
 */
export const toolbarVariants = cva('toolbar', {
  variants: {
    /** Flow axis. */
    orientation: {
      horizontal: 'toolbar--horizontal',
      vertical: 'toolbar--vertical'
    },
    /** When `true`, wraps controls in a rounded surface card. */
    isAttached: {
      true: 'toolbar--attached',
      false: ''
    }
  },
  defaultVariants: {
    orientation: 'horizontal',
    isAttached: false
  }
})

export type TToolbarVariants = VariantProps<typeof toolbarVariants>
