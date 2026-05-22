import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_INPUT_GROUP_CONTEXT } from './date-input-group-context'

/**
 * DateInputGroup.InputContainer — layout wrapper around `DateInputGroup.Input`.
 * HeroUI v3 `DateInputGroup.InputContainer`
 * (`data-slot="date-input-group-input-container"`).
 */
export const DateInputGroupInputContainer = defineComponent({
  name: 'DateInputGroupInputContainer',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_INPUT_GROUP_CONTEXT, null)

    return () => (
      <div
        {...attrs}
        data-slot="date-input-group-input-container"
        class={cn((ctx?.slots.value ?? dateInputGroupVariants()).inputContainer(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  },
})

export default DateInputGroupInputContainer
