import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DatePickerContent as RekaDatePickerContent } from 'reka-ui'
import type { DatePickerContentProps } from 'reka-ui'
import { datePickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_PICKER_CONTEXT } from './date-picker-context'

/**
 * DatePicker.Popover — the floating panel that contains the calendar.
 * HeroUI v3 `DatePicker.Popover`.
 *
 * Alias: `DatePickerPopover` (canonical) and `DatePickerContent` (compat).
 * Wraps reka-ui `DatePickerContent`.
 */
export const DatePickerPopover = defineComponent({
  name: 'DatePickerPopover',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<DatePickerContentProps['align']>, default: 'start' },
    sideOffset: { type: Number, default: 8 }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_PICKER_CONTEXT, null)

    return () => (
      <RekaDatePickerContent
        {...attrs}
        align={props.align}
        sideOffset={props.sideOffset}
        data-slot="date-picker-popover"
        class={cn((ctx?.slots.value ?? datePickerVariants()).popover(), props.class)}
      >
        {slots.default?.()}
      </RekaDatePickerContent>
    )
  }
})

/** @deprecated Use `DatePickerPopover` — renamed to match HeroUI v3 API. */
export const DatePickerContent = DatePickerPopover

export default DatePickerPopover
