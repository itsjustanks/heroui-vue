import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * Meter cva variants — adapted from HeroUI v3 `meterVariants`
 * (`@heroui/styles` + `meter.css`).
 *
 * HeroUI's meter root is a 2-row CSS grid (`"label output" / "track track"`);
 * `meterTrackVariants` / `meterFillVariants` hold the `size`-driven height +
 * radius, and `color` drives the fill colour via a CSS variable. Here the
 * height/radius are folded into the track + fill cva, and `color` selects a
 * repo semantic token directly (`accent` is the default; the repo also has
 * `success` / `warning` / `danger`, used by `trend-chip`).
 */

/** Meter size scale — mirrors HeroUI `meter--sm` / `--md` / `--lg`. */
export type TMeterSize = 'sm' | 'md' | 'lg'
/** Meter colour scale — mirrors HeroUI `meter--{default,accent,success,warning,danger}`. */
export type TMeterColor = 'default' | 'accent' | 'success' | 'warning' | 'danger'

export const meterTrackVariants = cva(
  'relative w-full overflow-hidden bg-muted',
  {
    variants: {
      size: {
        sm: 'h-1 rounded-sm',
        md: 'h-2 rounded',
        lg: 'h-3 rounded-md'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

export const meterFillVariants = cva(
  'absolute left-0 top-0 h-full transition-[width] duration-300 ease-out motion-reduce:transition-none',
  {
    variants: {
      size: {
        sm: 'rounded-sm',
        md: 'rounded',
        lg: 'rounded-md'
      },
      color: {
        default: 'bg-foreground',
        accent: 'bg-accent-foreground',
        success: 'bg-success',
        warning: 'bg-warning',
        danger: 'bg-danger'
      }
    },
    defaultVariants: {
      size: 'md',
      color: 'accent'
    }
  }
)

export type TMeterTrackVariants = VariantProps<typeof meterTrackVariants>
export type TMeterFillVariants = VariantProps<typeof meterFillVariants>
