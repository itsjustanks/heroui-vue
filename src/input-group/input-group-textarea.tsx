import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { inputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { INPUT_GROUP_CONTEXT } from './input-group-context'

/**
 * InputGroupTextArea — the `<textarea>` inside an `InputGroup` (HeroUI `input-group__input`).
 * Faithful Vue port of HeroUI v3 `InputGroupTextArea`.
 */
export const InputGroupTextArea = defineComponent({
  name: 'InputGroupTextArea',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(INPUT_GROUP_CONTEXT, null)
    return () => (
      <textarea
        {...attrs}
        data-slot="input-group-textarea"
        class={cn((ctx?.slots.value ?? inputGroupVariants()).input(), props.class)}
      />
    )
  }
})

export default InputGroupTextArea
