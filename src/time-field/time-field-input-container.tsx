import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TIME_FIELD_CONTEXT } from './time-field-context'

/**
 * TimeField.InputContainer — layout wrapper that holds the `TimeField.Input`.
 * HeroUI v3 `TimeField.InputContainer` (maps to `DateInputGroupInputContainer`).
 */
export const TimeFieldInputContainer = defineComponent({
  name: 'TimeFieldInputContainer',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TIME_FIELD_CONTEXT, null)

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

export default TimeFieldInputContainer
