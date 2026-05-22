import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerInput as RekaDateRangePickerInput } from 'reka-ui'
import type { SegmentPart } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { TTimeSegment } from '@/time-field'

/**
 * DateRangePickerInput — a single segment of either the start or the end date.
 * HeroUI v3 `DateField.Segment` as used inside `DateRangePicker`.
 *
 * `type` selects which half of the range this segment edits (`start` | `end`),
 * matching HeroUI's `<DateField.Input slot="start">`. Renders reka-ui
 * `DateRangePickerInput` for editable segments and an inert span for literals.
 */
export const DateRangePickerInput = defineComponent({
  name: 'DateRangePickerInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Which half of the range this segment belongs to. */
    type: { type: String as PropType<'start' | 'end'>, required: true },
    /** The segment descriptor from `DateRangePickerField`'s render-prop. */
    segment: { type: Object as PropType<TTimeSegment>, required: true }
  },
  setup (props, { attrs }) {
    return () => {
      const isLiteral = props.segment.part === 'literal'
      if (isLiteral) {
        return (
          <span
            {...attrs}
            data-slot="date-input-group__segment--literal"
            class={cn('date-input-group__segment date-input-group__segment--literal', props.class)}
          >
            {props.segment.value}
          </span>
        )
      }
      return (
        <RekaDateRangePickerInput
          {...attrs}
          type={props.type}
          part={props.segment.part as SegmentPart}
          data-slot="date-input-group__segment"
          class={cn('date-input-group__segment', props.class)}
        >
          {props.segment.value}
        </RekaDateRangePickerInput>
      )
    }
  }
})

export default DateRangePickerInput
