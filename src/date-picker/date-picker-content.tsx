import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DatePickerContent as RekaDatePickerContent } from 'reka-ui'
import type { DatePickerContentProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DatePickerContent — the floating calendar panel. HeroUI v3
 * `DatePicker.Popover`.
 *
 * Adapts HeroUI's `popover` surface (matches `heroui/popover` taste):
 * `rounded-xl` overlay, `bg-popover`, `shadow-lg`, placement-aware enter/exit
 * animation keyed to reka-ui's `data-state` / `data-side`. Self-portals — drop a
 * `DatePickerCalendar` inside.
 */
export const DatePickerContent = defineComponent({
  name: 'DatePickerContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<DatePickerContentProps['align']>, default: 'start' },
    sideOffset: { type: Number, default: 8 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDatePickerContent
        {...attrs}
        align={props.align}
        sideOffset={props.sideOffset}
        data-slot="date-picker-content"
        class={cn('date-picker__popover', props.class)}
      >
        {slots.default?.()}
      </RekaDatePickerContent>
    )
  }
})

export default DatePickerContent
