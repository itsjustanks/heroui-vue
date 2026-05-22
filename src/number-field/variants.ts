import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Number-field-group cva variants — adapted from HeroUI v3 `numberFieldVariants`
 * (`packages/styles/src/components/number-field/number-field.styles.ts` +
 * `number-field.css`). HeroUI's BEM slots (`number-field__group`, `--primary`,
 * `--secondary`, `--full-width`) become Tailwind utilities on the repo's shadcn
 * tokens.
 *
 * HeroUI's group is a 3-column CSS grid (`40px 1fr 40px`) so the decrement /
 * input / increment parts line up; the same `grid-template-columns` is kept.
 * `primary` = `bg-background` + visible border + `shadow-sm`; `secondary` =
 * `bg-muted` with no shadow — HeroUI's "on surface" treatment.
 */
export const numberFieldGroupVariants = cva(
  cn(
    'group/number-field-group grid h-9 items-center overflow-hidden rounded-md border border-input text-sm text-foreground outline-none',
    'transition-[background-color,border-color,box-shadow]',
    'focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
    'has-[[data-invalid]]:border-destructive has-[[data-invalid]]:ring-destructive',
    'has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50',
    'motion-reduce:transition-none'
  ),
  {
    variants: {
      variant: {
        primary: 'bg-background shadow-sm hover:[&:not(:focus-within)]:bg-accent/40',
        secondary: 'bg-muted shadow-none hover:[&:not(:focus-within)]:bg-muted/70'
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-fit'
      }
    },
    defaultVariants: {
      variant: 'primary',
      fullWidth: false
    }
  }
)

export type TNumberFieldGroupVariants = VariantProps<typeof numberFieldGroupVariants>
