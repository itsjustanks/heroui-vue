import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TagsInputItemText as RekaTagsInputItemText } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * TagsInputItemText — the text label inside a {@link TagsInputItem} chip.
 *
 * Faithful port over reka-ui `TagsInputItemText`. Real-logic props (`as`,
 * `asChild`) flow through `{...attrs}`.
 */
export const TagsInputItemText = defineComponent({
  name: 'TagsInputItemText',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaTagsInputItemText
        {...attrs}
        class={cn('bg-transparent text-xs', props.class)}
      />
    )
  }
})

export default TagsInputItemText
