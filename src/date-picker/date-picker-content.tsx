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
        class={cn(
          'z-50 w-auto rounded-xl border border-border bg-popover p-3 text-popover-foreground shadow-lg outline-none',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1',
          'data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaDatePickerContent>
    )
  }
})

export default DatePickerContent
