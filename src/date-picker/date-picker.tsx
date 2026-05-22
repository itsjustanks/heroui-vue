import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { DatePickerRoot as RekaDatePickerRoot } from 'reka-ui'
import { datePickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_PICKER_CONTEXT } from './date-picker-context'

/**
 * DatePickerRoot — root of the date-picker compound. HeroUI v3 `DatePicker`.
 *
 * Computes `datePickerVariants` and provides the slot map to `.Trigger`,
 * `.TriggerIndicator`, and `.Popover`. Wraps reka-ui `DatePickerRoot`.
 */
export const DatePickerRoot = defineComponent({
  name: 'DatePicker',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => datePickerVariants())
    provide(DATE_PICKER_CONTEXT, { slots: styles })

    return () => (
      <RekaDatePickerRoot
        {...(attrs as Record<string, any>)}
        data-slot="date-picker"
        data-required={(attrs as Record<string, any>).required ? '' : undefined}
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaDatePickerRoot>
    )
  }
})

export default DatePickerRoot
