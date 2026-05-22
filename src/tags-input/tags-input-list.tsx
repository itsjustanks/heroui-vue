import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tagGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TAG_GROUP_CONTEXT } from './tag-group-context'

/**
 * TagGroupList — the list wrapper holding the tag chips. Faithful Vue port of
 * HeroUI v3 `TagGroup.List` (`tag-group__list`).
 *
 * In HeroUI React, this maps to `TagListPrimitive` from RAC. In Vue, we use a
 * plain `<div>` since reka-ui does not expose a separate list wrapper — the
 * `TagsInputRoot` itself is the list container.
 */
export const TagGroupList = defineComponent({
  name: 'TagGroupList',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TAG_GROUP_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="tag-group-list"
        class={cn((ctx?.slots.value ?? tagGroupVariants()).list(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  },
})

export default TagGroupList
