import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DatePickerRoot, useForwardPropsEmits } from 'reka-ui'
import type { DatePickerRootEmits, DatePickerRootProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DatePicker — HeroUI-Vue date-picker root (primitive library, net-new).
 *
 * Faithful port of HeroUI v3 `DatePicker` over reka-ui `DatePickerRoot`.
 * `DatePickerRoot` wires a segmented date field + a popover + a calendar into
 * one shared context, so the compound parts (`DatePickerField`, `DatePickerInput`,
 * `DatePickerTrigger`, `DatePickerContent`, `DatePickerCalendar`) all stay in
 * sync. Date engine stays `@internationalized/date` — every `DatePickerRoot`
 * prop is forwarded: `modelValue`/`defaultValue`, `granularity`, `hourCycle`,
 * `minValue`/`maxValue`, `isDateDisabled`, `isDateUnavailable`, `locale`,
 * `numberOfMonths`, `disabled`, `readonly`, `placeholder`, …
 *
 * Compound API: `DatePicker`, `DatePickerField`, `DatePickerInput`,
 * `DatePickerTrigger`, `DatePickerContent`, `DatePickerCalendar` — mirrors
 * HeroUI's `DatePicker.*` parts (with `DatePickerContent` ≅ HeroUI
 * `DatePicker.Popover`).
 */
export const DatePicker = defineComponent({
  name: 'DatePickerView',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  emits: [] as unknown as DatePickerRootEmits,
  setup (props, { attrs, emit, slots }) {
    const forwarded = useForwardPropsEmits(attrs as DatePickerRootProps, emit as any)
    return () => (
      <DatePickerRoot
        {...forwarded.value}
        class={cn('flex flex-col gap-1.5', props.class)}
      >
        {slots.default?.()}
      </DatePickerRoot>
    )
  }
})

export default DatePicker
