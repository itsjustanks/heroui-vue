import type { ComputedRef, InjectionKey } from 'vue'
import type { datePickerVariants } from '@heroui/styles'

/** The `datePickerVariants()` slot map — base, trigger, triggerIndicator, popover. */
export type DatePickerSlots = ReturnType<typeof datePickerVariants>

export interface DatePickerContext {
  /** Reactive slot map — recomputed from `datePickerVariants()`. */
  slots: ComputedRef<DatePickerSlots>
}

/** Provided by `DatePicker`, consumed by `.Trigger`, `.TriggerIndicator`, `.Popover`. */
export const DATE_PICKER_CONTEXT: InjectionKey<DatePickerContext> = Symbol('heroui-vue-date-picker')
