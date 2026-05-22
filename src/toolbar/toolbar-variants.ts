import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * toolbarVariants — cva for the HeroUI-Vue Toolbar primitive.
 *
 * Faithful port of HeroUI v3 `toolbar.styles.ts` + `toolbar.css`. A toolbar is a
 * horizontal (or vertical) action bar. `isAttached` gives it a surface card
 * shell; `orientation` switches the flow axis.
 */
export const toolbarVariants = cva('grid w-fit items-center gap-2', {
  variants: {
    /** Flow axis. */
    orientation: {
      horizontal: 'grid-flow-col',
      vertical: 'grid-flow-row items-start justify-start'
    },
    /** When `true`, wraps controls in a rounded surface card. */
    isAttached: {
      true: 'rounded-3xl bg-card p-1 shadow-md',
      false: ''
    }
  },
  defaultVariants: {
    orientation: 'horizontal',
    isAttached: false
  }
})

export type TToolbarVariants = VariantProps<typeof toolbarVariants>
