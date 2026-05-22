import { cva, type VariantProps } from 'class-variance-authority'

/**
 * ProgressCircle cva variants — adapted from HeroUI v3 `progressCircleVariants`
 * (`@heroui/styles` +
 * `progress-circle.css`).
 *
 * HeroUI's BEM keeps the `size` on the `<svg>` track (`size-5/7/9`) and the
 * `color` as a CSS variable on the fill `<circle>` stroke. Here `size` is a cva
 * on the SVG box, and `color` is a cva on the fill stroke — adapted to repo
 * semantic tokens (`accent` is the default; the repo also has `success` /
 * `warning` / `danger`, used by `trend-chip`).
 */
export const progressCircleTrackVariants = cva('', {
  variants: {
    size: {
      sm: 'size-5',
      md: 'size-7',
      lg: 'size-9'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export const progressCircleFillVariants = cva('', {
  variants: {
    color: {
      default: 'stroke-foreground',
      accent: 'stroke-accent-foreground',
      success: 'stroke-success',
      warning: 'stroke-warning',
      danger: 'stroke-danger'
    }
  },
  defaultVariants: {
    color: 'accent'
  }
})

export type TProgressCircleTrackVariants = VariantProps<typeof progressCircleTrackVariants>
export type TProgressCircleFillVariants = VariantProps<typeof progressCircleFillVariants>
