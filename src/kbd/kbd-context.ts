import type { ComputedRef, InjectionKey } from 'vue'
import type { kbdVariants } from '@heroui/styles'

/** The `kbdVariants()` slot map — one class-name function per Kbd part. */
export type KbdSlots = ReturnType<typeof kbdVariants>

export interface KbdContext {
  /** Reactive slot map — recomputed when the root `variant` changes. */
  slots: ComputedRef<KbdSlots>
}

/** Provided by `Kbd`, consumed by `Kbd.Abbr` and `Kbd.Content`. */
export const KBD_CONTEXT: InjectionKey<KbdContext> = Symbol('heroui-vue-kbd')
