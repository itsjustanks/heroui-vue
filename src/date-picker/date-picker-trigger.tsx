import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DatePickerTrigger as RekaDatePickerTrigger } from 'reka-ui'
import { datePickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_PICKER_CONTEXT } from './date-picker-context'

/**
 * DatePicker.Trigger — the button that opens the date-picker popover.
 * HeroUI v3 `DatePicker.Trigger`.
 */
export const DatePickerTrigger = defineComponent({
  name: 'DatePickerTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_PICKER_CONTEXT, null)

    return () => (
      <RekaDatePickerTrigger
        {...attrs}
        data-slot="date-picker-trigger"
        class={cn((ctx?.slots.value ?? datePickerVariants()).trigger(), props.class)}
      >
        {slots.default?.()}
      </RekaDatePickerTrigger>
    )
  }
})

export default DatePickerTrigger
