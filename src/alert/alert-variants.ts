import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * Alert variants — HeroUI v3 `alert.css` adapted to the repo.
 *
 * HeroUI uses a `rounded-3xl` surface with semantic-color variant modifiers
 * (`alert--default/--danger/…`). Restyled here to `rounded-xl border` and the
 * repo's shadcn tokens (`bg-background`, `text-foreground`, `border-destructive`).
 * The icon-positioning utilities (`[&>svg]:absolute …`) are kept verbatim so the
 * leading-icon layout from the shadcn component is preserved.
 */
export const alertVariants = cva(
  'relative w-full rounded-xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export type TAlertVariants = VariantProps<typeof alertVariants>

/** Compat type alias — re-exported under the shadcn name from `index.ts`. */
export type { TAlertVariants as AlertVariants }
