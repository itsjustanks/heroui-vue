import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { Textarea } from '@/textarea'

/**
 * InputGroupTextarea — the textarea control inside an `InputGroup`.
 *
 * Emits HeroUI v3 BEM class names from `input-group.css`:
 *   `input-group__input` (same base as input, scoped via data-slot)
 * with `data-slot="input-group-textarea"` so the group's CSS selectors work.
 */
export const InputGroupTextarea = defineComponent({
  name: 'InputGroupTextarea',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <Textarea
        {...attrs}
        data-slot="input-group-textarea"
        class={cn('input-group__input', props.class)}
      />
    )
  }
})

export default InputGroupTextarea
