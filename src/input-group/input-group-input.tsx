import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { Input } from '@/input'

/**
 * InputGroupInput — the text control inside an `InputGroup`.
 *
 * Emits HeroUI v3 BEM class name from `input-group.css`:
 *   `input-group__input`
 * with `data-slot="input-group-input"` so the group's CSS selectors work.
 */
export const InputGroupInput = defineComponent({
  name: 'InputGroupInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <Input
        {...attrs}
        data-slot="input-group-input"
        class={cn('input-group__input', props.class)}
      />
    )
  }
})

export default InputGroupInput
