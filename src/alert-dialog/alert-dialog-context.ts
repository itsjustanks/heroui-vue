import type { ComputedRef, InjectionKey } from 'vue'
import type { alertDialogVariants } from '@heroui/styles'

/** The `alertDialogVariants()` slot map — one class-name function per AlertDialog part. */
export type AlertDialogSlots = ReturnType<typeof alertDialogVariants>

export interface AlertDialogContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<AlertDialogSlots>
  /** Placement forwarded from `AlertDialogContainer`. */
  placement: ComputedRef<'auto' | 'top' | 'center' | 'bottom'>
}

/** Provided by `AlertDialogRoot`, consumed by every compound part. */
export const ALERT_DIALOG_CONTEXT: InjectionKey<AlertDialogContext> = Symbol('heroui-vue-alert-dialog')
