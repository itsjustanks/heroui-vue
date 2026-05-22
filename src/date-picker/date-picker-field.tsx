import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DatePickerField as RekaDatePickerField } from 'reka-ui'
import { cn } from '@/lib/utils'
import { dateInputGroupVariants, type TDateInputGroupVariants, type TTimeSegment } from '@/time-field'

/**
 * DatePickerField — the segmented-input surface. HeroUI v3 `DateField.Group`
 * collapsed with `DateField.Input`: it both styles the `date-input-group`
 * surface and maps reka-ui's `segments` to a render-prop child.
 *
 * Adapts HeroUI's `date-input-group` BEM (shared with `time-field`):
 * `rounded-md` bordered surface, focus-within ring, `primary` / `secondary`
 * variants. Use `DatePickerInput` for each segment and `DatePickerTrigger` as
 * the trailing adornment.
 */
export const DatePickerField = defineComponent({
  name: 'DatePickerField',
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
      <RekaDatePickerField
        {...attrs}
        data-slot="date-picker-field"
        class={cn(
          dateInputGroupVariants({ variant: props.variant, fullWidth: props.fullWidth }),
          props.class
        )}
      >
        {{
          default: ({ segments }: { segments: TTimeSegment[] }) => (
            slots.default
              ? segments.map((segment) => slots.default!({ segment }))
              : segments.map((segment) => <span key={segment.part}>{segment.value}</span>)
          )
        }}
      </RekaDatePickerField>
    )
  }
})

export default DatePickerField
