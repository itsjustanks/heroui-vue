import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerRoot as RekaDateRangePickerRoot } from 'reka-ui'
import { dateRangePickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_KIND } from '@/date-input-group'
import { DATE_RANGE_PICKER_CONTEXT } from './date-range-picker-context'

/**
 * DateRangePicker.Root — root of the date-range-picker compound. Faithful Vue
 * port of HeroUI v3 `DateRangePicker` (`data-slot="date-range-picker"`).
 *
 * Wraps reka-ui `DateRangePickerRoot`, computes `dateRangePickerVariants`, and
 * advertises the `date-range-picker` field kind so a nested `DateField.Group`
 * renders reka-ui's `DateRangePickerField` bridge.
 */
export const DateRangePickerRoot = defineComponent({
  name: 'DateRangePicker',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => dateRangePickerVariants())
    provide(DATE_RANGE_PICKER_CONTEXT, { slots: styles })
    provide(DATE_FIELD_KIND, 'date-range-picker')

    return () => (
      <RekaDateRangePickerRoot
        {...(attrs as Record<string, unknown>)}
        data-slot="date-range-picker"
        data-required={(attrs as Record<string, unknown>).required ? '' : undefined}
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaDateRangePickerRoot>
    )
  },
})

export default DateRangePickerRoot
