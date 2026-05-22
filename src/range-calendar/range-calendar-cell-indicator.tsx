import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/**
 * RangeCalendar.CellIndicator — the decorative indicator inside a range day cell.
 *
 * Mirrors HeroUI React `RangeCalendarCellIndicator` — a `<span aria-hidden="true">`
 * with `data-slot="range-calendar-cell-indicator"` and the
 * `range-calendar__cell-indicator` BEM class.
 */
export const RangeCalendarCellIndicator = defineComponent({
  name: 'RangeCalendarCellIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <span
        aria-hidden="true"
        {...attrs}
        data-slot="range-calendar-cell-indicator"
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).cellIndicator(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default RangeCalendarCellIndicator
