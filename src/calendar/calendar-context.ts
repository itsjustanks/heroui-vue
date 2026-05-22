import type { ComputedRef, InjectionKey } from 'vue'
import type { calendarVariants } from '@heroui/styles'

/** The `calendarVariants()` slot map — one class-name function per Calendar part. */
export type CalendarSlots = ReturnType<typeof calendarVariants>

export interface CalendarContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<CalendarSlots>
}

/** Provided by `CalendarRoot`, consumed by every compound part. */
export const CALENDAR_CONTEXT: InjectionKey<CalendarContext> = Symbol('heroui-vue-calendar')
