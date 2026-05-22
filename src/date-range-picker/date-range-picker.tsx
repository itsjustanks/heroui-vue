import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerRoot as RekaDateRangePickerRoot } from 'reka-ui'
import { dateRangePickerVariants, type DateRangePickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_RANGE_PICKER_CONTEXT } from './date-range-picker-context'

/**
 * DateRangePickerRoot — the root context provider. Faithful Vue port of HeroUI v3
 * `DateRangePickerRoot`. Computes `dateRangePickerVariants` and provides the slot
 * map to all compound parts. Wraps reka-ui `DateRangePickerRoot` for the date
 * engine (`@internationalized/date` `DateRange`).
 */
export const DateRangePickerRoot = defineComponent({
  name: 'DateRangePicker',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => dateRangePickerVariants())
    provide(DATE_RANGE_PICKER_CONTEXT, { slots: styles })

    return () => (
      <RekaDateRangePickerRoot
        {...(attrs as Record<string, any>)}
        data-slot="date-range-picker"
        data-required={(attrs as Record<string, any>).required ? '' : undefined}
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaDateRangePickerRoot>
    )
  }
})

export default DateRangePickerRoot
