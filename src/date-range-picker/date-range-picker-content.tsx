import { defineComponent, inject, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerContent as RekaDateRangePickerContent } from 'reka-ui'
import type { DateRangePickerContentProps } from 'reka-ui'
import { dateRangePickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import { DATE_RANGE_PICKER_CONTEXT } from './date-range-picker-context'

/**
 * DateRangePickerPopover — the floating range-calendar panel. HeroUI v3
 * `DateRangePicker.Popover` (`data-slot="date-range-picker-content"`).
 *
 * ⚠️  OVERLAY SHIM — DO NOT REMOVE.
 * Rendered `asChild` so reka-ui hands control of the overlay DOM element to our
 * `<div>`. `withDirectives(..., [[vHerouiState]])` mirrors reka-ui's `data-side`
 * → `data-placement` and `data-state` → `data-entering`/`data-exiting` so
 * HeroUI's CSS placement-aware animations fire correctly.
 */
export const DateRangePickerPopover = defineComponent({
  name: 'DateRangePickerPopover',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<DateRangePickerContentProps['align']>, default: 'start' },
    sideOffset: { type: Number, default: 8 }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_RANGE_PICKER_CONTEXT, null)
    return () => {
      const styles = ctx?.slots.value ?? dateRangePickerVariants()
      return (
        <RekaDateRangePickerContent
          align={props.align}
          sideOffset={props.sideOffset}
          asChild
        >
          {withDirectives(
            (
              <div
                {...attrs}
                data-slot="date-range-picker-content"
                class={cn(styles.popover(), props.class)}
              >
                {slots.default?.()}
              </div>
            ),
            [[vHerouiState]]
          )}
        </RekaDateRangePickerContent>
      )
    }
  }
})

export default DateRangePickerPopover
