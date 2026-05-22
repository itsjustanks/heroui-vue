import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { numberFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { NUMBER_FIELD_CONTEXT } from './number-field-context'

/**
 * NumberFieldGroup — the segmented input surface (HeroUI `number-field__group`).
 * Faithful Vue port of HeroUI v3 `NumberFieldGroup`.
 */
export const NumberFieldGroup = defineComponent({
  name: 'NumberFieldGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(NUMBER_FIELD_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        role="group"
        data-slot="number-field-group"
        class={cn((ctx?.slots.value ?? numberFieldVariants()).group(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default NumberFieldGroup
