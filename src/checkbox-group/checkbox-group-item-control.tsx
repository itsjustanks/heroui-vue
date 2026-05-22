import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { checkboxVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CHECKBOX_CONTEXT } from '../checkbox/checkbox-context'

/**
 * CheckboxGroupItemControl — the square control box of a `CheckboxGroupItem`.
 * Faithful port of HeroUI v3 `Checkbox.Control` (`checkbox__control`).
 *
 * Reads slot classes from `CHECKBOX_CONTEXT` provided by the parent `CheckboxGroupItem`.
 */
export const CheckboxGroupItemControl = defineComponent({
  name: 'CheckboxGroupItemControl',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CHECKBOX_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="checkbox-control"
        class={cn((ctx?.slots.value ?? checkboxVariants()).control(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default CheckboxGroupItemControl
