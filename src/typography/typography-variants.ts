import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * typographyVariants — cva for the HeroUI-Vue Typography primitive.
 *
 * Faithful port of HeroUI v3 `typography.styles.ts` + `typography.css`. The
 * `type` scale (h1–h6, body/body-sm/body-xs, code) plus `align`, `color`,
 * `weight` and `truncate` are preserved verbatim; HeroUI tokens adapted to repo.
 */
export const typographyVariants = cva('text-foreground', {
  variants: {
    /** Text role / size step. */
    type: {
      h1: 'text-4xl font-semibold tracking-tight',
      h2: 'text-3xl font-semibold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
      h5: 'text-lg font-semibold tracking-tight',
      h6: 'text-base font-semibold tracking-tight',
      body: 'text-base leading-7',
      'body-sm': 'text-sm leading-6',
      'body-xs': 'text-xs leading-5',
      code: 'rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground'
    },
    /** Horizontal alignment. */
    align: {
      start: 'text-left rtl:text-right',
      center: 'text-center',
      end: 'text-right rtl:text-left',
      justify: 'text-justify'
    },
    /** Foreground color. */
    color: {
      default: 'text-foreground',
      muted: 'text-muted-foreground'
    },
    /** Font weight override. */
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    },
    /** Single-line truncation with ellipsis. */
    truncate: {
      true: 'block truncate'
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
