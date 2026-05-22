import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TagsInputInput as RekaTagsInputInput } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * TagsInputInput — the free-text field where new tags are typed.
 *
 * Faithful port over reka-ui `TagsInputInput`. Borderless, transparent — it
 * sits inside the `TagsInput` container and flexes to fill the remaining row.
 * Real-logic props (`placeholder`, `autoFocus`, `maxLength`, `as`, `asChild`)
 * flow through `{...attrs}`.
 */
export const TagsInputInput = defineComponent({
  name: 'TagsInputInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaTagsInputInput
        {...attrs}
        class={cn(
          'min-h-6 flex-1 bg-transparent px-1 text-sm placeholder:text-muted-foreground focus:outline-none',
          props.class
        )}
      />
    )
  }
})

export default TagsInputInput
