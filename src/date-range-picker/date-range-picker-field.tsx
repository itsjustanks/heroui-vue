import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerField as RekaDateRangePickerField } from 'reka-ui'
import { cn } from '@/lib/utils'
import { dateInputGroupVariants, type TDateInputGroupVariants, type TTimeSegment } from '@/time-field'

/** The `{ start, end }` segment pair handed to `DateRangePickerField`'s slot. */
export type TDateRangeSegments = { start: TTimeSegment[]; end: TTimeSegment[] }

/**
 * DateRangePickerField — the dual-segment input surface. HeroUI v3
 * `DateField.Group` as used inside `DateRangePicker`.
 *
 * Adapts HeroUI's shared `date-input-group` BEM (`rounded-md` bordered surface,
 * focus-within ring, `primary` / `secondary` variants). Exposes reka-ui's range
 * `segments` (`{ start, end }`) to a render-prop child so consumers map the
 * `start` group, drop a `DateRangePickerSeparator`, then the `end` group.
 */
export const DateRangePickerField = defineComponent({
  name: 'DateRangePickerField',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI surface variant — `primary` (bordered) or `secondary` (muted). */
    variant: { type: String as PropType<TDateInputGroupVariants['variant']>, default: 'primary' },
    /** HeroUI `fullWidth` — stretch the field to fill its container. */
    fullWidth: { type: Boolean, default: true }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDateRangePickerField
        {...attrs}
        data-slot="date-range-picker-field"
        class={cn(
          dateInputGroupVariants({ variant: props.variant, fullWidth: props.fullWidth }),
          props.class
        )}
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
})

export default DateRangePickerField
