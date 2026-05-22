import { defineComponent, provide, ref, type HTMLAttributes, type PropType } from 'vue'
import { TimeFieldRoot as RekaTimeFieldRoot } from 'reka-ui'
import { timeFieldVariants, type TimeFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_KIND, DATE_SEGMENTS, type DateSegment } from '@/date-input-group'

/**
 * TimeField.Root — the segmented time-field root. Faithful Vue port of
 * HeroUI v3 `TimeField` (`data-slot="time-field"`).
 *
 * Wraps reka-ui `TimeFieldRoot`, applies `timeFieldVariants`, advertises the
 * `time` field kind, and republishes reka's segment slot so `TimeField.Input`
 * can iterate it. All reka props/emits are forwarded via `attrs`.
 */
export const TimeFieldRoot = defineComponent({
  name: 'TimeField',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI `fullWidth` — stretch the field to fill its container. @default false */
    fullWidth: { type: Boolean as PropType<TimeFieldVariants['fullWidth']>, default: false },
  },
  setup (props, { attrs, slots }) {
    provide(DATE_FIELD_KIND, 'time')

    const segments = ref<DateSegment[]>([])
    provide(DATE_SEGMENTS, { kind: 'time', segments })

    return () => (
      <RekaTimeFieldRoot
        {...(attrs as Record<string, unknown>)}
        data-slot="time-field"
        data-required={(attrs as Record<string, unknown>).required ? '' : undefined}
        class={cn(timeFieldVariants({ fullWidth: props.fullWidth }), props.class)}
      >
        {{
          default: (slotProps: { segments: DateSegment[] }) => {
            segments.value = slotProps.segments
            return slots.default?.(slotProps)
          },
        }}
      </RekaTimeFieldRoot>
    )
  },
})

export default TimeFieldRoot
