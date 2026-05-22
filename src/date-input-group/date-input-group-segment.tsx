import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import {
  DateFieldInput as RekaDateFieldInput,
  DatePickerInput as RekaDatePickerInput,
  DateRangePickerInput as RekaDateRangePickerInput,
  TimeFieldInput as RekaTimeFieldInput,
} from 'reka-ui'
import type { SegmentPart } from 'reka-ui'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_INPUT_GROUP_CONTEXT, type DateSegment } from './date-input-group-context'

/** A segment descriptor, optionally tagged with its range half. */
type SegmentInput = DateSegment & { type?: 'start' | 'end' }

/**
 * DateInputGroup.Segment — a single editable segment. HeroUI v3
 * `DateInputGroup.Segment` / `DateField.Segment` / `TimeField.Segment`
 * (`data-slot="date-input-group-segment"`).
 *
 * Pass the `segment` object handed down by `DateInputGroup.Input`'s render-prop
 * slot. Renders the reka-ui segment primitive matching the field kind; literal
 * segments (`/`, `:`, spaces) render as inert spans.
 */
export const DateInputGroupSegment = defineComponent({
  name: 'DateInputGroupSegment',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The segment descriptor from `DateInputGroup.Input`'s render-prop slot. */
    segment: { type: Object as PropType<SegmentInput>, required: true },
  },
  setup (props, { attrs }) {
    const ctx = inject(DATE_INPUT_GROUP_CONTEXT, null)

    return () => {
      const styles = ctx?.slots.value ?? dateInputGroupVariants()
      const segmentClass = cn(styles.segment(), props.class)
      const { part, value } = props.segment
      const kind = ctx?.kind ?? 'date'

      if (part === 'literal') {
        return (
          <span
            {...attrs}
            data-slot="date-input-group-segment"
            data-type="literal"
            class={segmentClass}
          >
            {value}
          </span>
        )
      }

      const segmentProps = {
        ...attrs,
        part: part as SegmentPart,
        'data-slot': 'date-input-group-segment',
        class: segmentClass,
      }

      if (kind === 'date-range-picker') {
        return (
          <RekaDateRangePickerInput {...segmentProps} type={props.segment.type ?? 'start'}>
            {value}
          </RekaDateRangePickerInput>
        )
      }

      if (kind === 'date-picker') {
        return <RekaDatePickerInput {...segmentProps}>{value}</RekaDatePickerInput>
      }

      if (kind === 'time') {
        return <RekaTimeFieldInput {...segmentProps}>{value}</RekaTimeFieldInput>
      }

      return <RekaDateFieldInput {...segmentProps}>{value}</RekaDateFieldInput>
    }
  },
})

export default DateInputGroupSegment
