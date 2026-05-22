import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { IconCalendarDays } from '@/icons'
import { datePickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_PICKER_CONTEXT } from './date-picker-context'

/**
 * DatePicker.TriggerIndicator — the calendar icon indicator inside the trigger.
 * HeroUI v3 `DatePicker.TriggerIndicator`.
 *
 * Renders `aria-hidden="true"`. Pass children to override the default calendar icon.
 */
export const DatePickerTriggerIndicator = defineComponent({
  name: 'DatePickerTriggerIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_PICKER_CONTEXT, null)

    return () => (
      <span
        {...attrs}
        aria-hidden="true"
        data-slot="date-picker-trigger-indicator"
        class={cn((ctx?.slots.value ?? datePickerVariants()).triggerIndicator(), props.class)}
      >
        {slots.default ? slots.default() : <IconCalendarDays class="size-4" />}
      </span>
    )
  }
})

export default DatePickerTriggerIndicator
