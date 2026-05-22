import {
  computed,
  defineComponent,
  inject,
  provide,
  ref,
  type HTMLAttributes,
  type PropType,
} from 'vue'
import {
  DatePickerField as RekaDatePickerField,
  DateRangePickerField as RekaDateRangePickerField,
} from 'reka-ui'
import { dateInputGroupVariants, type DateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import {
  DATE_FIELD_KIND,
  DATE_INPUT_GROUP_CONTEXT,
  DATE_SEGMENTS,
  type DateFieldKind,
  type DateRangeSegments,
  type DateSegment,
} from './date-input-group-context'

/**
 * DateInputGroup.Root — the segmented-input surface. HeroUI v3
 * `DateInputGroup` / `DateField.Group` / `TimeField.Group`
 * (`data-slot="date-input-group"`).
 *
 * Computes `dateInputGroupVariants` and provides the slot map to the compound
 * parts (`Input`, `InputContainer`, `Segment`, `Prefix`, `Suffix`).
 *
 * reka-ui has no single segmented-input primitive that auto-detects its parent.
 * The enclosing root advertises a `DateFieldKind` via `DATE_FIELD_KIND`:
 *   - `date` / `time` — the field root (`DateField`/`TimeField`) is already an
 *     ancestor and exposes the segment list, so this renders a plain
 *     `role="group"` surface.
 *   - `date-picker` — renders reka-ui `DatePickerField` (a `DateFieldRoot`
 *     bridged to the picker); its slot exposes the segment list.
 *   - `date-range-picker` — renders reka-ui `DateRangePickerField`.
 */
export const DateInputGroupRoot = defineComponent({
  name: 'DateInputGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI surface variant. @default 'primary' */
    variant: { type: String as PropType<DateInputGroupVariants['variant']>, default: undefined },
    /** HeroUI `fullWidth` — stretch the group to fill its container. @default false */
    fullWidth: { type: Boolean as PropType<DateInputGroupVariants['fullWidth']>, default: false },
  },
  setup (props, { attrs, slots }) {
    const kind = inject(DATE_FIELD_KIND, 'date') as DateFieldKind
    const styles = computed(() =>
      dateInputGroupVariants({ variant: props.variant, fullWidth: props.fullWidth }),
    )
    provide(DATE_INPUT_GROUP_CONTEXT, { slots: styles, kind })

    // For picker kinds the reka field primitive lives here, so capture its
    // segment slot and republish it for `DateInputGroup.Input`.
    const pickerSegments = ref<DateSegment[] | DateRangeSegments>(
      kind === 'date-range-picker' ? { start: [], end: [] } : [],
    )
    if (kind === 'date-picker' || kind === 'date-range-picker') {
      provide(DATE_SEGMENTS, { kind, segments: pickerSegments })
    }

    return () => {
      const className = cn(styles.value.base(), props.class)

      if (kind === 'date-picker') {
        return (
          <RekaDatePickerField {...attrs} data-slot="date-input-group" class={className}>
            {{
              default: ({ segments }: { segments: DateSegment[] }) => {
                pickerSegments.value = segments
                return slots.default?.()
              },
            }}
          </RekaDatePickerField>
        )
      }

      if (kind === 'date-range-picker') {
        return (
          <RekaDateRangePickerField {...attrs} data-slot="date-input-group" class={className}>
            {{
              default: ({ segments }: { segments: DateRangeSegments }) => {
                pickerSegments.value = segments
                return slots.default?.()
              },
            }}
          </RekaDateRangePickerField>
        )
      }

      return (
        <div {...attrs} role="group" data-slot="date-input-group" class={className}>
          {slots.default?.()}
        </div>
      )
    }
  },
})

export default DateInputGroupRoot
