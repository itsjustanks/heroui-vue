import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * HeroUI-Vue Item variants.
 *
 * Faithful port of `shadcn/item`'s `itemVariants` / `itemMediaVariants` cvas,
 * restyled to HeroUI v3 taste (`item-card.css`): a list-row surface with
 * `rounded-lg` corners, `gap-3`, and a soft `hover:bg-accent`. Same variant
 * keys / option names as the shadcn original — zero API drift.
 */
export const itemVariants = cva(
  'group/item flex items-center gap-3 border border-transparent text-sm rounded-lg transition-colors hover:bg-accent [a]:hover:bg-accent [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring focus-visible:ring-2',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border-border',
        muted: 'bg-muted/50'
      },
      size: {
        default: 'px-4 py-3',
        sm: 'py-2.5 px-3 gap-2.5'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export const itemMediaVariants = cva(
  'flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "size-9 rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4",
        image:
          'size-10 rounded-lg overflow-hidden [&_img]:size-full [&_img]:object-cover'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export type TItemVariants = VariantProps<typeof itemVariants>
export type TItemMediaVariants = VariantProps<typeof itemMediaVariants>
