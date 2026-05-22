import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * HeroUI-Vue Avatar variants.
 *
 * Faithful port of `shadcn/avatar`'s `avatarVariant` cva, restyled to HeroUI v3
 * taste (`avatar.css`): `bg-muted` surface, `rounded-full` circle. Same variant
 * keys / option names as the shadcn original — zero API drift.
 */
export const avatarVariant = cva(
  'inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-muted overflow-hidden',
  {
    variants: {
      size: {
        sm: 'h-10 w-10 text-xs',
        base: 'h-16 w-16 text-2xl',
        lg: 'h-32 w-32 text-5xl'
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-xl'
      }
    }
  }
)

export type TAvatarVariants = VariantProps<typeof avatarVariant>
