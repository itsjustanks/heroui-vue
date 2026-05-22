import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerField as RekaDateRangePickerField } from 'reka-ui'
import { dateInputGroupVariants, type DateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
/** A single segment descriptor as provided by reka-ui's range picker context. */
export type TRangeSegmentItem = { part: string; value: string }

/** The `{ start, end }` segment pair handed to `DateRangePickerField`'s slot. */
export type TDateRangeSegments = { start: TRangeSegmentItem[]; end: TRangeSegmentItem[] }

/**
 * DateRangePickerField — the dual-segment input surface. Styled via
 * `dateInputGroupVariants` (matches HeroUI's shared `date-input-group` BEM).
 *
 * Exposes reka-ui's range `segments` (`{ start, end }`) to a render-prop child
 * so consumers can map start segments, drop a `DateRangePicker.RangeSeparator`,
 * then map the end segments.
 */
export const DateRangePickerField = defineComponent({
  name: 'DateRangePickerField',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI surface variant — `primary` (bordered) or `secondary` (muted). */
    variant: { type: String as PropType<DateInputGroupVariants['variant']>, default: 'primary' },
    /** Stretch the field to fill its container. */
    fullWidth: { type: Boolean as PropType<boolean>, default: true }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const styles = dateInputGroupVariants({ variant: props.variant, fullWidth: props.fullWidth })
      return (
        <RekaDateRangePickerField
          {...attrs}
          data-slot="date-range-picker-field"
          class={cn(styles.base(), props.class)}
        >
          {{
            default: ({ segments }: { segments: TDateRangeSegments }) => (
              slots.default
                ? slots.default({ segments })
                : (
                  <>
                    {segments.start.map((s) => <span key={`start-${s.part}`}>{s.value}</span>)}
                    <span class="px-1 text-muted-foreground">–</span>
                    {segments.end.map((s) => <span key={`end-${s.part}`}>{s.value}</span>)}
                  </>
                )
            )
          }}
        </RekaDateRangePickerField>
      )
    }
  }
})

export default DateRangePickerField
