import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * typographyVariants — HeroUI v3 `typography` BEM variant map.
 *
 * Emits HeroUI BEM class names from `typography.styles.js` + `typography.css`.
 * Base is `typography`; type, align, color, weight, and truncate modifiers
 * are appended as BEM modifier classes.
 */
export const typographyVariants = cva('typography', {
  variants: {
    /** Text role / size step. */
    type: {
      h1: 'typography--h1',
      h2: 'typography--h2',
      h3: 'typography--h3',
      h4: 'typography--h4',
      h5: 'typography--h5',
      h6: 'typography--h6',
      body: 'typography--body',
      'body-sm': 'typography--body-sm',
      'body-xs': 'typography--body-xs',
      code: 'typography--code'
    },
    /** Horizontal alignment. */
    align: {
      start: 'typography--align-start',
      center: 'typography--align-center',
      end: 'typography--align-end',
      justify: 'typography--align-justify'
    },
    /** Foreground color. */
    color: {
      default: 'typography--color-default',
      muted: 'typography--color-muted'
    },
    /** Font weight override. */
    weight: {
      normal: 'typography--weight-normal',
      medium: 'typography--weight-medium',
      semibold: 'typography--weight-semibold',
      bold: 'typography--weight-bold'
    },
    /** Single-line truncation with ellipsis. */
    truncate: {
      true: 'typography--truncate'
    }
  },
  defaultVariants: {
    type: 'body',
    align: 'start',
    color: 'default'
  }
})

export type TTypographyVariants = VariantProps<typeof typographyVariants>
export type TTypographyType = NonNullable<TTypographyVariants['type']>
