import type { ComputedRef, InjectionKey } from 'vue'
import type { dropdownVariants } from '@heroui/styles'

/** The `dropdownVariants()` slot map — one class-name function per Dropdown part. */
export type DropdownSlots = ReturnType<typeof dropdownVariants>

export interface DropdownContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<DropdownSlots>
}

/** Provided by `DropdownRoot`, consumed by every compound part. */
export const DROPDOWN_CONTEXT: InjectionKey<DropdownContext> = Symbol('heroui-vue-dropdown')
