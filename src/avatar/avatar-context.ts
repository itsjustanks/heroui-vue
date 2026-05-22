import type { ComputedRef, InjectionKey } from 'vue'
import type { avatarVariants } from '@heroui/styles'

/** The `avatarVariants()` slot map — one class-name function per Avatar part. */
export type AvatarSlots = ReturnType<typeof avatarVariants>

export interface AvatarContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<AvatarSlots>
}

/** Provided by `Avatar`, consumed by `Avatar.Image` and `Avatar.Fallback`. */
export const AVATAR_CONTEXT: InjectionKey<AvatarContext> = Symbol('heroui-vue-avatar')
