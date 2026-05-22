import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { DatePickerRoot as RekaDatePickerRoot } from 'reka-ui'
import { datePickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_KIND } from '@/date-input-group'
import { DATE_PICKER_CONTEXT } from './date-picker-context'

/**
 * DatePicker.Root — root of the date-picker compound. Faithful Vue port of
 * HeroUI v3 `DatePicker` (`data-slot="date-picker"`).
 *
 * Wraps reka-ui `DatePickerRoot`, computes `datePickerVariants`, and advertises
 * the `date-picker` field kind so a nested `DateField.Group` renders reka-ui's
 * `DatePickerField` bridge (wiring the segmented input to the picker value).
 */
export const DatePickerRoot = defineComponent({
  name: 'DatePicker',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => datePickerVariants())
    provide(DATE_PICKER_CONTEXT, { slots: styles })
    provide(DATE_FIELD_KIND, 'date-picker')

    return () => (
      <RekaDatePickerRoot
        {...(attrs as Record<string, unknown>)}
        data-slot="date-picker"
        data-required={(attrs as Record<string, unknown>).required ? '' : undefined}
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaDatePickerRoot>
    )
  },
})

export default DatePickerRoot
