import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { TagsInputRoot } from 'reka-ui'
import { tagGroupVariants, type TagVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TAG_GROUP_CONTEXT } from './tag-group-context'

/**
 * TagGroupRoot — the tag-group container. Faithful Vue port of HeroUI v3 `TagGroup`.
 *
 * Computes `tagGroupVariants` slot map and provides it, along with `size` and
 * `variant`, to child `TagGroupList` and `TagRoot` components — mirroring
 * HeroUI's `TagGroupContext`. All reka-ui `TagsInputRoot` props (`modelValue`,
 * `onUpdate:modelValue`, `addOnPaste`, `duplicate`, `disabled`, `delimiter`,
 * `max`, `required`, `name`, `id`, …) pass through via `{...attrs}`.
 */
export const TagGroupRoot = defineComponent({
  name: 'TagGroup',
  inheritAttrs: false,
  props: {
    class:   { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Tag size propagated to all child `TagRoot`s. */
    size:    { type: String as PropType<TagVariants['size']>, default: undefined },
    /** Tag variant propagated to all child `TagRoot`s. */
    variant: { type: String as PropType<TagVariants['variant']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const groupSlots = computed(() => tagGroupVariants())
    const size    = computed(() => props.size)
    const variant = computed(() => props.variant)

    provide(TAG_GROUP_CONTEXT, { slots: groupSlots, size, variant })

    return () => (
      <TagsInputRoot
        {...attrs}
        data-slot="tag-group"
        class={cn(groupSlots.value.base(), props.class)}
      >
        {slots.default?.()}
      </TagsInputRoot>
    )
  },
})

export default TagGroupRoot
