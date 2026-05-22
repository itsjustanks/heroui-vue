import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * chipVariants — cva for the HeroUI-Vue Chip primitive.
 *
 * Faithful port of HeroUI v3 `chip.styles.ts` + `chip.css`. A Chip is a compact,
 * pill-shaped tag — distinct from `badge`. HeroUI's `color` × `variant` matrix is
 * preserved verbatim (`color`: default/accent/success/warning/danger;
 * `variant`: primary/secondary/tertiary/soft; `size`: sm/md/lg). HeroUI's oklch
 * theme tokens are adapted to the repo's tokens; `rounded-full` pill radius.
 */
export const chipVariants = cva(
  'inline-flex shrink-0 items-center gap-0.5 rounded-full font-medium',
  {
    variants: {
      /** Foreground/background color family. */
      color: {
        default: 'text-foreground',
        accent: 'text-primary-700',
        success: 'text-emerald-700',
        warning: 'text-amber-700',
        danger: 'text-destructive'
      },
      /** Visual emphasis. */
      variant: {
        primary: '',
        secondary: 'bg-muted',
        tertiary: 'bg-transparent',
        soft: ''
      },
      /** Density. */
      size: {
        sm: 'px-1 py-0 text-xs',
        md: 'px-2 py-0.5 text-xs leading-5',
        lg: 'px-3 py-1 text-sm'
      }
    },
    compoundVariants: [
      // Primary — solid backgrounds
      { variant: 'primary', color: 'default', class: 'bg-muted text-foreground' },
      { variant: 'primary', color: 'accent', class: 'bg-primary text-primary-foreground' },
      { variant: 'primary', color: 'success', class: 'bg-emerald-600 text-white' },
      { variant: 'primary', color: 'warning', class: 'bg-amber-500 text-white' },
      { variant: 'primary', color: 'danger', class: 'bg-destructive text-destructive-foreground' },
      // Soft — muted backgrounds
      { variant: 'soft', color: 'default', class: 'bg-muted text-foreground' },
      { variant: 'soft', color: 'accent', class: 'bg-primary-50 text-primary-700' },
      { variant: 'soft', color: 'success', class: 'bg-emerald-50 text-emerald-700' },
      { variant: 'soft', color: 'warning', class: 'bg-amber-50 text-amber-700' },
      { variant: 'soft', color: 'danger', class: 'bg-red-50 text-destructive' }
    ],
    defaultVariants: {
      color: 'default',
      variant: 'secondary',
      size: 'md'
    }
  }
)

export type TChipVariants = VariantProps<typeof chipVariants>
