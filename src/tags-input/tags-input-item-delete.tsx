import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { TagsInputItemDelete as RekaTagsInputItemDelete } from 'reka-ui'
import { tagVariants } from '@heroui/styles'
import { IconX } from '@/icons'
import { cn } from '@/lib/utils'
import { TAG_CONTEXT } from './tag-context'

/**
 * TagRemoveButton — the remove control inside a `TagRoot`. Faithful Vue port of
 * HeroUI v3 `Tag.RemoveButton` (`tag__remove-button`).
 *
 * Reads `tag__remove-button` class from the parent `TagContext`. Defaults to an
 * `IconX` glyph; override via default slot. All reka-ui `TagsInputItemDelete`
 * props (`as`, `asChild`) pass through via `{...attrs}`.
 */
export const TagRemoveButton = defineComponent({
  name: 'TagRemoveButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TAG_CONTEXT, null)
    return () => (
      <RekaTagsInputItemDelete
        {...attrs}
        aria-label="Remove tag"
        data-slot="tag-remove-button"
        class={cn((ctx?.slots.value ?? tagVariants()).removeButton(), props.class)}
      >
        {slots.default?.() ?? <IconX class="size-3" />}
      </RekaTagsInputItemDelete>
    )
  },
})

export default TagRemoveButton
