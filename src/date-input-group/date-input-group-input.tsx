import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import {
  DATE_INPUT_GROUP_CONTEXT,
  DATE_SEGMENTS,
  type DateRangeSegments,
  type DateSegment,
} from './date-input-group-context'

/**
 * DateInputGroup.Input — the segment iterator. HeroUI v3 `DateInputGroup.Input`
 * / `DateField.Input` / `TimeField.Input` (`data-slot="date-input-group-input"`).
 *
 * Mirrors HeroUI's render-prop API: `<DateField.Input>{(segment) => …}` — the
 * default slot is invoked once per date/time segment with `{ segment }`.
 *
 * For range fields, the `slot` prop selects which half (`start` | `end`) of the
 * range to render — matching HeroUI's `<DateField.Input slot="start">`.
 */
export const DateInputGroupInput = defineComponent({
  name: 'DateInputGroupInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Range half — `'start'` or `'end'`. Only used inside a `DateRangePicker`. */
    slot: { type: String as PropType<'start' | 'end'>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_INPUT_GROUP_CONTEXT, null)
    const segmentsCtx = inject(DATE_SEGMENTS, null)

    return () => {
      const styles = ctx?.slots.value ?? dateInputGroupVariants()
      const all = segmentsCtx?.segments.value

      let list: DateSegment[] = []

      if (Array.isArray(all)) {
        list = all
      } else if (all) {
        const range = all as DateRangeSegments
        list = props.slot === 'end' ? range.end : range.start
      }

      return (
        <div
          {...attrs}
          data-slot="date-input-group-input"
          class={cn(styles.input(), props.class)}
        >
          {list.map((segment) =>
            slots.default
              ? slots.default(props.slot ? { ...segment, type: props.slot } : segment)
              : <span key={segment.part}>{segment.value}</span>,
          )}
        </div>
      )
    }
  },
})

export default DateInputGroupInput
