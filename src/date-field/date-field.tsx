import { defineComponent, provide, ref, type HTMLAttributes, type PropType } from 'vue'
import { DateFieldRoot as RekaDateFieldRoot } from 'reka-ui'
import { dateFieldVariants, type DateFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_KIND, DATE_SEGMENTS, type DateSegment } from '@/date-input-group'

/**
 * DateField.Root — the segmented date-field root. Faithful Vue port of
 * HeroUI v3 `DateField` (`data-slot="date-field"`).
 *
 * Wraps reka-ui `DateFieldRoot`, applies `dateFieldVariants`, advertises the
 * `date` field kind, and republishes reka's segment slot so `DateField.Input`
 * can iterate it. All reka props/emits are forwarded via `attrs`.
 */
export const DateFieldRoot = defineComponent({
  name: 'DateField',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI `fullWidth` — stretch the field to fill its container. @default false */
    fullWidth: { type: Boolean as PropType<DateFieldVariants['fullWidth']>, default: false },
  },
  setup (props, { attrs, slots }) {
    provide(DATE_FIELD_KIND, 'date')

    const segments = ref<DateSegment[]>([])
    provide(DATE_SEGMENTS, { kind: 'date', segments })

    return () => (
      <RekaDateFieldRoot
        {...(attrs as Record<string, unknown>)}
        data-slot="date-field"
        data-required={(attrs as Record<string, unknown>).required ? '' : undefined}
        class={cn(dateFieldVariants({ fullWidth: props.fullWidth }), props.class)}
      >
        {{
          default: (slotProps: { segments: DateSegment[] }) => {
            segments.value = slotProps.segments
            return slots.default?.(slotProps)
          },
        }}
      </RekaDateFieldRoot>
    )
  },
})

export default DateFieldRoot
