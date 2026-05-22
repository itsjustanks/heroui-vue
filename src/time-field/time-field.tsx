import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TimeFieldRoot, useForwardPropsEmits } from 'reka-ui'
import type { TimeFieldRootEmits, TimeFieldRootProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * TimeField — HeroUI-Vue time-field root (primitive library, net-new).
 *
 * Faithful port of HeroUI v3 `TimeField` over reka-ui `TimeFieldRoot`. HeroUI's
 * `time-field` BEM is just a layout wrapper (`time-field`, `time-field--full-width`);
 * the segmented input surface lives in `TimeFieldGroup`. Date engine stays
 * `@internationalized/date` via reka-ui — `value` / `granularity` / `hourCycle`
 * / `hideTimeZone` / `step` / `minValue` / `maxValue` are all forwarded.
 *
 * Compound API: `TimeField`, `TimeFieldGroup`, `TimeFieldInput`, `TimeFieldSegment`,
 * `TimeFieldPrefix`, `TimeFieldSuffix` — mirrors HeroUI's `TimeField.*` parts.
 */
export const TimeField = defineComponent({
  name: 'TimeFieldView',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI `fullWidth` — stretch the field to fill its container. */
    fullWidth: { type: Boolean, default: false }
  },
  emits: [] as unknown as TimeFieldRootEmits,
  setup (props, { attrs, emit, slots }) {
    const forwarded = useForwardPropsEmits(attrs as TimeFieldRootProps, emit as any)
    return () => (
      <TimeFieldRoot
        {...forwarded.value}
        class={cn('flex flex-col gap-1.5', props.fullWidth && 'w-full', props.class)}
      >
        {{
          // reka-ui `TimeFieldRoot` exposes `segments`/`modelValue` — surface them
          // so consumers can drive a render-prop child, matching HeroUI's pattern.
          default: (slotProps: Record<string, unknown>) => slots.default?.(slotProps)
        }}
      </TimeFieldRoot>
    )
  }
})

export default TimeField
