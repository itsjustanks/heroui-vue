import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/**
 * Calendar.CellIndicator — the decorative indicator inside a day cell.
 *
 * Mirrors HeroUI React `CalendarCellIndicator` — a `<span aria-hidden="true">`
 * that carries the `data-slot="calendar-cell-indicator"` attribute and the
 * `calendar__cell-indicator` BEM class.  Use inside a custom `Calendar.Cell`
 * render-prop when you need explicit control over the indicator placement.
 */
export const CalendarCellIndicator = defineComponent({
  name: 'CalendarCellIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <span
        aria-hidden="true"
        {...attrs}
        data-slot="calendar-cell-indicator"
        class={cn((ctx?.slots.value ?? calendarVariants()).cellIndicator(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default CalendarCellIndicator
