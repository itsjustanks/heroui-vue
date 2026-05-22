import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_CONTEXT } from './date-field-context'

/**
 * DateField.InputContainer — layout wrapper that holds the `DateField.Input`.
 * HeroUI v3 `DateField.InputContainer` (maps to `DateInputGroupInputContainer`).
 */
export const DateFieldInputContainer = defineComponent({
  name: 'DateFieldInputContainer',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_FIELD_CONTEXT, null)

    return () => (
      <div
        {...attrs}
        data-slot="date-input-group-input-container"
        class={cn((ctx?.slots.value ?? dateInputGroupVariants()).inputContainer(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DateFieldInputContainer
