import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { NumberFieldInput as RekaNumberFieldInput } from 'reka-ui'
import { numberFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { NUMBER_FIELD_CONTEXT } from './number-field-context'

/**
 * NumberFieldInput — the numeric `<input>` (HeroUI `number-field__input`).
 * Faithful Vue port of HeroUI v3 `NumberFieldInput`.
 * Built over reka-ui `NumberFieldInput` which handles parsing and formatting.
 */
export const NumberFieldInput = defineComponent({
  name: 'NumberFieldInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(NUMBER_FIELD_CONTEXT, null)
    return () => (
      <RekaNumberFieldInput
        {...attrs}
        data-slot="number-field-input"
        class={cn((ctx?.slots.value ?? numberFieldVariants()).input(), props.class)}
      />
    )
  }
})

export default NumberFieldInput
