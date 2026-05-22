import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { alertVariants, AlertVariants } from '@heroui/styles'

/** The `alertVariants()` slot map — one class-name function per Alert part. */
export type AlertSlots = ReturnType<typeof alertVariants>

export interface AlertContext {
  /** Reactive slot map — recomputed when root `status` changes. */
  slots: ComputedRef<AlertSlots>
  /** The current status value — used by `Alert.Indicator` to render a default icon. */
  status: Ref<AlertVariants['status']>
}

/** Provided by `Alert`, consumed by every compound part. */
export const ALERT_CONTEXT: InjectionKey<AlertContext> = Symbol('heroui-vue-alert')
