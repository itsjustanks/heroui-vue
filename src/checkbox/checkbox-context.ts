import type { ComputedRef, InjectionKey } from 'vue'
import type { checkboxVariants } from '@heroui/styles'

/** The `checkboxVariants()` slot map — one class-name function per Checkbox part. */
export type CheckboxSlots = ReturnType<typeof checkboxVariants>

export interface CheckboxContext {
  /** Reactive slot map — recomputed when the root `variant` changes. */
  slots: ComputedRef<CheckboxSlots>
}

/** Provided by `CheckboxRoot`, consumed by `Checkbox.Control`, `Checkbox.Indicator`, `Checkbox.Content`. */
export const CHECKBOX_CONTEXT: InjectionKey<CheckboxContext> = Symbol('heroui-vue-checkbox')
