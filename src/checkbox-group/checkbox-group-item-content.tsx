import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { checkboxVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CHECKBOX_CONTEXT } from '../checkbox/checkbox-context'

/**
 * CheckboxGroupItemContent — the label/description area of a `CheckboxGroupItem`.
 * Faithful port of HeroUI v3 `Checkbox.Content` (`checkbox__content`).
 *
 * Reads slot classes from `CHECKBOX_CONTEXT` provided by the parent `CheckboxGroupItem`.
 */
export const CheckboxGroupItemContent = defineComponent({
  name: 'CheckboxGroupItemContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CHECKBOX_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="checkbox-content"
        class={cn((ctx?.slots.value ?? checkboxVariants()).content(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default CheckboxGroupItemContent
