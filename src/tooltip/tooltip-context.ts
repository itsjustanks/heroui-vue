import type { ComputedRef, InjectionKey } from 'vue'
import type { tooltipVariants } from '@heroui/styles'

/** The `tooltipVariants()` slot map — one class-name function per Tooltip part. */
export type TooltipSlots = ReturnType<typeof tooltipVariants>

export interface TooltipContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<TooltipSlots>
}

/** Provided by `TooltipRoot`, consumed by every compound part. */
export const TOOLTIP_CONTEXT: InjectionKey<TooltipContext> = Symbol('heroui-vue-tooltip')
