import type { ComputedRef, InjectionKey } from 'vue'
import type { comboBoxVariants } from '@heroui/styles'

/** The `comboBoxVariants()` slot map — one class-name function per ComboBox part. */
export type ComboBoxSlots = ReturnType<typeof comboBoxVariants>

export interface ComboBoxContext {
  /** Reactive slot map — recomputed when root `fullWidth` changes. */
  slots: ComputedRef<ComboBoxSlots>
}

/** Provided by `ComboBoxRoot`, consumed by every compound part. */
export const COMBO_BOX_CONTEXT: InjectionKey<ComboBoxContext> = Symbol('heroui-vue-combo-box')
