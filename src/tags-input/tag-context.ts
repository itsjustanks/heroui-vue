import type { ComputedRef, InjectionKey } from 'vue'
import type { tagVariants } from '@heroui/styles'

/** The `tagVariants()` slot map — `base` and `removeButton`. */
export type TagSlots = ReturnType<typeof tagVariants>

export interface TagContext {
  /** Reactive slot map — recomputed when `size` / `variant` change. */
  slots: ComputedRef<TagSlots>
}

/** Provided by `TagRoot`, consumed by `TagRemoveButton`. */
export const TAG_CONTEXT: InjectionKey<TagContext> = Symbol('heroui-vue-tag')
