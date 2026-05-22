import type { ComputedRef, InjectionKey } from 'vue'
import type { tagGroupVariants, TagVariants } from '@heroui/styles'

/** The `tagGroupVariants()` slot map — `base` and `list`. */
export type TagGroupSlots = ReturnType<typeof tagGroupVariants>

export interface TagGroupContext {
  /** Reactive slot map for `TagGroupRoot` and `TagGroupList`. */
  slots: ComputedRef<TagGroupSlots>
  /** Propagated `size` for child `TagRoot` components (mirrors HeroUI's `TagGroupContext`). */
  size: ComputedRef<TagVariants['size'] | undefined>
  /** Propagated `variant` for child `TagRoot` components. */
  variant: ComputedRef<TagVariants['variant'] | undefined>
}

/** Provided by `TagGroupRoot`, consumed by `TagGroupList` and `TagRoot`. */
export const TAG_GROUP_CONTEXT: InjectionKey<TagGroupContext> = Symbol('heroui-vue-tag-group')
