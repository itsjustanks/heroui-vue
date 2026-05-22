import type { ComputedRef, InjectionKey } from 'vue'
import type { linkVariants } from '@heroui/styles'

/** The `linkVariants()` slot map — one class-name function per Link part. */
export type LinkSlots = ReturnType<typeof linkVariants>

export interface LinkContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<LinkSlots>
}

/** Provided by `LinkRoot`, consumed by `LinkIcon`. */
export const LINK_CONTEXT: InjectionKey<LinkContext> = Symbol('heroui-vue-link')
