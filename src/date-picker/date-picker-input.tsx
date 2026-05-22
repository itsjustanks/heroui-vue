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
            class={cn('px-px text-muted-foreground', props.class)}
          >
            {props.segment.value}
          </span>
        )
      }
      return (
        <RekaDatePickerInput
          {...attrs}
          part={props.segment.part as SegmentPart}
          class={cn(
            'rounded px-0.5 py-0.5 text-foreground caret-transparent outline-none tabular-nums',
            'focus:bg-primary focus:text-primary-foreground',
            'data-[placeholder]:text-muted-foreground',
            'aria-[valuetext=Empty]:text-muted-foreground',
            props.class
          )}
        >
          {props.segment.value}
        </RekaDatePickerInput>
      )
    }
  }
})

export default DatePickerInput
