import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerContent as RekaDateRangePickerContent } from 'reka-ui'
import type { DateRangePickerContentProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DateRangePickerContent — the floating range-calendar panel. HeroUI v3
 * `DateRangePicker.Popover`.
 *
 * Adapts HeroUI's `popover` surface (matches `popover` taste):
 * `rounded-xl` overlay, `bg-popover`, `shadow-lg`, placement-aware enter/exit
 * animation keyed to reka-ui's `data-state` / `data-side`. Self-portals — drop a
 * `DateRangePickerCalendar` inside.
 */
export const DateRangePickerContent = defineComponent({
  name: 'DateRangePickerContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<DateRangePickerContentProps['align']>, default: 'start' },
    sideOffset: { type: Number, default: 8 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDateRangePickerContent
        {...attrs}
        align={props.align}
        sideOffset={props.sideOffset}
        data-slot="date-range-picker-content"
        class={cn('date-range-picker__popover', props.class)}
      >
        {slots.default?.()}
      </RekaDateRangePickerContent>
    )
  }
})

export default DateRangePickerContent
