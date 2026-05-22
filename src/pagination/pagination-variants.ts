import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * pagination size step — drives link/ellipsis sizing across the family.
 * Faithful port of HeroUI v3 `pagination.styles.ts` (`sm`/`md`/`lg`).
 */
export type TPaginationSize = 'sm' | 'md' | 'lg'

/**
 * paginationLinkVariants — cva for a single page-navigation control.
 *
 * Faithful port of HeroUI v3 `pagination__link` (ghost-button taste): square,
 * pill-radius, `data-[active]` adopts the tertiary (filled) look. The `nav`
 * variant widens Previous/Next so they can host an icon + label.
 */
export const paginationLinkVariants = cva(
  [
    'relative isolate inline-flex origin-center select-none items-center justify-center',
    'rounded-3xl text-sm font-medium whitespace-nowrap outline-none transition-[transform,background-color]',
    'text-foreground hover:bg-accent active:scale-[0.97]',
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'data-[selected]:bg-muted data-[active=true]:bg-muted',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
  ],
  {
    variants: {
      size: {
        sm: 'size-8 text-xs md:size-7',
        md: 'size-9 md:size-8',
        lg: 'size-10 text-base md:size-9'
      },
      /** Wide layout for Previous / Next controls. */
      nav: {
        true: 'w-auto gap-1.5 px-2.5',
        false: ''
      }
    },
    defaultVariants: {
      size: 'md',
      nav: false
    }
  }
)

export type TPaginationLinkVariants = VariantProps<typeof paginationLinkVariants>

/**
 * paginationEllipsisVariants — cva for the truncation gap glyph (`…`).
 * Square, muted, same footprint as a link at each size step.
 */
export const paginationEllipsisVariants = cva(
  'inline-flex select-none items-center justify-center text-muted-foreground',
  {
    variants: {
      size: {
        sm: 'size-8 text-xs md:size-7',
        md: 'size-9 text-sm md:size-8',
        lg: 'size-10 text-base md:size-9'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)
