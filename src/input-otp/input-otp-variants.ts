import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * inputOTPSlotVariants — cva for a single one-time-code segment box.
 *
 * Faithful port of HeroUI v3 `input-otp__slot` (`input-otp.css`): a bordered,
 * rounded field cell that lights up while active and tints when filled. The
 * `primary` variant carries a field shadow; `secondary` is flat on a soft
 * background. HeroUI's oklch field tokens are adapted to the repo's tokens.
 */
export const inputOTPSlotVariants = cva(
  [
    'relative flex h-10 w-10 items-center justify-center',
    'rounded-xl border text-sm font-semibold outline-none transition-[background-color,border-color,box-shadow]',
    'data-[active]:z-10 data-[active]:border-ring data-[active]:ring-2 data-[active]:ring-ring/30'
  ],
  {
    variants: {
      variant: {
        primary: 'border-input bg-background text-foreground shadow-sm hover:bg-accent/40',
        secondary: 'border-transparent bg-muted text-foreground hover:bg-muted/80'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)

export type TInputOTPSlotVariants = VariantProps<typeof inputOTPSlotVariants>
export type TInputOTPVariant = NonNullable<TInputOTPSlotVariants['variant']>
