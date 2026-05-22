import type { ComputedRef, InjectionKey } from 'vue'
import type { radioVariants } from '@heroui/styles'

/** The `radioVariants()` slot map — one class-name function per Radio part. */
export type RadioSlots = ReturnType<typeof radioVariants>

export interface RadioContext {
  /** Reactive slot map. */
  slots: ComputedRef<RadioSlots>
}

/** Provided by `RadioRoot`, consumed by `Radio.Control`, `Radio.Indicator`, `Radio.Content`. */
export const RADIO_CONTEXT: InjectionKey<RadioContext> = Symbol('heroui-vue-radio')
