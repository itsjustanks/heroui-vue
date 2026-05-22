import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { inputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { INPUT_GROUP_CONTEXT } from './input-group-context'

/**
 * InputGroupInput — the text `<input>` inside an `InputGroup` (HeroUI `input-group__input`).
 * Faithful Vue port of HeroUI v3 `InputGroupInput`.
 */
export const InputGroupInput = defineComponent({
  name: 'InputGroupInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(INPUT_GROUP_CONTEXT, null)
    return () => (
      <input
        {...attrs}
        data-slot="input-group-input"
        class={cn((ctx?.slots.value ?? inputGroupVariants()).input(), props.class)}
      />
    )
  }
})

export default InputGroupInput
