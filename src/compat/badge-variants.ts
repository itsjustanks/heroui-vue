import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * HeroUI-Vue Badge variants.
 *
 * Faithful port of `shadcn/badge`'s `badgeVariants` cva — every `variant` and
 * `size` key preserved verbatim (zero API drift). Restyled to HeroUI v3 chip
 * taste (`chip.css` / `badge.css`): `rounded-full` pill, `text-xs`, soft
 * semantic-color backgrounds keyed off the repo's tokens.
 */
export const badgeVariants = cva(
  'inline-flex gap-1 items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'border-border text-foreground',
        white: 'border-white/30 bg-white/90 text-gray-700 backdrop-blur-sm',
        green: 'border-transparent bg-emerald-50 text-emerald-700',
        blue: 'border-transparent bg-blue-50 text-blue-700',
        amber: 'border-transparent bg-amber-50 text-amber-700',
        gray: 'border-transparent bg-muted text-muted-foreground',
        red: 'border-transparent bg-red-50 text-red-700',
        yellow: 'border-transparent bg-yellow-50 text-yellow-700',
        orange: 'border-transparent bg-orange-50 text-orange-700',
        purple: 'border-transparent bg-purple-50 text-purple-700',
        indigo: 'border-transparent bg-indigo-50 text-indigo-700',
        pink: 'border-transparent bg-pink-50 text-pink-700',
        cyan: 'border-transparent bg-cyan-50 text-cyan-700',
        teal: 'border-transparent bg-teal-50 text-teal-700',
        lime: 'border-transparent bg-lime-50 text-lime-700',
        slate: 'border-transparent bg-slate-100 text-slate-600',
        stone: 'border-transparent bg-stone-100 text-stone-600',
        primary: 'border-transparent bg-primary-50 text-primary-700'
      },
      size: {
        default: 'px-2.5 py-0.5 text-xs',
        sm: 'px-2 py-0.5 text-[11px]',
        xs: 'px-1.5 py-0.5 text-[10px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type TBadgeVariants = VariantProps<typeof badgeVariants>

export const badgeDotColors: Record<string, string> = {
  gray: 'bg-neutral-800',
  primary: 'bg-primary-800',
  teal: 'bg-teal-800',
  blue: 'bg-blue-800',
  red: 'bg-red-800',
  yellow: 'bg-yellow-800',
  green: 'bg-green-800',
  pink: 'bg-pink-800',
  purple: 'bg-purple-800',
  orange: 'bg-orange-800',
  amber: 'bg-amber-800',
  default: 'bg-primary',
  secondary: 'bg-secondary',
  destructive: 'bg-destructive'
}

// All color-based variant keys available for the Badge `color` prop
export type TBadgeColor = Exclude<
  NonNullable<TBadgeVariants['variant']>,
  'default' | 'secondary' | 'destructive' | 'outline' | 'white'
>
