import type { VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from '@/button'
import { cva } from 'class-variance-authority'

/**
 * Input-group cva variants — ported verbatim from `shadcn/input-group`.
 * Kept in a sibling module so the barrel can re-export the exact same names
 * (`inputGroupAddonVariants`, `inputGroupButtonVariants`, …).
 */
export const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        'inline-start':
          'order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
        'inline-end':
          'order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]',
        'block-start':
          'order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5',
        'block-end':
          'order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5'
      }
    },
    defaultVariants: {
      align: 'inline-start'
    }
  }
)

// eslint-disable-next-line @typescript-eslint/naming-convention -- compat: name must match `shadcn/input-group` export
export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>

export const inputGroupButtonVariants = cva(
  'flex items-center gap-2 text-sm shadow-none',
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
        sm: 'h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5',
        'icon-xs': 'size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0',
        'icon-sm': 'size-8 p-0 has-[>svg]:p-0'
      }
    },
    defaultVariants: {
      size: 'xs'
    }
  }
)

// eslint-disable-next-line @typescript-eslint/naming-convention -- compat: name must match `shadcn/input-group` export
export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>

// eslint-disable-next-line @typescript-eslint/naming-convention -- compat: name must match `shadcn/input-group` export
export interface InputGroupButtonProps {
  variant?: ButtonVariants['variant']
  size?: InputGroupButtonVariants['size']
  class?: HTMLAttributes['class']
}
