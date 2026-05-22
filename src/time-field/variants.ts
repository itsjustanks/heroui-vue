import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Date-input-group cva variants — adapted from HeroUI v3 `dateInputGroupVariants`
 * (`@heroui/styles`). HeroUI's BEM slots
 * (`date-input-group`, `--primary`, `--secondary`, `--full-width`) become
 * Tailwind utilities on the repo's shadcn tokens. Shared by `time-field`,
 * `date-picker` and `date-range-picker` — every HeroUI date control uses the
 * same segmented-input surface.
 *
 * `primary` = `bg-background` + visible border (default); `secondary` =
 * `bg-muted` borderless — HeroUI's "on surface" treatment.
 */
export const dateInputGroupVariants = cva(
  cn(
    'group/date-input-group flex h-10 items-center gap-1.5 rounded-md px-3 text-sm',
    'transition-[color,box-shadow]',
    'focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
    'has-[[data-invalid]]:ring-destructive',
    'has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50'
  ),
  {
    variants: {
      variant: {
        primary: 'border border-input bg-background',
        secondary: 'border border-transparent bg-muted'
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

export type TDateInputGroupVariants = VariantProps<typeof dateInputGroupVariants>
