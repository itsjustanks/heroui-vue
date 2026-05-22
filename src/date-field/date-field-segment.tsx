import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DateFieldInput as RekaDateSegment } from 'reka-ui'
import type { SegmentPart } from 'reka-ui'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_CONTEXT } from './date-field-context'

/**
 * DateField.Segment — a single editable date segment (day / month / year /
 * hour / minute / dayPeriod / timeZoneName / literal).
 * HeroUI v3 `DateField.Segment` (maps to `DateInputGroupSegment`).
 *
 * Pass `part` from the segment item handed down by `DateField.Input`'s
 * render-prop slot.
 */
export const DateFieldSegment = defineComponent({
  name: 'DateFieldSegment',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The segment part key — `'day'`, `'month'`, `'year'`, `'literal'`, etc. */
    part: { type: String as PropType<SegmentPart | 'literal'>, required: true }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_FIELD_CONTEXT, null)

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
        <RekaDateSegment
          {...attrs}
          part={props.part as SegmentPart}
          data-slot="date-input-group-segment"
          class={segmentClass}
        >
          {slots.default?.()}
        </RekaDateSegment>
      )
    }
  }
})

export default DateFieldSegment
