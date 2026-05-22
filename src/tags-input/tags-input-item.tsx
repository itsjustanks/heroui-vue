import { computed, defineComponent, inject, provide, type HTMLAttributes, type PropType } from 'vue'
import { TagsInputItem as TagsInputItemBase } from 'reka-ui'
// reka-ui props (value, disabled, …) forward at runtime via attrs.
const RekaTagsInputItem: any = TagsInputItemBase
import { tagVariants, type TagVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TAG_GROUP_CONTEXT } from './tag-group-context'
import { TAG_CONTEXT } from './tag-context'

/**
 * TagRoot — a single tag chip. Faithful Vue port of HeroUI v3 `Tag`.
 *
 * Resolves `size` and `variant` from the parent `TagGroupContext` (mirroring
 * HeroUI React), then falls back to its own props. Computes `tagVariants` slot
 * map and provides it to `TagRemoveButton`. All reka-ui `TagsInputItem` props
 * (`value`, `disabled`, `as`, `asChild`) pass through via `{...attrs}`.
 */
export const TagRoot = defineComponent({
  name: 'Tag',
  inheritAttrs: false,
  props: {
    class:   { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Tag size — falls back to parent `TagGroup` context. */
    size:    { type: String as PropType<TagVariants['size']>, default: undefined },
    /** Tag variant — falls back to parent `TagGroup` context. */
    variant: { type: String as PropType<TagVariants['variant']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const groupCtx = inject(TAG_GROUP_CONTEXT, null)

    const tagSlots = computed(() => {
      const resolvedSize    = props.size    ?? groupCtx?.size.value    ?? 'md'
      const resolvedVariant = props.variant ?? groupCtx?.variant.value ?? 'default'
      return tagVariants({ size: resolvedSize, variant: resolvedVariant })
    })

    provide(TAG_CONTEXT, { slots: tagSlots })

    return () => (
      <RekaTagsInputItem
        {...(attrs as Record<string, any>)}
        data-slot="tag"
        class={cn(tagSlots.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaTagsInputItem>
    )
  },
})

export default TagRoot
