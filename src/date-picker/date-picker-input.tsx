import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DatePickerInput as RekaDatePickerInput } from 'reka-ui'
import type { SegmentPart } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { TTimeSegment } from '@/time-field'

/**
 * DatePickerInput — a single date segment (day / month / year / hour / minute /
 * dayPeriod / timeZoneName / literal). HeroUI v3 `DateField.Segment`.
 *
 * Renders reka-ui `DatePickerInput` for editable segments and an inert span for
 * literals. Styling matches `TimeFieldSegment` — `rounded` focus chip,
 * `text-foreground` selection, muted placeholder.
 */
export const DatePickerInput = defineComponent({
  name: 'DatePickerInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The segment descriptor handed down from `DatePickerField`'s render-prop. */
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
        <RekaDatePickerInput
          {...attrs}
          part={props.segment.part as SegmentPart}
          data-slot="date-input-group__segment"
          class={cn('date-input-group__segment', props.class)}
        >
          {props.segment.value}
        </RekaDatePickerInput>
      )
    }
  }
})

export default DatePickerInput
