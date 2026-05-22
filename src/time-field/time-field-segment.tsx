import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { TimeFieldInput as RekaTimeSegment } from 'reka-ui'
import type { SegmentPart } from 'reka-ui'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TIME_FIELD_CONTEXT } from './time-field-context'

/**
 * TimeField.Segment — a single editable time segment (hour / minute / second /
 * dayPeriod / literal).
 * HeroUI v3 `TimeField.Segment` (maps to `DateInputGroupSegment`).
 *
 * Pass `part` from the segment item handed down by `TimeField.Input`'s
 * render-prop slot.
 */
export const TimeFieldSegment = defineComponent({
  name: 'TimeFieldSegment',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The segment part key — `'hour'`, `'minute'`, `'second'`, `'dayPeriod'`, `'literal'`, etc. */
    part: { type: String as PropType<SegmentPart | 'literal'>, required: true }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TIME_FIELD_CONTEXT, null)

    return () => {
      const segmentClass = cn((ctx?.slots.value ?? dateInputGroupVariants()).segment(), props.class)

      if (props.part === 'literal') {
        return (
          <span
            {...attrs}
            data-slot="date-input-group-segment"
            data-type="literal"
            class={segmentClass}
          >
            {slots.default?.()}
          </span>
        )
      }

      return (
        <RekaTimeSegment
          {...attrs}
          part={props.part as SegmentPart}
          data-slot="date-input-group-segment"
          class={segmentClass}
        >
          {slots.default?.()}
        </RekaTimeSegment>
      )
    }
  }
})

export default TimeFieldSegment
