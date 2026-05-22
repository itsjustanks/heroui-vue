import type { ComputedRef, InjectionKey } from 'vue'
import type { badgeVariants } from '@heroui/styles'

/** The `badgeVariants()` slot map — one class-name function per Badge part. */
export type BadgeSlots = ReturnType<typeof badgeVariants>

export interface BadgeContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<BadgeSlots>
}

/** Provided by `Badge`, consumed by `Badge.Label` and `Badge.Anchor`. */
export const BADGE_CONTEXT: InjectionKey<BadgeContext> = Symbol('heroui-vue-badge')
