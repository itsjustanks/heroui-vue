import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TimeFieldInput as RekaTimeFieldInput } from 'reka-ui'
import type { SegmentPart } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { TTimeSegment } from './time-field-input'

/**
 * TimeFieldSegment — a single time segment (hour / minute / second / dayPeriod
 * / literal). HeroUI v3 `TimeField.Segment`.
 *
 * Renders reka-ui `TimeFieldInput` (one `part`) for editable segments and a
 * plain inert span for literals. HeroUI segment styling: `rounded` focus chip,
 * `text-foreground` selection, muted placeholder.
 */
export const TimeFieldSegment = defineComponent({
  name: 'TimeFieldSegment',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The segment descriptor handed down from `TimeFieldInput`'s render-prop. */
    segment: { type: Object as PropType<TTimeSegment>, required: true }
  },
  setup (props, { attrs }) {
    return () => {
      const isLiteral = props.segment.part === 'literal'
      if (isLiteral) {
        return (
          <span
            {...attrs}
            data-type="literal"
            class={cn('date-input-group__segment', props.class)}
          >
            {props.segment.value}
          </span>
        )
      }
      return (
        <RekaTimeFieldInput
          {...attrs}
          part={props.segment.part as SegmentPart}
          data-slot="date-input-group-segment"
          class={cn('date-input-group__segment', props.class)}
        >
          {props.segment.value}
        </RekaTimeFieldInput>
      )
    }
  }
})

export default TimeFieldSegment
