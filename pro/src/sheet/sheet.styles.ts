import { cn } from '../lib/utils'

export type TSheetBackdrop = 'blur' | 'opaque' | 'transparent'
export type TSheetPlacement = 'bottom' | 'left' | 'right' | 'top'

export function sheetVariants (options: { backdrop?: TSheetBackdrop, placement?: TSheetPlacement } = {}) {
  const backdrop = options.backdrop ?? 'opaque'
  const placement = options.placement ?? 'bottom'

  return {
    backdrop: (className?: string) => cn('sheet__backdrop', `sheet__backdrop--${backdrop}`, className),
    body: (className?: string) => cn('sheet__body', className),
    closeTrigger: (className?: string) => cn('sheet__close-trigger', className),
    content: (className?: string) => cn('sheet__content', `sheet__content--${placement}`, className),
    dialog: (className?: string) => cn('sheet__dialog', `sheet__dialog--${placement}`, className),
    footer: (className?: string) => cn('sheet__footer', className),
    handle: (className?: string) => cn('sheet__handle', className),
    handleBar: (className?: string) => cn('sheet__handle-bar', className),
    header: (className?: string) => cn('sheet__header', className),
    heading: (className?: string) => cn('sheet__heading', className)
  }
}

export type TSheetVariants = ReturnType<typeof sheetVariants>
export type SheetVariants = TSheetVariants
