import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerInput as RekaDateRangePickerInput } from 'reka-ui'
import type { SegmentPart } from 'reka-ui'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

type TSegmentItem = { part: string; value: string }

/**
 * DateRangePickerInput — a single segment of either the start or the end date.
 * HeroUI v3 `DateField.Segment` used inside `DateRangePicker`.
 *
 * `type` selects which half of the range this segment edits (`start` | `end`).
 * Renders reka-ui `DateRangePickerInput` for editable segments and an inert
 * `<span>` for literal separators (e.g. `/`).
 */
export const DateRangePickerInput = defineComponent({
  name: 'DateRangePickerInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Which half of the range this segment belongs to. */
    type: { type: String as PropType<'start' | 'end'>, required: true },
    /** The segment descriptor from `DateRangePickerField`'s render-prop. */
    segment: { type: Object as PropType<TSegmentItem>, required: true }
  },
  setup (props, { attrs }) {
    const slots = dateInputGroupVariants()
    return () => {
      const isLiteral = props.segment.part === 'literal'
      if (isLiteral) {
        return (
          <span
            {...attrs}
            data-slot="date-input-group-segment"
            data-literal
            class={cn(slots.segment(), props.class)}
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
          data-slot="date-input-group-segment"
          class={cn(slots.segment(), props.class)}
        >
          {props.segment.value}
        </RekaDateRangePickerInput>
      )
    }
  }
})

export default DateRangePickerInput
